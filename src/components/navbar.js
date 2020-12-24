import React, { Component } from 'react'
import img from '../img/barry.JPG'
import city from '../img/city.jpg'
import './navbar.css'
import Main from '../components/main'
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../img/logo.png'


import M from "materialize-css";

class Navbar extends Component {
 
    componentDidMount() {
        M.AutoInit();
        AOS.init();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                dist : -50,
                padding: 20,
            });
            console.log(instances.length)
          });
    }
    
    render() {
        return(
            <header>
                <div className="nav-fixed" >
                    <nav className="nav-wrapper transparent">
                        <div className="container">
                            <a href="#home" className="brand-logo">           
                            <img src={logo} alt="" id="logo" />
                            </a>
                            <a href="#home" className="sidenav-trigger" data-target="mobile-menu">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                            <li onClick={this.close}><Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    >Home</Link></li>
                                <li><Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >About</Link></li>
                                <li><Link
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Services</Link></li>
                                <li><Link
                                        activeClass="active"
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Skills</Link></li>
                                <li><Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Contact</Link></li>
                                <li><a href="https://www.instagram.com/bharath_2710/" target="_blank" rel="noopener noreferrer" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/bharath.babu.39/" className="tooltipped btn-floating btn-small indigo darken-4" rel="noopener noreferrer" target="_blank" data-tooltip="Facebook">
                                    <i className="fab fa-facebook"></i>
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/bharath-b-767138168/" className="tooltipped btn-floating btn-small indigo darken-4" rel="noopener noreferrer" target="_blank" data-tooltip="LinkedIn"> 
                                    <i className="fab fa-linkedin"></i>
                                </a></li>
                            </ul>
                            <ul className="sidenav" id="mobile-menu">
                            <li><div className="user-view">
                            <div className="background">
                                <img src={city} alt="city"/>
                            </div>
                            <a href="#user"><img className="circle" src={img} alt="circle"/></a>
                            <a href="#name"><span className="white-text name">Bharath B</span></a>
                            <a href="#mobile"><span className="white-text mobile">+91 7411102057</span></a>
                            <a href="#email"><span className="white-text email">bharath.bj10@gmail.com</span></a>
                            
                            </div></li>
                            <li className="sidenav-close"><Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    >Home</Link></li>
                                <li className="sidenav-close"><Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >About</Link></li>
                                <li className="sidenav-close"><Link
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Services</Link></li>
                                <li className="sidenav-close"><Link
                                        activeClass="active"
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Skills</Link></li>
                                <li className="sidenav-close"><Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        >Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            <Main />
            </header>
        )
    }
}

export default Navbar;