import React from 'react';
import './about.css'
import img from '../img/barry.JPG'



const about = () => {
    return (
        <div className="about-section" id="about">          
                <div className="container" id="about-container">
                   
                    <div className="row">
                        <div className="col s12 l5">
                            <div data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                >
                                <img src={img} alt="" className="responsive-img z-depth-4" />
                            </div>
                        </div>
                        <div className="col s12 l5 ">
                        <div data-aos="zoom-in"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                >
                            <h6 className="flow-text hide-on-small-only" id="about-text"><b>My name is Bharath Babu from Bangalore, India</b><br/></h6>
                            <p className="hide-on-small-only" id="about-text2">I love being creative and artistic, just finished my college
                                    in 2020. Soon after that freelanced as a web developer  
                                    in creating dynamic websites from front-end to back-end and everything
                                    in between, always love to make my work look Cool and Professional.</p>
                            <h6 className="flow-text hide-on-med-and-up"><b>My name is Bharath Babu from Bangalore, India</b></h6>
                            <p className="hide-on-med-and-up">I love being creative and artistic, just finished my college
                                    in 2020. Soon after that freelanced as a web developer  
                                    in creating dynamic websites from front-end to back-end and everything
                                    in between, always love to make my work look Cool and Professional.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default about;
