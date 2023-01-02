import "./Meme.css";

const Meme = () => {
  return (
    <div className="form">
      <div className="input-fields">
        <input placeholder="Shut up"></input>
        <input placeholder="and take my money"></input>
      </div>
      <button className="submit-button">Get a new meme image</button>
    </div>
  );
};

export default Meme;
