import React from "react";
import memes from "../memesData";
import "./Meme.css";

const Meme = () => {
  const [memeImg, setMemeImg] = React.useState("");

  function getRandomMemeImage() {
    const memeUrls = memes.data.memes.map((meme) => meme.url);
    const randomMemeUrl = memeUrls[Math.floor(Math.random() * memeUrls.length)];
    setMemeImg(randomMemeUrl);
  }

  return (
    <div className="main-content">
      <div className="form">
        <div className="input-fields">
          <input type="text" placeholder="Shut up"></input>
          <input type="text" placeholder="and take my money"></input>
        </div>
        <button onClick={getRandomMemeImage} className="submit-button">
          Get a new meme image
        </button>
      </div>
      <img className="meme-image" src={memeImg} />
    </div>
  );
};

export default Meme;
