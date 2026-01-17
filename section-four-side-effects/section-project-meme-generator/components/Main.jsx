import React from "react";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    /**
     * Controlled Components Challenge - part 1 : update the topText value in the meme state
     * object every time the topText input box is changed
     *
     * Note: don't worry about bottomText at this point.
     */
    setMeme((prevObj) => {
      const { value } = event.target;
      const { name } = event.target;
      if (name === "topText") {
        return {
          ...prevObj,
          topText: value,
        };
      } else if (name === "bottomText") {
        return {
          ...prevObj,
          bottomText: value,
        };
      }
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder={meme.topText}
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
