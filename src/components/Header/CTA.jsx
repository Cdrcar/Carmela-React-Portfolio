import React from 'react'
import CV from '../../assets/cv.pdf' 


const CTA = () => { // Call to Action: encourage visitors to a specific action

  return (
    <div>
        <div className="cta">
            <a href={CV} download className= 'btn'>Download CV</a>
            <a href="#contact" className= 'btn btn-primary'>Contact</a>
        </div>
    </div>
  )
}

export default CTA