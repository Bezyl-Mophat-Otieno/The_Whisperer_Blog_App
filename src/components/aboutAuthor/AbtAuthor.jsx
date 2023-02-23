import React from 'react'
import './AbtAuthor.css'
import Comment from '../writecomment/Comment'
import { Link } from 'react-router-dom'
function AbtAuthor() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="side barTitle">ABOUT</span>
        <img
          src="https://images.pexels.com/photos/7706933/pexels-photo-7706933.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> OTHER BLOGS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
              Life
          </li>
          <li className="sidebarListItem">
              Music
          </li>
          <li className="sidebarListItem">
              Sport
          </li>
          <li className="sidebarListItem">
              Style
          </li>
          <li className="sidebarListItem">
              Tech
          </li>
          <li className="sidebarListItem">
              Cinema
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>  )
}

export default AbtAuthor