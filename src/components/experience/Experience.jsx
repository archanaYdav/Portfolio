import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

function Experience(props) {
    return (
        <section id='experience'>
            <h2>What Skills I Have?</h2>

            <div className='container experience__container'>
                <div className='experience__fronted'>
                    <h3>Fronted Develeopment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>JQuery</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>React</h4>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>Backend Develeopment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>Node Js</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>Express JS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>MongoDB</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>Git and GitHub</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icons"/>
                            <h4>REST APIs</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;