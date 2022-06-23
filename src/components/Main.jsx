import { useState } from "react";
import "../styles/main.scss";

const Main = () => {

    const [isUnfold, setFold] = useState('false')

    const handleToggle = () => {
      setFold(!isUnfold)
    }

    const forceFold = () => {
      const height = document.querySelector(".heigth")
      const reduce = document.getElementById("column3")
        
      if(height){
        reduce.style.height = "10vh"
      }
      else{
        reduce.style.display = ""
      }
    }

    forceFold()

  return (
    <>
      <div className="row">
        <div className={`column ${isUnfold ? "height" : null}`} id="column1">
          <div className="content">
            <h1>Oscar Rojas</h1>
            <h4>Web Developer</h4>
            <button type="button" onClick={handleToggle} className="unfold-column">v</button>
          </div>
        </div>

        <div className="column" id="column2">
          <div className="content">
            <p>hola</p>
          </div>
        </div>

        <div className="column" id="column3">
          <div className="content">
            <p>hola</p>
          </div>
        </div>

        <div className="column" id="column4">
          <div className="content">
            <div className="quarter-column">
              <p>hola</p>
            </div>

            <div className="quarter-column">
              <p>hola</p>
            </div>

            <div className="quarter-column">
              <p>hola</p>
            </div>

            <div className="quarter-column">
              <p>hola</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
