import React from "react";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  /**
   * Meme Generator - Fetch Memes Challenge:
   * Get an array of memes from the imgflip API as soon as
   * this component renders for the first time.
   * Check the imgflip documentation for the correct URL.
   * Save the array of memes (not the whole response
   * data) to state. (For this app, we'll randomly choose
   * one of the memes from this array when the user clicks
   * the "Get a new meme image" button, but we'll do that in
   * a separate challenge.)
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [memeArray, setMemeArray] = React.useState([]);

  React.useEffect(() => {
    console.log("fetching memes array");
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemeArray(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  }

  function changeUrl() {
    setMeme((prevObj) => ({
      ...prevObj,
      imageUrl: memeArray[Math.floor(Math.random() * 100)].url,
    }));
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
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={changeUrl}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
