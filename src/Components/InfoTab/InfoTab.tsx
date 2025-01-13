import "./InfoTab.scss";
import pikaplaceholder from "../../assets/Images/pikaplaceholder.png";

const InfoTab = () => {
  return (
    <div className="infotab">
      <img
        className="infotab__sprite"
        src={pikaplaceholder}
        alt="insert pokemon name here"
      />
    </div>
  );
};

export default InfoTab;
