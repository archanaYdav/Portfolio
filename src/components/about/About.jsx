import React from 'react';
import "./about.css";
import Me from "../../assets/me-about.jpg";

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
                <p>Aubrey Drake Graham is a Canadian rapper and singer. An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop. 
                Aubrey Drake Graham is a Canadian rapper and singer. An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop. 
                Aubrey Drake Graham is a Canadian rapper and singer. An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop.  </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
              </div>
              
            </div>
        </section>
    );
}

export default About;