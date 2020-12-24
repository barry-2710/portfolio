import React, { Component } from 'react'
import './skills.css'
import html from '../img/skills/html.png'
import css from '../img/skills/css.png'
import php from '../img/skills/php.png'
import js from '../img/skills/js.png'
import python from '../img/skills/python.png'
import dart from '../img/skills/dart.png'
import kivy from '../img/skills/kivy.png'
import bootstrap from '../img/skills/bootstrap.png'
import laravel from '../img/skills/laravel.png'
import react from '../img/skills/react.png'
import gear from '../img/gear.png'

class Skills extends Component{
    render(){
        return(
            <div className="skills-section" id="skills">
            <div></div>
                <div className="container center" id="skills-container">
                    <img src={gear} alt="" id="gear" className="hide-on-med-and-down"/> 
                    <img src={gear} alt="" id="gear1" className="hide-on-med-and-down"/> 
                    <div className="row">
                        <div className="col s14 m6 l6">
                        <h5 className="white-text"><b>Languages</b></h5><br/>
                        <ul>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={html} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={css} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={php} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={python} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={js} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={dart} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                        </ul>
                        </div>
                        <div className="col s14 m6 l6">
                        <h5 className="white-text" id="frame"><b>Frameworks</b></h5><br/>
                        <ul>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={kivy} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={bootstrap} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={laravel} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                            <li data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            ><img src={react} alt="" className="responsive-img z-depth-2" id="img"/></li><br/>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;