import React from 'react'

const Card = (props) => {
  
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1772514214331-8612392b7543?q=80&w=518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.username}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Veiw card</button>
      </div>
  )
}

export default Card
