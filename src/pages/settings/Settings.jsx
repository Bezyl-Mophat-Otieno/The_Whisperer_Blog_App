import React from 'react'
import './Settings.css'
import SideBar from './../../components/sideBar/SideBar';

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate ">Account Details</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="kalasinga" name="name" />
          <label>Email</label>
          <input type="email" placeholder="abdulmalik@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <label>About</label>
          <textarea rows='4' placeholder=' Tell us about yourself ...'></textarea>
          <div className='d-flex justify-content-center '>
          <button className="settingsSubmitButton " type="submit">UPDATE</button>
          <button className=" settingsDelButton ms-5" ><i className="far fa-trash-alt">Delete</i></button>
          </div>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings