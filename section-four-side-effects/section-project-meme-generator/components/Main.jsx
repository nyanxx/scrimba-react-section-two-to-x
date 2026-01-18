import React, { useState } from "react";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  }

  /**
   * Fetching data in React Challenge:
   * Instead of console logging the data, save it in state
   * and display it to the page. (Just replace the hard-coded
   * object inside the `<pre>` element with the data)
   */

  const [starwarChar, setStarwarChar] = useState({});

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people/1");
        const data = await response.json();
        console.log(data);
        console.log(Object.prototype.toString.call(data));
        console.log(typeof data);
        setStarwarChar(data);
      } catch (error) {
        console.error("error:-", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <pre>{JSON.stringify({ name: "Luke" }, null, 2)}</pre>
      <pre>{JSON.stringify(starwarChar, null, 2)}</pre>
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
