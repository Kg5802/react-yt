import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.data.url} target="_blank">
            <div className="h-40 overflow-hidden w-44 rounded-xl">
              <img
                className="h-[90%] w-full object-cover"
                src={props.data.download_url}
              />
            </div>
            <h2 className="font-bold text-lg">{props.data.author}</h2>
          </a>
    </div>
  )
}

export default Card
