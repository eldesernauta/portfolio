import "../styles/main.scss";

const changeSize = () => {
  const column = document.getElementById('column1').style
}

const Main = () => {
  return (
    <>
      <div className="row">
        <div className="column" id="column1">
          <div className="content">
            <h1>Oscar Rojas</h1>
            <h4>Web Developer</h4>
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
