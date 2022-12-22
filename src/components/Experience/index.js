import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './index.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>These are my skills: </h5>
      <h2> My experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>React.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience