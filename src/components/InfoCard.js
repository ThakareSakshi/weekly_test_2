import React from 'react'

const InfoCard = (props) => {
  return (
    <div className='info-card'>
      <div className='card-icon'>
         <img src={props.src}></img>
      </div>
      <div className='desc'>
        <h3>{props.head}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default InfoCard
