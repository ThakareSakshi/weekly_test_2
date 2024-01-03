import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="profile-pic">
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt=""/>
      </div>

      <h3>Oktay Shakirov</h3>
      <div className='hello-world'>
        <p>Hello World !</p>
      </div>
      <hr/>

      <div className='info'>
        <div className="icon">
    #
        </div>
        <span>
            <p>AGE</p>
            <p>29 years old</p>
        </span>
      </div>

      <div className='info'>
        <div className="icon">
    #
        </div>
        <span>
            <p>LOCATION</p>
            <p>Berlin, Germany</p>
        </span>
      </div>


      <div className='info'>
        <div className="icon">
    #
        </div>
        <span>
            <p>PERSONALITY TYPE</p>
            <p>INTJ-T</p>
        </span>
      </div>
    </div>
  )
}

export default Sidebar
