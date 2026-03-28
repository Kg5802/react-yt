import React from 'react'

const App = () => {
  const user = {
    name : 'krish',
    age : 23,
    skill : 'Java'
  };


  localStorage.setItem('user',JSON.stringify(user));
  const newuser = JSON.parse(localStorage.getItem('user'));
  console.log(newuser);

  return (
    <div>
      App
    </div>
  )
}

export default App
