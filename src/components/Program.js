import pict from "../components/exemple.png";

const Program = (props) => {
  return (
    <div className="mainContainer">
      <p className="time">12h30</p>
      <img alt="vignette" src={pict} />
      <div className="programDetails">
        <h2>Tous en cuisine, en direct avec Cyril Lignac</h2>
        <p>Magazine culinaire</p>
        <div className="bottomDetails">
          <span>1h</span>
          <span className="red">• direct/inedit</span>
        </div>
      </div>
    </div>
  );
};

export default Program;
