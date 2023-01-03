import React from "react";
import memes from "../memesData";
import "./Meme.css";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setallMemeImages] = React.useState(memes.data.memes);

  function getRandomMemeImage() {
    const allMemeUrls = allMemeImages.map((meme) => meme.url);
    const randomMemeUrl =
      allMemeUrls[Math.floor(Math.random() * allMemeUrls.length)];

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: randomMemeUrl,
      };
    });
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
      <img className="meme-image" src={meme.randomImage} />
    </div>
  );
};

export default Meme;
