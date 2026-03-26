import React, { useState } from 'react'

const App1 = () => {

    const [arr,setArr] = useState([10,20,30]);

    const btnChange = ()=>{
        const newelem =Math.floor(Math.random()*1000);
        setArr([...arr,newelem]);
    }



  return (
    <div>
        <button onClick={btnChange}>click</button>
      {arr.map((element)=>(
        <h3>{element}</h3>
      ))}
        
    </div>
  )
}

export default App1
