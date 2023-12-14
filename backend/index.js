const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors({credentials: true, origin:"http://localhost:5173"}));
app.use(express.json());

//Database Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)

app.get("/" , (req, res) => {
    res.send("<h1>'This a ReSTful for SE NPRU Blog'</h1>")
})


//User Register
const salt = bcrypt.genSaltSync(10);
app.post("/register",async (req,res)=>{
    const {username, password} = req.body; //resac
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

//User login
const secret =  process.env.SECRET;
app.post("/login", async (req,res) =>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({ username});
    const isMatchedPassword = bcrypt.compareSync(password, userDoc.password);
    if(isMatchedPassword){
        //logged in
        jwt.sign({username, id:userDoc}, secret, {} ,  (err, token) =>{
            if(err) throw err;
            //Save data in cookie
            res.cookie("token", token).json({
                id: userDoc.id,
                username,
            });
        });
    }else{
        res.status(400).json("wrong credentials")
    }
})

app.post("/logout", (req,res) =>{
    res.cookie("token", "").json("ok");
});


const POST = process.env.POST;
app.listen(POST ,()=>{
    console.log("Server is running on http://localhost:" + POST);
});
