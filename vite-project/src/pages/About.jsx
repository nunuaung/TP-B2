import React, { useEffect } from 'react'

const About = () => {

  // GET
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))
  //   .catch((err)=>console.log(err))
  // },[])

  //POST
  const paramStrings = {
    method: 'POST',
    header: 'Content-Type, application/json',
    body: JSON.stringify({
      body: "new data",
      id: 101,
      title: "new title",
      userId: "user1",
    })
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',paramStrings)
    .then((res)=>res.json())
    .then((data)=>console.log(`${data.id} has been created`))
  },[])


  return (
    <div>About</div>
  )
}

export default About