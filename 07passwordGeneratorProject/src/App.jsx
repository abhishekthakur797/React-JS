import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){ }[]`'?~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-h-screen mx-auto bg-teal-500 rounded-lg px-4 py-2">
        <h2 className="font-bold text-2xl mb-3">Password Generator</h2>
        <div className="flex overflow-hidden mb-4 rounded-lg">
          <input
            type="text"
            placeholder="Password"
            className="px-2 py-2 bg-white outline-none w-full"
            readOnly
            value={password}
          />
          <button className="rounded-none">copy</button>
        </div>
        <div className="flex align-middle px-2 gap-1">
          <div className="flex items-center gap-1  px-3">
            <input
              type="range"
              min={6}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className=" flex items-center gap-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-0.5">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Char</label>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
