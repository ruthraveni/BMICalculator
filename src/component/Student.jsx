import React from 'react'

function Student(props) {
  return (
    <div>
     <h1>Student Info</h1> 
     <p> Name:{props.name}</p>
     <p>Department:{props.dept}</p>
     <p>Year:{props.year}</p>
     <p>RollNo:{props.rollno}</p>
    </div>
  )
}

export default Student
