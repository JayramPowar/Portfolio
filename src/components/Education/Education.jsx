import  { useState } from "react";
import "./education.css";

const Education = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="education section">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="education__container container">
            <div className="education__tabs">
                <div className={toggleState === 1 ? "education__button button--flex education__active" 
                    : "education__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap education__icon"></i>
                    Education
                </div>
                <div className={toggleState === 2 ? "education__button button--flex education__active" 
                    : "education__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-trophy education__icon"></i>
                    Achievements
                </div>
            </div>

            <div className="education__sections">
                <div className={toggleState === 1 ? "education__content education__content-active"
                    : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">SSC</h3>
                            <span className="education__subtitle">LMH,Jaysingpur</span>
                            <div className="education__calendar">
                            <i className="uil uil-calendar-alt education__icon"></i>
                                2020
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                    <div className="education__data">
                        <div></div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education__title">HSC</h3>
                            <span className="education__subtitle">JCJ, Jaysingpur</span>
                            <div className="education__calendar">
                            <i className="uil uil-calendar-alt education__icon"></i>
                                2018-2021
                            </div>
                        </div>
                    </div>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">B.Tech</h3>
                            <span className="education__subtitle">KIT, Kolhapur</span>
                            <div className="education__calendar">
                            <i className="uil uil-calendar-alt education__icon"></i>
                                2022-Present
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className={toggleState === 2 ? "education__content education__content-active"
                    : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">Master Tech-Wizard</h3>
                            <span className="education__subtitle">ARC | KITCOEK</span>
                            <div className="education__calendar">
                            <i className="uil uil-calendar-alt education__icon"></i>
                                2024-25
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                    <div className="education__data">
                        <div></div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education__title">Winner</h3>
                            <span className="education__subtitle">PBL , Jan 2024</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt education__icon"></i>
                                2015-2016
                            </div>
                        </div>
                    </div>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">Runner Up</h3>
                            <span className="education__subtitle">PBL, May 2024</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt education__icon"></i>
                                2016-2022
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Education;
