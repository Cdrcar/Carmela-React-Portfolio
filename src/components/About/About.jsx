import React from 'react';
import './about.css';
import PHOTO from '../../assets/my-photo.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>A little bit</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={PHOTO} alt="About" />
          </div>
        </div>

        <div className="about__content">

        <p>
          My name is Carmela, a dedicated junior developer with a strong desire to create engaging and user-friendly web experiences.
           <br />
           <br />
           I believe in lifelong learning and actively seek out new opportunities to enhance my expertise.
           <br />
           <br />
           I developed a love for nature and adventure. In my free time, you will often find me seeking new places to explore. I also love painting!
          </p>
          <br />

          <a href="#contact" className="btn btn-primary">Send Email</a>
        </div>
      </div>
    </section>
  );
};

export default About;
