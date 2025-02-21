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
      <p>Pokemon name here</p>
      <p className="infotab__listheader">
        This pokemon can be found in the following locations:{" "}
      </p>
      <ul className="infotab__list">
        <li className="infotab__location">Location 1</li>
        <li className="infotab__location">Location 2</li>
        <li className="infotab__location">Location 3</li>
      </ul>
    </div>
  );
};

export default InfoTab;
