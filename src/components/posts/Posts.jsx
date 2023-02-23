import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Posts() {
const [posts , setPosts] = useState([])

useEffect(()=>{
const getPosts = async ()=>{
  const res = await axios.get('http://localhost:5000/api/posts')
  console.log(res)
  const data = res.data
  setPosts(data)
}
getPosts()
},[])
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