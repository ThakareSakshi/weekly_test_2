import React from 'react'

const EachCertificate = (props) => {
  return (
    <div className='each-certificate'>
      <div className='milestone'>
        <div className='submilstone'></div>
      </div>
        <h5>{props.head}</h5>
        <p>{props.subhead}</p>
        <div className='certificate-img-wrapper'>
            <img src={props.src}/>
        </div>
      
    </div>
  )
}

export default EachCertificate
