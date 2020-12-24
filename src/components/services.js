import React, { Component } from 'react'
import './services.css'
import Cards from './cards'
import MobCards from './mob_cards'

class Services extends Component{
    render(){
        return(
            <div className="services-section" id="services">
                <div className="container" id="services-container">
                            <div className="row">
                                <div className="hide-on-small-only">
                                    <Cards />
                                </div>
                                <div className="hide-on-med-and-up">
                                    <MobCards />
                                </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;