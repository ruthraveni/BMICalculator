import React from 'react'

function Welcome() {
    const hour =new Date().getHours();
    const greet = hour < 12 ?"Good Morning" : hour <17?"Good Afternoon" : "Good Evening"
  return (
    <div><h2>{greet}</h2></div>
  )
}

export default Welcome
