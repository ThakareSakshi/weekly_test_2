import React from 'react'
import InfoCard from './InfoCard'
import ProgrammingLang from './ProgrammingLang'
import HumanLang from './HumanLang'
import DevSkills from './DevSkills'
import Activity from './Activity'

const About = () => {
  return (
    <div className='about'>
      <div className='intro'>
        <p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>
        <p className='show-more'><i class="fa-solid fa-arrow-up"></i> show more <i class="fa-solid fa-arrow-down"></i></p>
      </div>
      <h2>Primary Focus</h2>
      <div className='cards-container'> 
        <InfoCard
             src="https://oktayshakirov.com/assets/images/icon-dev.svg"
            head="Web Design & Development"
            desc="Creating attractive, easy-to-use websites that work well for businesses and individuals online."/>
         <InfoCard 
            src="https://oktayshakirov.com/assets/images/icon-app.svg"
            head="Mobile Apps & Games" 
            desc=" Creating and developing engaging mobile apps and games for iOS and Android devices."></InfoCard>
        <InfoCard 
            src="https://oktayshakirov.com/assets/images/icon-frameworks.svg"
            head="Development Solutions"
            desc="Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."/>
        <InfoCard
            src="https://oktayshakirov.com/assets/images/icon-marketing.svg"
            head="Marketing & SEO"
            desc="Using SEO and marketing strategies to boost online visibility and promote products or services."/>
            </div>

            <h2>Exploring Creativity</h2>
            <div className='cards-container'>
                <InfoCard
                    src="https://oktayshakirov.com/assets/images/icon-video.svg"
                    head="Visual Storytelling"
                    desc="Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."/>
                <InfoCard
                    src="https://oktayshakirov.com/assets/images/icon-multimedia.svg"
                    head="Digital Content Creation"                 
                    desc="Creatiing dynamic digital content, such as 3D models, graphics or animations."/>
            </div>
            <h2>Programming Languages</h2>
            <ProgrammingLang/>
            <h2>Human Language</h2>
            <HumanLang/>
            <h2>Development Skills</h2>
            <DevSkills/>
            <h2>Favorite Activities</h2>
            <div className='Activity-container'>
                <Activity 
                    src="https://oktayshakirov.com/assets/images/finances.png" 
                    head="Investments"
                    desc="Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"/>

                    <Activity
                      src="https://oktayshakirov.com/assets/images/music.png"
                      head="Music"
                      desc="Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"/>
                      <Activity
                      src="https://oktayshakirov.com/assets/images/traveling.png"
                      head="Travelling"
                      desc="Capturing precious moments and memories through the lens of a camera."/>
                      <Activity
                      src="https://oktayshakirov.com/assets/images/camera.png"
                      head="Photography"
                      desc="Capturing precious moments and memories through the lens of a camera."/>

            </div>
    </div>
  )
}

export default About
