import { useState } from "react";
import "../styles/main.scss";
import pic from "../assets/portrait.png";

import ProgressBar from "@ramonak/react-progress-bar";

const Main = () => {
  const [isFold1, setFold1] = useState("false");
  const [isFold2, setFold2] = useState("false");
  const [isFold3, setFold3] = useState("false");

  const Box1 = document.querySelector(".Box1");
  const Box2 = document.querySelector(".Box2");
  const Box3 = document.querySelector(".Box3");

  const handleToggle1 = () => {
    setTimeout(() => {
      setFold1(!isFold1);
    }, 200);

    const BoxActive = document.querySelector(".Box1");

    if (!BoxActive.classList.contains("Box1-fold")) {
      Box1.style.minHeight = "90vh";
      Box1.style.maxHeight = "90vh";
      Box3.style.maxHeight = "10vh";
      Box3.style.minHeight = "10vh";
      document.getElementById("btnBox2").style.display = "none";
      document.getElementById("btnBox3").style.display = "none";
    } else {
      Box1.style.minHeight = "50vh";
      Box1.style.maxHeight = "50vh";
      Box3.style.maxHeight = "50vh";
      Box3.style.minHeight = "50vh";
      document.getElementById("btnBox2").style.display = "block";
      document.getElementById("btnBox3").style.display = "block";
    }
  };

  const handleToggle2 = () => {
    setTimeout(() => {
      setFold2(!isFold2);
    }, 200);

    const BoxActive = document.querySelector(".Box2");

    if (!BoxActive.classList.contains("Box2-fold")) {
      Box2.style.minWidth = "90vw";
      Box2.style.maxWidth = "90vw";
      Box1.style.maxWidth = "10vw";
      Box1.style.minWidth = "10vw";
      document.getElementById("btnBox1").style.display = "none";
      document.getElementById("btnBox3").style.display = "none";
      Box1.querySelector("h1").style.fontSize = "40px";
    } else {
      Box2.style.minWidth = "50vw";
      Box2.style.maxWidth = "50vw";
      Box1.style.maxWidth = "50vw";
      Box1.style.minWidth = "50vw";
      document.getElementById("btnBox1").style.display = "block";
      document.getElementById("btnBox3").style.display = "block";
      Box1.querySelector("h1").style.fontSize = "58px";
    }
  };

  const handleToggle3 = () => {
    setTimeout(() => {
      setFold3(!isFold3);
    }, 200);

    const BoxActive = document.querySelector(".Box3");

    if (!BoxActive.classList.contains("Box3-fold")) {
      Box3.style.minHeight = "90vh";
      Box3.style.maxHeight = "90vh";
      Box1.style.maxHeight = "10vh";
      Box1.style.minHeight = "10vh";
      document.getElementById("btnBox1").style.display = "none";
      document.getElementById("btnBox2").style.display = "none";
      Box1.querySelector(".content").style.padding = "0";
    } else {
      Box3.style.minHeight = "50vh";
      Box3.style.maxHeight = "50vh";
      Box1.style.maxHeight = "50vh";
      Box1.style.minHeight = "50vh";
      document.getElementById("btnBox1").style.display = "block";
      document.getElementById("btnBox2").style.display = "block";
      Box1.querySelector(".content").style.padding = "2em";
    }
  };
  return (
    <>
      <div className="row">
        <div className={isFold1 ? "Box1" : "Box1 Box1-fold"}>
          <div className="content">
            <h1>Oscar Rojas</h1>
            <p className="subtitle">Web Developer / Photographer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={pic} className="portrait" alt="Portrait" />
            <button
              type="button"
              id="btnBox1"
              onClick={handleToggle1}
              className="unfold-column"
            >
              <i className="fa fa-caret-down"></i>
            </button>
          </div>
        </div>

        <div className={isFold2 ? "Box2" : "Box2 Box2-fold"}>
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
                    Active student in Master’s degree focused on Full Stack web
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
                    customLabel="HTML + CSS (Sass | Bootstrap | Tailwind)"
                    className="progressBar"
                    bgColor="#6a39ff"
                    height="12px"
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
                    customLabel="Javascript (ReactJS | NodeJS | Webpack)"
                    className="progressBar"
                    bgColor="#6a39ff"
                    height="12px"
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
                    bgColor="#6a39ff"
                    height="12px"
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
                    bgColor="#6a39ff"
                    height="12px"
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
                    bgColor="#6a39ff"
                    height="12px"
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
                    bgColor="#6a39ff"
                    height="12px"
                    labelSize="12px"
                    labelAlignment="left"
                    labelColor="#111"
                    baseBgColor="#dbdbdb"
                    borderRadius="0px"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              id="btnBox2"
              onClick={handleToggle2}
              className="unfold-column"
            >
              <i className="fa fa-caret-left"></i>
            </button>
          </div>
        </div>

        <div className={isFold3 ? "Box3" : "Box3 Box3-fold"}>
          <div className="content">
            <h2>Experiencia</h2>

            <button
              type="button"
              id="btnBox3"
              onClick={handleToggle3}
              className="unfold-column"
            >
              <i className="fa fa-caret-up"></i>
            </button>
          </div>
        </div>

        <div className="Box4">
          <div className="content">
            <div className="quarter-column">
              <h2>Maremoto</h2>
            </div>

            <div className="quarter-column">
              <h2>T.Fish</h2>
            </div>

            <div className="quarter-column">
              <h2>Portafolio</h2>
            </div>

            <div className="quarter-column">
              <h2>Contacto</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
