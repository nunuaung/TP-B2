import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';

const About = () => {
const [dataList,setDataList] = useState([]);
  // GET
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))
  //   .catch((err)=>console.log(err))
  // },[])

  //POST
  // const paramStrings = {
  //   method: 'POST',
  //   header: 'Content-Type, application/json',
  //   body: JSON.stringify({
  //     body: "new data",
  //     id: 101,
  //     title: "new title",
  //     userId: "user1",
  //   })
  // }
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts',paramStrings)
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(`${data.id} has been created`))
  // },[])

  const body = {
    body: 'new data 1',
    id: 101,
    title: 'new title 1',
    userId: 'user2',
  }

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setDataList(res.data))
  // },[])

  // useEffect(()=>{
  //   axios.post('https://jsonplaceholder.typicode.com/posts',body).then((res)=>console.log(res.data.id))
  // },[])

  const fetchData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>res.data)
  }

  const {data,isLoading} = useQuery({
    queryKey: ["postData"],
    queryFn: fetchData,
  })

  return (
    <div>About
      {
        isLoading ? <p></p> :
        data.map((item)=>
        <p key={item.id}>{item.title}</p>
        )
      }
    </div>
  )
}

export default About