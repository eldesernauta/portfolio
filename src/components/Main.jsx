import { useEffect, useState } from "react";
import "../styles/main.scss";
import pic from "../assets/portrait.png";
import popupGif from "../assets/spot.gif";
//import rocketStudies from "../assets/education.gif"
import ReactTooltip from "react-tooltip";
import ProgressBar from "@ramonak/react-progress-bar";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Main = () => {
  const [tooltip, showTooltip] = useState(true);

  const [box1, setBox1] = useState("Box1");
  const [box2, setBox2] = useState("Box2");
  const [box3, setBox3] = useState("Box3");

  useEffect(() => {
    if (box1 === "Box1-fold") {
      setBox2("Box2");
      setBox3("Box3-height-xs");
    }
    if (box2 === "Box2-fold") {
      setBox1("Box1-width-xs");
      setBox3("Box3");
    }
    if (box3 === "Box3-fold") {
      setBox1("Box1-height-xs");
      setBox2("Box2");
    }
  }, [box1, box2, box3]);

  return (
    <>
      <div className="row">
        <div
          id="Box1"
          className={`
          Box1 
          ${box1 === "Box1-fold" && "Box1-fold"} 
          ${box2 === "Box2-fold" && "Box1-width-xs"}
          ${box3 === "Box3-fold" && "Box1-height-xs"}
          `}
          onClick={() => {
            if (box1 === "Box1") {
              setBox1("Box1-fold");
            } else {
              setBox1("Box1");
            }
          }}
        >
          <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>

          <div className="content">
            <h1 id="name">Oscar Rojas</h1>
            <p className="subtitle">Web Developer / Photographer</p>
            <p>
              Colombian-born publicist focused on development. Big sense of
              responsibility, leadership oriented and really good communicative
              skills that highlights my great team work. Not only that, my
              artish background helps me to create pretty impressive layouts in
              detail.
            </p>
            {box1 === "Box1-fold" && (
              <img src={pic} className="portrait" alt="Portrait" />
            )}
          </div>
        </div>

        <div
          className={`Box2 ${box2 === "Box2-fold" && "Box2-fold"}`}
          onClick={() => {
            if (box2 === "Box2") {
              setBox2("Box2-fold");
            } else {
              setBox2("Box2");
            }
          }}
        >
          <div className="content">
            <h2>Education / Skills</h2>
            <div className="grid-studies">
              <div className="grid-education">
                <div className="grid-ed">
                  <h3>PUBLICIST</h3>
                  <p>
                    Degree in Advertising
                    <br />
                    (Armenia, Quindío)
                  </p>
                  <h6>
                    E.A.M
                    <br />
                    2012 - 2017
                  </h6>
                </div>
                <div className="grid-ed">
                  <h3>MISIONTIC 2022</h3>
                  <p>
                    Member at the 2nd Route of the fullstack web development
                    training imparted by the colombian ICT ministry
                    <br />
                    (Medellín, Antioquia)
                  </p>
                  <h6>
                    University of Antioquia
                    <br />
                    Mar. 2021 - Dic. 2021
                  </h6>
                </div>
                <div className="grid-ed">
                  <h3>FULL STACK WEB DEVELOPMENT MASTER</h3>
                  <p>
                    Active member in Master’s degree focused on Full Stack web
                    development.
                    <br />
                    (Catalonia, Spain)
                  </p>
                  <h6>
                    Universitat Politècnica de Catalunya
                    <br />
                    May. 2022 - May. 2023
                  </h6>
                </div>
              </div>
              <div className="grid-skills">
                <div className="grid-skill">
                  <ProgressBar
                    completed={95}
                    customLabel="HTML + CSS (Tailwind | Sass | Bootstrap)"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
                <div className="grid-skill">
                  <ProgressBar
                    completed={80}
                    customLabel="Javascript (ReactJS | NodeJS)"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
                <div className="grid-skill">
                  <ProgressBar
                    completed={50}
                    customLabel="AWS"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
                <div className="grid-skill">
                  <ProgressBar
                    completed={70}
                    customLabel="Git"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
                <div className="grid-skill">
                  <ProgressBar
                    completed={90}
                    customLabel="Photoshop | Illustrator"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
                <div className="grid-skill">
                  <ProgressBar
                    completed={80}
                    customLabel="English"
                    className="progressBar"
                    bgColor="#B980FF"
                    height="20px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
              </div>
            </div>

            {/*<img src={rocketStudies} className="rocket-studies" alt='rocket studies'/>*/}
          </div>
        </div>

        <div
          className={`Box3 ${box3 === "Box3-fold" && "Box3-fold"} ${
            box1 === "Box1-fold" && "Box3-height-xs"
          }`}
          onClick={() => {
            if (box3 === "Box3") {
              setBox3("Box3-fold");
            } else {
              setBox3("Box3");
            }
          }}
        >
          <div className="content">
            <h2>Experience</h2>
            <div className="experience">
              <div className="exp">
                <h3>WEB DEVELOPER</h3>
                <p>
                  Developing and integrating user interfaces using programming
                  languages and new frontend technologies as HTML + CSS,
                  Javascript, ReacJS, Sass, Webpack, AWS, Git and others.
                  <br />
                  (Bilingual) - (Austin, Texas - USA)
                </p>
                <h6>
                  Howdy Inc.
                  <br />
                  Mar. 2022 - Jan. 2023
                </h6>
              </div>
              <div className="exp">
                <h3>FRONTEND DEVELOPER</h3>
                <p>
                  Design, programming / building and managing websites for
                  company clients, edit plugins and create responsive layouts
                  using Wordpress, HTML, CSS, JS, GIT and PHP.
                  <br />
                  (Bilingual) - (Medellin, Antioquia)
                </p>
                <h6>
                  Solvo Global
                  <br />
                  Jul. 2020 - Mar. 2022
                </h6>
              </div>
              <div className="exp">
                <h3>WEB DESIGNER</h3>
                <p>
                  Design, build and manage websites for the company clients,
                  edit plugins and create responsive layouts using Wordpress,
                  HTML and CSS.
                  <br />
                  (Bello, Antioquia)
                </p>
                <h6>
                  Script Digital
                  <br />
                  Feb. 2019 - Jun. 2020
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="Box4">
          <div className="content">
            <div
              className="quarter-column"
              data-tip="Project made on 2021 that includes my own photos and development using ReactJs, Sass, Webpack and CI/CD."
              data-background-color="#b980ff"
              data-text-color="#111"
              data-place="top"
              onMouseEnter={() => showTooltip(true)}
              onMouseLeave={() => {
                showTooltip(false);
                setTimeout(() => showTooltip(true), 50);
              }}
            >
              <h2>Maremoto</h2>
              <a
                href="https://maremoto.eldesernauta.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Page
              </a>
            </div>

            <div className="quarter-column">
              <h2>Spot Insurance</h2>

              <Popup
                id="spot-modal"
                className="modal-spot"
                trigger={<button className="button"> View More </button>}
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <h2>
                      <a
                        href="https://getspot.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Spot Insurance
                      </a>
                    </h2>
                    <p>
                      I was part of an Austin, Texas startup's Engineering Team
                      working as Frontend Developer. My main job consisted on
                      consolidating and rebuilding the whole site's layout and
                      structure using technologies as ReactJS, Babel, NodeJS,
                      Typescript, Sass, Tailwind, Webpack, Github, AWS, Webflow,
                      etc.
                    </p>
                    <br />
                    <p>
                      We passed from using unnecesary and SEO unfriendly
                      subdomains to a whole consolidated site that allows a SEO
                      friendly URL structure and a detailed design system.
                    </p>
                    <img src={popupGif} alt="" className="spotGif" />
                  </div>
                )}
              </Popup>
            </div>

            <div
              className="quarter-column"
              data-tip="More than a Web Developer I am also a photographer."
              data-background-color="#2cff8f"
              data-text-color="#111"
              data-place="top"
              onMouseEnter={() => showTooltip(true)}
              onMouseLeave={() => {
                showTooltip(false);
                setTimeout(() => showTooltip(true), 50);
              }}
            >
              <h2>Photography</h2>
              <a
                href="https://ph.eldesernauta.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Photos
              </a>
            </div>

            <div className="quarter-column">
              <h2>Contact</h2>
              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eldesernauta/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/eldesernauta"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/eldesernauta"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hola@eldesernauta.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  {" "}
                  2023 <span>©</span> eldesernauta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {tooltip && (
        <ReactTooltip
          eventOff="mouseover"
          delayHide={500}
          place="top"
          scrollHide
          multiline
          resizeHide="true"
          delayShow={100}
          className="tooltip"
        />
      )}
    </>
  );
};

export default Main;
