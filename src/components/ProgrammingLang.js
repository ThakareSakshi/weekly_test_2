import React from 'react'
import Progress from './Progress'

const ProgrammingLang = (props) => {
  return (
    <div className='programming-lang'>
        <Progress 
            head="JavaScript"
            proficiency="80%"
            percentage="80%"/>

        <Progress 
            head="Typescript"
            proficiency="50%"
            percentage="50%"/>


        <Progress 
            head="PHP"
            proficiency="40%"
            percentage="40%"/>

        <Progress 
            head="Python"
            proficiency="25%"
            percentage="25%"/>

        <Progress 
            head="CSS"
            proficiency="95%"
            percentage="95%"/>
        <Progress 
            head="HTML"
            proficiency="100%"
            percentage="100%"/>

      
    </div>
  )
}

export default ProgrammingLang
