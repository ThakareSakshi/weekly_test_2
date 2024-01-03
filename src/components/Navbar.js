import React from 'react'
import About from './About';
import Certificates from './certificates/Certificates';
import ProjectsPage from './Project/ProjectsPage';
import More from './more/More';
import Contact from './contact/Contact';

const Navbar = ({handleContent}) => {

  const handlepage=(e)=>{
    const page=e.target.textContent;
    console.log(page)
    if(page=="About"){
      handleContent(<About/>)

    }else if(page=="Certificate"){
      handleContent(<Certificates/>)

    }else if(page=="Project"){
      handleContent(<ProjectsPage/>)

    }
    else if(page=="More"){
      handleContent(<More/>)

    }else{
      handleContent(<Contact/>)
    }

  }
  return (
    <div className='navbar'>
      <div className='heading'>
        About Me
      </div>
      <div className='nav-items-wrapper'>
        <ul>
            <li onClick={handlepage}>About</li>
            <li onClick={handlepage}>Certificate</li>
            <li onClick={handlepage}>Project</li>
            <li onClick={handlepage}>More</li>
            <li onClick={handlepage}>Contact</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
