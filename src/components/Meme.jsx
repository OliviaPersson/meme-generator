import React from "react";
import "./Meme.css";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  console.log(allMemes);

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function getRandomMemeImage() {
    const allMemeUrls = allMemes.map((meme) => meme.url);
    const randomMemeUrl =
      allMemeUrls[Math.floor(Math.random() * allMemeUrls.length)];
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: randomMemeUrl,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <div className="main-content">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-fields">
          <input
            type="text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            placeholder="Shut up"
          ></input>
          <input
            type="text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            placeholder="and take my money"
          ></input>
        </div>
        <button onClick={getRandomMemeImage} className="submit-button">
          Get a new meme image
        </button>
      </form>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
