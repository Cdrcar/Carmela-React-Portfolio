import React from 'react'
import './header.css'
import CTA from './CTA'
import PHOTO from '../../assets/car-logo.png'
import HeaderSocialMedia  from './HeaderSocialMedia'
import {AiOutlineSwapRight} from 'react-icons/ai'

import 'aos/dist/aos.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Carmela Rey</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA/> {/* buttons for Download CV and Contact */}
        
        <HeaderSocialMedia/> {/* Social Media links */}

        <div className="my-photo">
          <img src={PHOTO} alt="me" /> {/* My photo */}
        </div>


        <a href="#contact" className= 'scroll__down'><AiOutlineSwapRight/></a>
      </div>
    </header>
    
  )
}

export default Header