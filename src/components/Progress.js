import React from 'react'

const Progress = (props) => {
  return (
    <div class="progress">
      <span>{props.head} </span><span> {props.proficiency}</span>
        <div class="progressbar">
            <div className='percentage' style={{width:props.percentage}}></div>
        </div>
    </div>
  )
}

export default Progress
