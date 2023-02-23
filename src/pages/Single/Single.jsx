import './Single.css'
import React from 'react'
import AbtAuthor from '../../components/aboutAuthor/AbtAuthor'
import SinglePost from '../../components/SinglePost/SinglePost'
function Single() {
  return (
    <>
    <div className='single'>
         <SinglePost/>
         <AbtAuthor/>

    </div>
    </>
  )
}

export default Single