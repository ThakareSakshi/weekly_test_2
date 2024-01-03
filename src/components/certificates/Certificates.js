import React from 'react'
import EachCertificate from './EachCertificate'

const Certificates = () => {
  return (
    <div className='certificates-page'> 
      <div>
        <h2>Technical Competence</h2>
        <EachCertificate 
            head="Node.Js Essentials"
            subhead="LinkedIn Learning"
            src="https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png"/>


        <EachCertificate
            head="React.Js Essentials"
            subhead="LinkedIn Learning"
            src="https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png"/>

<       EachCertificate
            head="JavaScript Essentials"
            subhead="LinkedIn Learning"
            src="https://oktayshakirov.com/assets/images/certificates/javascript-essentials.png"/>

        <EachCertificate
            head="Fundamentals Of Digital Marketing"
            subhead="Google Certified Digital Marketing Course"
            src="https://oktayshakirov.com/assets/images/certificates/fundamentals-of-digital-marketing.png"/>

        <EachCertificate
            head="Elements Of AI"
            subhead="University of Helsinki"
            src="https://oktayshakirov.com/assets/images/certificates/elements-of-ai.png"/>

      </div>


      <div>
        <h2>Professional Skills</h2>
        <EachCertificate 
            head="Efficient Email Management"
            subhead="WEKA Media GmbH & Co. KG"
            src="https://oktayshakirov.com/assets/images/certificates/efficient-email-management.png"/>


        <EachCertificate
            head="Time And Self Management"
            subhead="VIWIS GmbH"
            src="https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png"/>

<       EachCertificate
            head="Excel 2013 Professional"
            subhead="Microsoft"
            src="https://oktayshakirov.com/assets/images/certificates/excel-2013-professional.png"/>

        <EachCertificate
            head="Word 2013 Professional"
            subhead="Microsoft"
            src="https://oktayshakirov.com/assets/images/certificates/word-2013-professional.png"/>

        <EachCertificate
            head="Intercultural Competence"
            subhead="IMAP GmbH"
            src="https://oktayshakirov.com/assets/images/certificates/intercultural-competence.png"/>

        <EachCertificate
            head="Communication And Complaint Management"
            subhead="Hiba impulse GmbH"
            src="https://oktayshakirov.com/assets/images/certificates/communication-complaint-management.png"/>

      </div>
      <div>
        <h2>Language Proficiency</h2>
        <EachCertificate
            head="German Language C1"
            subhead="TELC European Language Certificates"
            src="https://oktayshakirov.com/assets/images/certificates/german-c1.png"/>
        
        <EachCertificate
            head="English Language B2"
            subhead="LinguaTV GmbH"
            src="https://oktayshakirov.com/assets/images/certificates/english-b2.png"/>

      </div>
    </div>
  )
}

export default Certificates
