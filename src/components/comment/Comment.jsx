import Card from 'react-bootstrap/Card'
function Comment({comment}) {
  return (
    <>
    <Card className='ms-5 me-5'>
      <Card.Header className='text-center'>Comments</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
           {comment.comment}
          </p>
          <footer className="blockquote-footer">
            {new Date(comment.createdAt).toDateString()}
          </footer>
        </blockquote>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-trash-alt">Delete</i>
        </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default Comment;