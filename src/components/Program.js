const Program = (props) => {
  return (
    <div className="mainContainer">
      <p className="time">{props.time}</p>
      <img alt="vignette" src={props.image} />
      <div className="programDetails">
        <div>
          <h2>{props.title}</h2>
          <p>{props.type}</p>
        </div>

        <div className="bottomDetails">
          <span>{props.duration}</span>
          <span>{props.direct && <p className="red"> • Direct</p>}</span>
          <span>{props.isUnseen && <p className="red"> • Inédit</p>}</span>
        </div>
      </div>
    </div>
  );
};

export default Program;
