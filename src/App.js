import "./styles.css";
import React, { useState } from "react";

function Headline(prop) {
  return (
    <div>
      <h1>{prop.title}</h1>
      <LikeCounter />
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(0);
  const [clickCount, setClicks] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const superLike = () => {
    if (clickCount < 2) {
      setCount(count + 10);
    }
    setClicks(clickCount + 1);
    // setCount(count);
  };

  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={() => setCount(superLike)}>Super Like</button>
      <button onClick={() => setCount(increment)}>Like</button>
      <button onClick={() => setCount(decrement)}>Dislike</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Headline title="Like Counter" />
    </div>
  );
}
