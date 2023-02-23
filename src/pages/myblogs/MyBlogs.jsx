import React from 'react'
import SearchBar from '../../components/searchbar/SearchBar';
import Posts from './../../components/posts/Posts';
function MyBlogs() {
  return (
    <>
    <div className=''>
     <SearchBar/>
     <Posts/>
    </div>
     </>
  )
}

export default MyBlogs