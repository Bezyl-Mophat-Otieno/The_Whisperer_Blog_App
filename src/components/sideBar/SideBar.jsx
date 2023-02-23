import React from 'react'
import './SideBar.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function SideBar() {
const [categories , setCategories] = useState([])
useEffect(()=>{
 const fetchCategory = async()=>{
 const res = await axios.get('http://localhost:5000/api/categories')
 setCategories(res.data)
 }
fetchCategory()
},[])
  //  console.log(categories)
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">

           {
                  categories.map((category)=>{
                   return <li className="sidebarListItem">{category.category}</li>

           })
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>  )
}

export default SideBar