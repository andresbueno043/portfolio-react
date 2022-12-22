import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/andresbueno043" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/andresbueno043" target="_blank">
        <BsGithub/>
      </a>
      <a href="https://instagram.com/andresbueno043" target="_blank">
        <BsInstagram/>
      </a>
    </div>
  )
}

export default HeaderSocials