import './post.css'

export default function Post({post={}}){

  const {title, body, id, userId} = post;
  return (
    <div className='post'> 
      <h3>Post Title: {title} </h3>
      <p><small>userId: {userId} </small></p>
      <p><small>postId: {id} </small></p>
      <p> {body} </p>
    </div>
  )
  
} 