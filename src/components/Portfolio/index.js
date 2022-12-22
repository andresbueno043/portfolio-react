import React from 'react'
import './index.css'
import IMG1 from '../../assets/calculator.jpg'
import IMG2 from '../../assets/gameoflife.png'
import IMG3 from '../../assets/clickcounter.png'
import IMG4 from '../../assets/agenda.jpg'


const Portfolio = () => {

  const pages = [
    {
      title: 'Interactive Calculator',
      githubLink: 'https://github.com/andresbueno043/interactive-calc',
      link: 'https://andresbueno043.github.io/interactive-calc',
      image: IMG1
    },
    {
      title: "Conway's Game of life",
      githubLink: 'https://github.com/andresbueno043/game-of-life',
      link: 'https://andresbueno043.github.io/game-of-life',
      image: IMG2
    },
    {
      title: 'Click counter',
      githubLink: 'https://github.com/andresbueno043/my-click-counter',
      link: 'https://andresbueno043.github.io/my-click-counter',
      image: IMG3
    },
    {
      title: 'Agenda',
      githubLink: 'https://github.com/andresbueno043/activity-list',
      link: 'https://andresbueno043.github.io/activity-list',
      image: IMG4
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        pages.map(page => (
          <article key={page.title} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={page.image} alt="Portfolio image" />
          </div>
            <h3>{page.title}</h3>
            <div className="portfolio__item-cta">
              <a href={page.githubLink} className='btn'>Github</a>
              <a href={page.link} className="btn btn-primary" target='_blank'>
                Live demo
              </a>
            </div>
          </article>
        ))
        }
      </div>
    </section>
  )
}

export default Portfolio