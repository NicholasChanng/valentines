import happy from "./img/happy.JPG";
import neutral from "./img/neutral.JPG";
import sad from "./img/sad.JPG";

import { React, useState } from "react";

import "./App.css";

function App() {
  let [img, setImg] = useState(neutral);
  let [yesSize, setYesSize] = useState(74.69);
  let [message, setMessage] = useState("Will you be my Valentine?");

  return (
    <div className="App">
      <div className="container">
        <h1>{message}</h1>
        <img src={img} alt="" />
        <div className="buttons">
          <button
            className="yes"
            style={{ width: yesSize + "px" }}
            onClick={() => {
              setImg(happy);
              setMessage("YAAAAAAAAAAAAY!🍆👌");
              setYesSize(74.69);
            }}
          >
            😍YES😍
          </button>
          <button
            className="no"
            onClick={() => {
              setYesSize(yesSize + 20);
              setImg(sad);
              setMessage("Please say yes 😢");
            }}
          >
            👎No👎
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
