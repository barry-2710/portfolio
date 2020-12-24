import React, { Component } from "react";
import developer from '../img/developer.png'
import designer from '../img/design-software.png'
import video from '../img/video-edition.png'
import './cards.css'

class MobCards extends Component {
  render() {
    return (
    <div><h6 className="flow-text center" 
    data-aos="zoom-out"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" id="swipe">&larr; Swipe &rarr;</h6>
        <div className="carousel" 
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
            <a className="carousel-item" href="#one!">
            <div className="card-panel tomato indigo-text z-depth-4 center hoverable" id="mob_card">
                <img src={developer} alt="" height="100px" width="100px" className="center-align"/><br/>
                <h6 className="black-text"><b>Front-End Developer</b></h6>
                <span className="black-text">
I like to construct ideas and build products from the design board to the browser</span>
                
            </div>
            </a>
            <a className="carousel-item" href="#two!">
                <div className="card-panel white indigo-text z-depth-2 center hoverable" id="mob_card">
                    <img src={designer} alt="" height="100px" width="100px" className="center-align"/><br/>
                    <h6 className="black-text"><b>Designer</b></h6>
                    <span className="black-text">I Love to design anything and everything, cool and professional</span><br/>
                </div>
            </a>
            <a className="carousel-item" href="#three!">
            <div className="card-panel white indigo-text z-depth-2 center hoverable" id="mob_card">
                    <img src={video} alt="" height="100px" width="100px" className="center-align"/><br/>
                    <h6 className="black-text"><b>Video Editor</b></h6>
                    <span className="black-text">I turn raw footages into a complete cinematic video, with beautiful effects and smooth transition</span>
                </div>
            </a>
        </div>
    </div>
    );
  }
}

export default MobCards;
