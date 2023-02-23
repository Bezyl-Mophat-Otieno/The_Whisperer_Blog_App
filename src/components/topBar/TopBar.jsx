import React from 'react'
import './TopBar.css'
import { Link } from "react-router-dom";
import Login from '../modals/Login';
import { useState } from 'react';
import SearchBar from '../searchbar/SearchBar';
import Logo from '../../assets/logo.png'
function TopBar() {
  const [show, setShow] = useState(false);
  let user = false;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [blogger,setBlogger] = useState(false)
const [notBlogger , setNotBlogger]=useState(false)
 const handleYesClick = ()=>{
setBlogger(true)
 }

 const handleNoClick = ()=>{
setBlogger(false)
setNotBlogger(true)
   }

  return (
    <>
      <div className='top'>
        <div className="topLeft">

          {<Link to='#'> <img
            className="logo"
            src={Logo}
            alt=""
          /></Link>}

          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <Link to='/write' className='link'> <li className='topListItem '> {user && "WRITE"}</li></Link>
            <Link to='/myblogs' className='link'> <li className='topListItem '> {user && "MYBLOGS"}</li></Link>
            <Link to='/' className='link'> <li className='topListItem '> HOME</li></Link>
            <Link to='#' className='link'>  {user && <li className='topListItem' >Logout</li>} </Link>
            <Login handleClose={handleClose} handleShow={handleShow} show={show} />

          </ul>
        </div>
        <div className='topRight'>

          {

            user && <Link to='/settings'> <img
              className="topImg"
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            /></Link>

          }

          {
            blogger &&
            <ul className="topList">
              <Link to='/register' className='link'><li className="topListItem">REGISTER</li></Link>
              <Link to='/login' className='link'><li className="topListItem">LOGIN</li></Link>
            </ul>
          }

{
            (!user&&!blogger&&!notBlogger) &&
            <ul className="topList">
              <li className="text-success mt-2 me-2">ARE YOU A WRITER ?</li>
              <Link to='#' className='link'><li onClick={handleYesClick} className="topListItem btn btn-outline-secondary">YES</li></Link>
              <Link to='#' className='link'><li onClick={handleNoClick} className="topListItem btn btn-outline-secondary">NO</li></Link>
            </ul>
          }

          {user && <span>Kalasinga Abdulmalik</span>}
        </div>

      </div>
    </>
  )
}

export default TopBar