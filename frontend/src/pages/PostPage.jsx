import { useEffect, useState, useContext } from "react";
import { format } from "date-fns";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BASE_URL;

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${baseURL}/post/${id}`).then((response) => {
      response.json().then((posts) => {
        setPostInfo(posts);
      });
    });
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseURL}/posts/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Post deleted successfully!");
        navigate("/");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  if (!postInfo) return "";
  console.log(postInfo);

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), "dd MMMM yyyy HH:MM")} </time>
      <div className="author"> By @{postInfo.author.username} </div>
      {userInfo?.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            EditPost
          </Link>
          <Link
            className="delete-btn"
            to="#"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Delete This post
          </Link>
          {showDeleteConfirmation && (
            <div className="delete-confirmation">
              <p>Are you sure you want to delete this post?</p>
              <button onClick={() => handleDelete()}>Yes, Delete</button>
              <button onClick={() => setShowDeleteConfirmation(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
      <div className="image">
        <Link>
          <img src={`${baseURL}/${postInfo.cover}`} alt="" />
        </Link>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      ></div>
    </div>
  );
};

export default PostPage;
