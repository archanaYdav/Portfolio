import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/cocktails.jpg";
import IMG2 from "../../assets/insta.jpg";
import IMG3 from "../../assets/EDUCATION.jpg";
import IMG4 from "../../assets/snake.jpg";
import IMG5 from "../../assets/code.jpg";
import IMG6 from "../../assets/crypto.jpg";

const data = [
    {
        id: 1, 
        title: "This is a Cocktail Website",
        img: IMG1,
        github: 'https://github.com/archanaYdav/MakeCocktail_Website',
        demo: 'https://makecocktail.onrender.com/'
    },
    {
        id: 2, 
        title: "This is a full Instagram Clone with backend",
        img: IMG2,
        github: 'https://github.com/archanaYdav/insta-clone',
        demo: 'https://insta-c986.onrender.com/'
    },
    {
        id: 3, 
        title: "This is a Education Ui website",
        img: IMG3,
        github: 'https://github.com/archanaYdav/Educational-website',
        demo: 'https://education-ui.onrender.com/'
    },
    {
        id: 4,  
        title: "This is a Snake Game",
        img: IMG4,
        github: 'https://github.com/archanaYdav/Snake',
        demo: 'https://github.com/archanaYdav/Snake#snake'
    },
    {
        id: 5, 
        title: "This is a Code Editor",
        img: IMG5,
        github: 'https://github.com/archanaYdav/Code-Editor',
        demo: 'https://code-editor-uxnv.onrender.com'
    },
    {
        id: 6, 
        title: "This is a Crpto Price Website",
        img: IMG6,
        github: 'https://github.com/archanaYdav/CrytoPrice',
        demo: 'https://cryptprice.onrender.com/'
    }
]

function Portfolio(props) {
    return (
        <section id='portfolio'>
            <h5>My Projects</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, title, github, demo, img}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={img} alt='img'/>
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