import React from 'react'
import '../App.css'
function calc(r){
    return 3.14* r*r;
}
function College() {
   // const clg="karpagam College of Engineering"
  return (
    <div>
      <h1 className='a '>Area :{calc(9)}</h1>
    </div>
  )
}
 
export default College
