import React from 'react'
import './Comment.css'
import AddText from '../../components/add/AddText'
function Comment({commentID}) {
  return (
    <div className=''>
      <div className='write-comment'>
        <AddText commentID={commentID} />
      </div>
    </div>
  )
}
export default Comment
