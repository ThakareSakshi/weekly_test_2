import React from 'react'

const Project = (props) => {
  return (
    <div className='project'>
      <div className='project-img'>
        <img  src={props.src} />
      </div>
      <h3>{props.head}</h3>
      <p>{props.type}</p>
      <p>{props.tech}</p>
      <button>preview</button>
    </div>
  )
}

export default Project
