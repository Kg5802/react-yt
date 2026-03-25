import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContext = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11 flex justify-center items-center'>{props.idx+1}</h2>
            <div>
                <p className='text-white leading-[1.2] mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam nihil facere quia saepe sint?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}}  className=' text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}}  className=' text-white font-medium px-3 py-2 rounded-full'><MoveRight size={15} /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContext
