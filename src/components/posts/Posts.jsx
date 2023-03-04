import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
function Posts() {
const [posts , setPosts] = useState([])
const {search} =useLocation();
console.log(location);
useEffect(()=>{
const getPosts = async ()=>{
  const res = await axios.get('http://localhost:5000/api/posts'+search)
  console.log(res)
  const data = res.data
  setPosts(data)
}
getPosts()
},[search])
  return (
    <div className="posts">
      {
        posts.map((post)=>{
       return <Link className='link' to={`/singlepost/${post._id}`} key={post._id}>< Post singlePost={post} /></Link>
})
        

      }
    </div>)
}

export default Posts