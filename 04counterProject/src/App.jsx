import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0) // in parenthesis we can give value true, false, '', {}

  // let counter = 0;

  const addValue = () => {
    if (counter < 20) {
      // counter=counter +1
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <img src="public/vite.svg" alt="" />
      <img src="src/assets/react.svg" alt="" />
      <h1>counter Project</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
