import React from 'react';

const About = () => {
    return (
        <div className="content-container">
            <div className="content">
                <div className="header-container">
                    <div className="header">
                        <h1><span>ABOUT</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                <div className="about">
                    <div className="about-left">
                        <h2>SPACE MOTHER</h2>
                        <p>
                            Founded on the philosophy that there is a inherent connection
                            between music and visual art, Spacemother is a label designed to
                            be a home for all kinds of creative beings. Our artists represent
                            the diversity in our creative world, drawing from a multiverse of
                            backgrounds and talents, and spawning all manner of expression.
                            Brought together in the embrace of the Spacemother, they created
                            new and collaborative works, with the singular goal of celebrating
                            the whole of creation.
                        </p>
                    </div>

                    <img 
                        className="about-image" 
                        src={window.about} 
                        alt="About"/>

                </div>
            </div>
        </div>
    )
}

export default About;