import React from 'react'

const Activity = (props) => {
  return (
    <div className='activity'>
      
      <div style={{display:"flex" ,gap:"10px"}}> <img src={props.src}/><h4>{props.head}</h4></div>
      
      <p>{props.desc}</p>
    </div>
  )
}

export default Activity
