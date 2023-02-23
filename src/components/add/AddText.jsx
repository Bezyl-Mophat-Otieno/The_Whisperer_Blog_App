import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import "./AddText";

function AddText({ commentID }) {
  const [text , setText ] = useState("")
  const [comment, setComment] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/comments/write",comment);
      console.log(`comment was successfully sent `+res.data);
    } catch (error) {
      console.log('an error occured');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value)
    setComment({commentID,comment:text});
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows={5}
        name="comment"
        onChange={(e)=>handleChange(e)}
        value={text}
      ></textarea> <br/>
      <button className="btn btn-outline-success btn-block" type="submit">Comment</button>
    </form>
  );
}
export default AddText;
