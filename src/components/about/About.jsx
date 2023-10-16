import React from 'react';
import "./about.css";
import Me from "../../assets/me-about.jpeg";

function About(props) {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <p>Hey there! I'm Archana Yadav. I love tech stuff! I've been learning a bunch of cool things like HTML, CSS, JavaScript, JQuery and Mern Stack etc. I've even worked on some neat projects like Cocktail website using cocktailDB and different below mentioned projects.
            <br/>
            I think technology can change the world, and I want to be part of that. I'm good at finding solutions to problems and paying attention to details.
            <br/>
            When I'm not doing tech stuff, I enjoy Krishna Bhajan and watching informative videos. 
            I believe in the transformative power of technology to shape the future, and I'm committed to contributing my skills and knowledge to this dynamic field. I'm really excited to meet and work with others who love tech too. Feel free to reach out to me at my <a href='#contact'>Email</a>

          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  );
}

export default About;