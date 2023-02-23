import './Comments.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/comment/Comment'
import axios from 'axios';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
function Comments() {
  const {pathname} = useLocation()
  const [comments , setComments] = useState([])
  const [postTittle, setPostTittle] = useState('')
  useEffect(()=>{
      const fetchComments = async()=>{
        const postID = new Object(pathname.split('/')[2]);
        const res1= await axios.get('http://localhost:5000/api/comments/'+postID)
        const res2 = await axios.get('http://localhost:5000/api/posts/'+postID)
        setPostTittle(res2.data.tittle)
        setComments(res1.data)
        console.log(`my post ID`+postID)
        console.log(res1.data)


      }
      fetchComments()
  },[pathname])
  return (
    <div className=''>
          <h3 className='text-center mb-5'> {postTittle}</h3>
      <Row>
      { 
      comments.map((comment)=><Col><div>  <Comment comment={comment} /> </div></Col>)
      }
      </Row>


    </div>
  )
}

export default Comments
