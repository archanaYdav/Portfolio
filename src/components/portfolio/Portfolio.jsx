import React from 'react';
import "./portfolio.css";

const data = [
    {
        id: 1, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6, 
        title: "This is a portfolio item title",
        github: 'https://github.com',
        demo: 'https://github.com'
    }
]
function Portfolio(props) {
    return (
        <section id='portfolio'>
            <h5>My Projects</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src="https://cdn.dribbble.com/userupload/10497933/file/original-1d2d932b1eb4daab97211cc95a4cdcd6.png?resize=1024x768" alt='img'/>
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github}  target='_blank' className='btn'>GitHub</a>
                                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
}

export default Portfolio;