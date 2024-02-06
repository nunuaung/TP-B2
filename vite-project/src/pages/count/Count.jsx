import React, { useEffect, useState } from 'react'

const Count = () => {
    const [myCount, setMyCount] =useState(0)
    const [isSubmite, setIsSubmited] = useState(false)

    // const [selectedCategory, setSelectedCategory] =useState(0)

    useEffect(()=>{
        console.log("Render in useEffect")
        setMyCount(myCount+1)
    },[isSubmite])



     
    

    // no dependency   render forever
    // [] dependency   render first time
    // [state] dependency   render every state change

    // catgory = ["all","gradeA","gradeB"]

    const submitHandler = ()=>{
        setIsSubmited(!isSubmite)
    }

  return (
    <div>My Count {myCount}
        <button type='button' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Count