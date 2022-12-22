import React from 'react'
import './index.css'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>andresbueno043</a>

      <ul className="permalinks">
        <ul>
          <li><a href="#"></a>Home</li>
          <li><a href="#about"></a>About</li>
          <li><a href="#experience"></a>Experience</li>
          <li><a href="#portfolio"></a>Portfolio</li>
          <li><a href="#contact"></a>Contact</li>
        </ul>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/andresbueno043">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com/andresbueno043">
          <BsInstagram />
        </a>
        <a href="https://github.com/andresbueno043">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; andresbueno043. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer