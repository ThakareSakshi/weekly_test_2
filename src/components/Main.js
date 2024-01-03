import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Certificates from './certificates/Certificates'
import ProjectsPage from './Project/ProjectsPage'
import More from './more/More'
import Contact from './contact/Contact'
import { useState } from 'react'

const Main = () => {

  const [content,setContent]=useState(<About/>);

  const handleContent=(page)=>{
  
        setContent(page);
  }
  return (
    <div className='main-container'>
      <Navbar handleContent={handleContent}/>
      {/* <About></About>
      {/* <Certificates></Certificates> 
      <ProjectsPage/> */
      }
      {
        content
      }
      
    </div>
  )
}

export default Main
