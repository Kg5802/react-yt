import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  
  
  return (
    <div className="card">
        
         <div className="top">
          <img src={props.img} alt="" />
          <button>Save <Bookmark size={13}/> </button>
         </div>
         
         <div className="center">
          <h3>{props.companyName} <span> {props.posted}</span></h3>
          <h2> {props.post} </h2>
          <div className='tag'>
            <h4>{props.tags1}</h4>
            <h4>{props.tags2}</h4>
          </div>
         </div>

         <div className="bottom">
            <div>
              <h3>{props.pay}/hr</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
         </div>

      </div>
  )
}

export default Card
