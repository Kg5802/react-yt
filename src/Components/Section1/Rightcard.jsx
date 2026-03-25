import React from 'react'

import RightCardContext from './RightCardContext'

const Rightcard = (props) => {
  return (
    <div className='h-full w-60  shrink-0 overflow-hidden relative rounded-4xl'> 
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContext color={props.color} idx={props.idx} tag = {props.tag}/>
    </div>
  )
}

export default Rightcard
