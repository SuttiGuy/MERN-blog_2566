import React from 'react'

const PostPage = () => {
  return (
    <div className="post-page">
        <h1>
        {" "}
        บล็อก (Blog) คือเว็บไซด์รูปแบบหนึ่ง ที่มีลักษณะรูปร่างหน้าตาคล้ายๆกับการเขียนไดอารี่
        หรือ บันทึกส่วนตัว ซึ่งเป็นที่นิยมกันมากในปัจจุบัน เนื่องจากเราใช้ฟรี ไม่ต้องเสียเงิน
        คำว่า "Blog" มาจากคำเต็มว่า "Weblog" (ตัด We ทิ้ง คงเหลือแต่ blog) 
        </h1>
        <time> 13 December 2023 - 15:52 </time>
        <div className="author"> By @Suttiguy </div>
        <div className="image">
        <img src="https://4.bp.blogspot.com/-YtiMvdOCKbk/UrS_pj69SSI/AAAAAAAACvo/WIV5xlTZnu0/s1600/what-is-blog.jpg"
         alt="" 
         />
        </div>
        <div className="content" >
        Blog ใช้ทำอะไรได้บ้าง?
- ทำBlog เป็นเว็บไซด์ส่วนตัว เพื่อแชร์ข้อมูลส่วนตัวให้กับผู้อื่นๆ เช่น บันทึกไดอารี่
- เขียนBlog เพื่อบอกเล่าเรื่องราวต่างๆ นำเสนอสิ่งที่ตนเองรู้ หรือสิ่งที่ตนเองสนใจ เพื่อแบ่งปันให้กับผู้อื่น
- สร้างBlog ทำเป็นเว็บไซด์เพื่อใช้ในการโปรโมทธุรกิจ ร้านค้า บริการต่างๆ
- ใช้Blog ในการทำธุรกิจขายสินค้าออนไลน์ (E-Commerce)
        </div>
        
    </div>
  )
}

export default PostPage