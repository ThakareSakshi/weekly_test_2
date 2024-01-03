import React from 'react'
import Project from './Project'

const ProjectsPage = () => {
  return (
    <div className='project-page'>
      <ul>
        <li>All</li>
        <li>Websites</li>
        <li>Application</li>
        <li>Games</li>
      </ul>

      <div className='All-projects'>
        <Project 
        src="https://oktayshakirov.com/assets/images/projects/mybestwishes.jpg"
        head="MyBestWishes AI Generator"
        type="Design + Frontend"
        tech="Figma | React.js | Chakra UI"/>

      <Project 
        src="https://oktayshakirov.com/assets/images/projects/myworkphoto.png"
        head="MyWorkPhoto AI Generator"
        type="Design + Frontend"
        tech="Figma | React.js | Chakra UI"/>

      <Project 
        src="https://oktayshakirov.com/assets/images/projects/ogno-dashboard.png"
        head="Ogno Marketing Dashboard"
        type="Fullstack Project"
        tech="React.js | Strapi.js | MySQL"/>

         <Project 
        src="https://oktayshakirov.com/assets/images/projects/bayer-askmed.png"
        head="AskMed By Bayer"
        type="Website + Chatbot"
        tech="Drupal | PHP | CSS"/>


         <Project 
        src="https://oktayshakirov.com/assets/images/projects/enemzet.png"
        head="EnEmZet Online Store"
        type="Website + Admin Panel"
        tech="Next.js | TypeScript | MySQL"/>

         <Project 
        src="https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png"
        head="Beyond Tinnitus Blog"
        type="Website"
        tech="Next.js | TypeScript | Material-UI"/>

      <Project 
        src="https://oktayshakirov.com/assets/images/projects/watch_store.png"
        head="Timeazon Online Store"
        type="Website + Admin Panel"
        tech="React.js | Node.js | MySQL | Sass"/>

      <Project 
        src="https://oktayshakirov.com/assets/images/projects/weather-app.png"
        head="Weather App"
        type="Application"
        tech="JavaScript | API's | CSS"/>

      <Project 
        src="https://oktayshakirov.com/assets/images/projects/pigletz-matching.png"
        head="Pigletz Memory Game"
        type="Web Game"
        tech="JavaScript | CSS"/>

      </div>
    </div>
  )
}

export default ProjectsPage
