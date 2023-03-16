import { useState } from "react";
import classNames from "classnames";

const MainComponent = () => {
  const [topLeftActive, setTopLeftActive] = useState(false);
  const [topRightActive, setTopRightActive] = useState(false);
  const [bottomLeftActive, setBottomLeftActive] = useState(false);

  const handleTopLeftClick = () => {
    setTopLeftActive(true);
    setBottomLeftActive(false);
  };

  const handleTopRightClick = () => {
    setTopRightActive(true);
    setTopLeftActive(false);
  };

  const handleBottomLeftClick = () => {
    setBottomLeftActive(true);
    setTopLeftActive(false);
  };


  const topLeftClassNames = classNames("bg-dark border-white border-2 transition duration-500", {
    "w-10vw": topRightActive,
    "h-90vh": topLeftActive,
    "h-10vh": bottomLeftActive,
    "bg-primary": topLeftActive,
    "z-20": topLeftActive && !bottomLeftActive,
    "z-0": bottomLeftActive, 
  });

  const topRightClassNames = classNames("bg-dark border-white border-2 transition duration-500", {
    "w-90vw": topRightActive,
    "bg-secondary": topRightActive,
    "z-50": topRightActive && topLeftActive,
  });

  const bottomLeftClassNames = classNames("bg-dark border-white border-2 transition duration-500", {
    "h-10vh": topLeftActive,
    "h-90vh": bottomLeftActive,
    "bg-secondary": bottomLeftActive,
    "bg-dark": topLeftActive,
    "z-99": bottomLeftActive,
  });

  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-2 grid-rows-2">
      <div
        className={topLeftClassNames}
        onMouseOver={handleTopLeftClick}
        onMouseOut={() => setTopLeftActive(false)}
      >
        
      </div>
      <div
        className={topRightClassNames}
        onMouseOver={handleTopRightClick}
        onMouseOut={() => setTopRightActive(false)}
      >
        
      </div>
      <div
        className={bottomLeftClassNames}
        onMouseOver={handleBottomLeftClick}
        onMouseOut={() => setBottomLeftActive(false)}
      >
        
      </div>
      <div className="h-full w-full grid grid-cols-2 grid-rows-2">
        <div className="w-full h-full bg-dark border border-white"></div>
        <div className="w-full h-full bg-dark border border-white"></div>
        <div className="w-full h-full bg-dark border border-white"></div>
        <div className="w-full h-full bg-dark border border-white"></div>
      </div>
    </div>
  );
};

export default MainComponent;
