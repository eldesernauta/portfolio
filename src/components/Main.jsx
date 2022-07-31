import { useState } from "react";
import "../styles/main.scss";
import pic from "../assets/portrait.png";

const Main = () => {
  const [isFold1, setFold1] = useState("false");
  const [isFold2, setFold2] = useState("false");
  const [isFold3, setFold3] = useState("false");

  const handleToggle1 = () => {
    setTimeout(() => {
      setFold1(!isFold1);
    }, 200);

    const BoxActive = document.querySelector(".Box1");

    if (!BoxActive.classList.contains("Box1-fold")) {
      document.querySelector(".Box1").style.minHeight = "90vh";
      document.querySelector(".Box3").style.maxHeight = "10vh";
      document.getElementById("btnBox2").style.display = "none";
      document.getElementById("btnBox3").style.display = "none";
    } else {
      document.querySelector(".Box1").style.minHeight = "50vh";
      document.querySelector(".Box3").style.maxHeight = "50vh";
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
      document.querySelector(".Box2").style.minWidth = "90vw";
      document.querySelector(".Box1").style.maxWidth = "10vw";
      document.getElementById("btnBox1").style.display = "none";
      document.getElementById("btnBox3").style.display = "none";
      document.querySelector(".Box1").querySelector("h1").style.fontSize = "40px";
    } else {
      document.querySelector(".Box2").style.minWidth = "50vw";
      document.querySelector(".Box1").style.maxWidth = "50vw";
      document.getElementById("btnBox1").style.display = "block";
      document.getElementById("btnBox3").style.display = "block";
      document.querySelector(".Box1").querySelector("h1").style.fontSize = "58px";
    }
  };

  const handleToggle3 = () => {
    setTimeout(() => {
      setFold3(!isFold3);
    }, 200);

    const BoxActive = document.querySelector(".Box3");

    if (!BoxActive.classList.contains("Box3-fold")) {
      document.querySelector(".Box3").style.minHeight = "90vh";
      document.querySelector(".Box1").style.maxHeight = "10vh";
      document.getElementById("btnBox1").style.display = "none";
      document.getElementById("btnBox2").style.display = "none";
      document.querySelector(".Box1").querySelector(".content").style.padding = "0";

    } else {
      document.querySelector(".Box3").style.minHeight = "50vh";
      document.querySelector(".Box1").style.maxHeight = "50vh";
      document.getElementById("btnBox1").style.display = "block";
      document.getElementById("btnBox2").style.display = "block";
      document.querySelector(".Box1").querySelector(".content").style.padding = "2em";

    }
  };
  return (
    <>
      <div className="row">
        <div className={isFold1 ? "Box1" : "Box1 Box1-fold"}>
          <div className="content">
            <h1>Oscar Rojas</h1>
            <h4>Web Developer</h4>
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
            <h2>Estudios</h2>


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
