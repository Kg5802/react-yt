import React, { use, useState } from 'react'

const Question3 = () => {

    const [password,setpassword] = useState(false);
    
    const togglePassword = () =>{
        setpassword(!password);
    }

  return (
    <div>
      <input type={password ? 'text' : 'password'} name="Username" placeholder='Enter the name'/>
      <button onClick={togglePassword}>{password ? 'Hide password' : 'show password'}</button>
    </div>
  )
}

export default Question3
