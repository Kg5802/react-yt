import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card username="Krish" age = {18} />
      <Card username="Saloni" age = {20} />
    </div>
  )
}

export default App
