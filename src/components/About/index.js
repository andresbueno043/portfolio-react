import React from 'react'
import ME from '../../assets/about-me.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'
import './index.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Projects</h5>
              <VscFolderLibrary />
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisqueullamcorper ipsum. Maecenas dictum est urna, nec laoreet arcu feugiat sit amet.risus.
          </p>

          <a href="#content" className='btn btn-primary lets-talk'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About