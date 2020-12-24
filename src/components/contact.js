import React, { Component } from 'react'
import './contact.css'
import vdo from './video/video.mp4'
import frontcard from '../img/front_card.png'
import emailjs from 'emailjs-com'


class Contact extends Component{
    state = {
        name: '',
        email: '',
        mobile: '',
    }
    handelChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_khv1o8d', 'template_auhfxsg', e.target, 'user_HUlJ3lZeprCQUiqHMlaG9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    render(){
        return(
            <div className="contact-section" id="contact"> 
            <div className="row" id="video-content">
                <div className="col s6 m7 l5 hide-on-med-and-down" id="buisness-card">
                    <div className="flip-card" 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={frontcard} className="z-depth-4" alt="Avatar" id="card-img"/>
                            </div>
                            <div className="flip-card-back">
                            <h4><b>Bharath B</b></h4> 
                                <p>&lt;Front-end developer/&gt;</p>
                                <p className="blue-text">Design | Develop | Host</p>
                                <div className="container">
                                <ul className="left-align">
                                    <li><i className="material-icons" id="icon">call</i>+91 7411102057</li><br/>
                                    <li><i className="material-icons" id="icon">mail</i> bharath.bj10@gmail.com</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7 l5" id="contact-form">
                    <div className="card-panel transparent z-depth-5 " id="contact-form-card"
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                       <form onSubmit={this.handelSubmit}>
                        <h4 className="white-text center">Get in Touch</h4>
                            <input  id="name" name="name" placeholder="Name" type="text" className="validate white-text"  onChange={this.handelChange} required></input>
                            <input  id="mobile" name="mobile" placeholder="Mobile" type="tel" className="validate white-text" pattern="[0-9]{10}" onChange={this.handelChange} required></input>
                            <input  id="email" name="email" placeholder="Email" type="email" className="validate white-text" onChange={this.handelChange} required></input>
                            
                            <div className="center">
                                <button className="btn waves-effect  transparent" id="submit" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                       </form>
                    </div>
                </div>
            </div>
                    <div className="video-containerr">
                    
                        <div className="color-overlay"></div>            
                            <video  autoPlay loop muted>
                                <source src={vdo} type="video/mp4" />
                            </video>
                    </div>
                    
            </div>
        );
    }
}

export default Contact;