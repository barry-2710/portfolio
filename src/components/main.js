import React from "react";
import TextChange from '../presets/textChange'

const Main = () => {
    return(
        
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">
                        Hello, my name is</div>
                            <div className="text-2">
                            <b>Bharath B</b></div>
                                <div className="text-3">
                                    And I'm a <TextChange /></div>                                   
                    </div>
                </div>
            </section>

    );
}

export default Main;