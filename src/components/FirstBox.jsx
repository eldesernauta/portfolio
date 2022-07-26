import "../styles/FirstBox.scss";

const FirstBox = () => {
  return (
    <div className="Box1">
      <div className="content">
        <h1>Oscar Rojas</h1>
        <h4>Web Developer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          type="button"
          className="unfold-column"
        >
          <i className="fa fa-caret-down"></i>
        </button>
      </div>
    </div>
  );
};

export default FirstBox;
