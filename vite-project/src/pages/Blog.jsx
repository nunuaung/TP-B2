import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate();
  
  const submitHandler = ()=>{
    navigate("/about")
  }

  return (
    <div>Blog 
      <Link to={`/blog/1`} >See more</Link>
      <button type='button' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Blog