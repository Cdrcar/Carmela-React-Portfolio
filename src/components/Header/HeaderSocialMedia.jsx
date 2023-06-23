import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const HeaderSocialMedia = () => {
  return (
    <div className= 'header__socials'>
        <a href="https://www.linkedin.com/in/carmelarey/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Cdrcar" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="mailto:carmela881@outlook.com" target="_blank" rel="noreferrer"><AiOutlineMail/></a>
    </div>
  )
}

export default HeaderSocialMedia