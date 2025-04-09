import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs" role="tablist" aria-label="Qualification tabs">
          <button
            type="button"
            role="tab"
            aria-selected={toggleState === 1}
            aria-controls="education-tab"
            id="education-button"
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTab(1);
              }
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </button>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            role="tabpanel"
            id="education-tab"
            aria-labelledby="education-button"
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            hidden={toggleState !== 1}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">AWS Cloud Practioner</h3>
                <span className="qualification__subtitle">AWS - Online</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  M.Sc. in Information Systems
                </h3>
                <span className="qualification__subtitle">
                  University of Maryland-Baltimore County - MD
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Udemy - Online</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  B.Tech. in Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Dharmsinh Desai University - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Right of Line */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </div>
              </div>
            </div>
            {/* Left of Line */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Data Engineer & Web Dev Intern
                </h3>
                <span className="qualification__subtitle">
                  TanTV Studios LLC - Washington D.C.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Right of Line */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Engineer (Full-stack)
                </h3>
                <span className="qualification__subtitle">
                  Shaural Infotech - Gujarat, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  TanTV Studios - D.C.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
