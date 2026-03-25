import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
    console.log(props.users);
    
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-auto flex-nowrap gap-10 p-4 w-2/3'>
        {props.users.map(function(elem,idx){
            return <Rightcard color={elem.color} idx={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
