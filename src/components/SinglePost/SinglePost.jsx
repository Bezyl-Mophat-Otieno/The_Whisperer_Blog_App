import "./SinglePost.css";
import Comment from "../writecomment/Comment";
import axios from "axios";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
function SinglePost() {

  const { pathname } = useLocation();
  const [singlePost, setSinglePost] = useState({});

useEffect(() => {
  const getSinglePost = async () => {
    try {
      const postID = new Object(pathname.split("/")[2]);
      const res = await axios.get("http://localhost:5000/api/posts/" + postID);
      setSinglePost(res.data)
      console.log(singlePost.photo)
    } catch {
       console.log('an error occured')
    }
  };
  getSinglePost();
}, []);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
{singlePost.photo && <img
          className="singlePostImg"
          src={singlePost.photo}
          alt=""
        />}

        <h1 className="singlePostTitle">
          { singlePost.tittle}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor"> {singlePost.username}</b>
          </span>
          <span> {new Date (singlePost.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
           {singlePost.desc}
        </p>
        <div className="d-flex justify-content-end">
          <Comment commentID ={singlePost._id} />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
