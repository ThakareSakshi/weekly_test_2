import React from 'react'
import Progress from './Progress'

const HumanLang = () => {
  return (
    <div className='programming-lang'>
        <Progress 
            head="English"
            proficiency="Fluent"
            percentage="100%"/>

        <Progress 
            head="German"
            proficiency="Fluent"
            percentage="100%"/>


        <Progress 
            head="Bulgarian"
            proficiency="Native"
            percentage="100%"/>

        <Progress 
            head="Turkish"
            proficiency="Bilingual"
            percentage="75%"/>

        
      
    </div>
  )
}

export default HumanLang
