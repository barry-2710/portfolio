import React, { Component } from "react";
import developer from '../img/developer.png'
import designer from '../img/design-software.png'
import video from '../img/video-edition.png'
import './cards.css'

class Cards extends Component {
  render() {
    return (
    <div>
        <div className="col s11 l4">
        <div className="card-panel white indigo-text z-depth-4 center hoverable" 
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" id="card_card">
            <img src={developer} alt="" height="100px" width="100px" className="center-align" id="card_image"/><br/>
            <h5 className="black-text"><b>Front-End Developer</b></h5>
            <span className="black-text">
I like to construct ideas and build products from the design board to the browser</span>
            <h6><b>Langues I Learnt</b></h6>
            <span className="black-text">HTML | CSS | PHP | Java Script | Python | Dart</span>
            <h6><b>Frame works I use</b></h6>
            <span className="black-text">KivyMD | React Js | Laravel 8 | Bootstrap | Flutter</span>
        </div></div>
        <div className="col s11 l4">
        <div className="card-panel white indigo-text z-depth-4 center hoverable" 
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" id="card_card"> 
            <img src={designer} alt="" height="100px" width="100px" className="center-align"/><br/>
            <h5 className="black-text"><b>UX/UI Designer</b></h5>
            <span className="black-text">I Love to design anything and everything, cool and professional</span><br/>
            <br/>
            <h6><b>Tools I use</b></h6>
            <ul className="black-text">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
        </div></div>
        <div className="col s11 l4">
        <div className="card-panel white indigo-text z-depth-4 center hoverable" 
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" id="card_card"> 
            <img src={video} alt="" height="100px" width="100px" className="center-align"/><br/>
            <h5 className="black-text"><b>Video Editor</b></h5>
            <span className="black-text">I turn raw footages into a complete cinematic video, with beautiful effects and smooth transition</span>
            <br/>
            <h6><b>Tools I use</b></h6>
            <span className="black-text">
              <ul>
                <li>Adobe Animate</li>      
                <li>Adobe After effects</li>   
                <li>Adobe Premiere Pro</li>     
              </ul>
            </span>
        </div></div>
    </div>
    );
  }
}

export default Cards;
