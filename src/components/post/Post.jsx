import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Post.css'
function Post({singlePost}) {
  console.log(singlePost._id);
  return (
    <div className="post">
      {singlePost.photo && (
        <img
          className="postImg"
          src="https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{singlePost.category} </span>
          <span className="postCat">
            <Link to={`/comments/${singlePost._id}`} className="link">
              <FontAwesomeIcon icon={faComment} />
              18
            </Link>
          </span>
        </div>
        <span className="postTitle">{singlePost.tittle}</span>
        <hr />
        <span className="postDate">{new Date(singlePost.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
{singlePost.desc}
      </p>
    </div>
  );
}

export default Post