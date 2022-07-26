import FirstBox from "./FirstBox";
import ScndBox from "./ScndBox";
import ThirdBox from "./ThirdBox";
import FrthBox from "./FrthBox";
import "../styles/main.scss";

const Main = () => {
  return (
    <>
      <div className="row">
        <FirstBox className="Box1"/>
        <ScndBox className="Box2"/>
        <ThirdBox className="Box3"/>
        <FrthBox className="Box4"/>
      </div>
    </>
  );
};

export default Main;
