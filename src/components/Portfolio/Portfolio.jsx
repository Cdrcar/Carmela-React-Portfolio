import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sociosynergy.png'
import IMG2 from '../../assets/technovate.png'
import IMG3 from '../../assets/weather.png'
import IMG4 from '../../assets/quiz.png'
import IMG5 from '../../assets/password.png'
import IMG6 from '../../assets/jate.png'

// Map through array of items to generate the portfolio section
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Social media platform',
    github: 'https://github.com/Cdrcar/SocioSynergy',
    demo: 'https://sociosynergy2.herokuapp.com/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'CMS-style tech-blog following the MVC paradigm',
    github: 'https://github.com/Cdrcar/Technovate',
    demo: 'https://technovate.herokuapp.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Weather dashboard and forecast',
    github: 'https://github.com/Cdrcar/challenge-06-Weather-App',
    demo: 'https://cdrcar.github.io/Weather-App/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Timed coding quiz with multiple-choice questions',
    github: 'https://github.com/Cdrcar/challenge04-Quiz-App',
    demo: 'https://cdrcar.github.io/Quiz-App/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Password generator that creates random or customized passwords',
    github: 'https://github.com/Cdrcar/challenge03-Password-Generator',
    demo: 'https://cdrcar.github.io/Password-Generator/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Text editor that runs in the browser following the PWA criteria',
    github: 'https://github.com/Cdrcar/TextEditor-PWA',
    demo: 'https://another-text-6df59f26a1f0.herokuapp.com/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Case Study</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className = 'portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG1} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio


// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>Case Study</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="SocioSynergy" />
//           </div>
//           <h3>SocioSynergy</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/Cdrcar/SocioSynergy" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://sociosynergy2.herokuapp.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG2} alt="Technovate" />
//           </div>
//           <h3>Technovate</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/Cdrcar/Technovate" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://technovate.herokuapp.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG3} alt="Weather" />
//           </div>
//           <h3>WeatherApp</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/Cdrcar/challenge-06-Weather-App" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://cdrcar.github.io/Weather-App/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG4} alt="Quiz" />
//           </div>
//           <h3>QuizJS</h3>
//           <div className="portfolio__item-cta"> 
//           <a href="https://github.com/Cdrcar/challenge04-Quiz-App" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://cdrcar.github.io/Quiz-App/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG5} alt="Password Generator" />
//           </div>
//           <h3>Password Generator</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/Cdrcar/challenge03-Password-Generator" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://cdrcar.github.io/Password-Generator/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>

//         <article className = 'portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG6} alt="Text Editor" />
//           </div>
//           <h3>Text Editor</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/Cdrcar/TextEditor-PWA" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
//           <a href="https://another-text-6df59f26a1f0.herokuapp.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
//           </div>
//         </article>
//       </div>
//     </section>
//   )
// }