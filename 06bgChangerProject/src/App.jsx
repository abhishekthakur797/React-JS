import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-8 flex flex-wrap justify-center inset-x-0 px-3  rounded">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-xl p-3 ">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none border-none font-bold px-4 py-1 rounded-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={() => {
            setColor("green");
          }}

            className="outline-none border-none font-bold px-4 py-1 rounded-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}

            className="outline-none border-none font-bold px-4 py-1 rounded-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}

            className="outline-none border-none font-bold px-4 py-1 rounded-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}

            className="outline-none border-none font-bold px-4 py-1 rounded-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
        onClick={() => setColor("purple")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-white"
        style={{ backgroundColor: "purple" }}
      >
        Purple
      </button>
      <button
        onClick={() => setColor("pink")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-black"
        style={{ backgroundColor: "pink" }}
      >
        Pink
      </button>
      <button
        onClick={() => setColor("yellow")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-black"
        style={{ backgroundColor: "yellow" }}
      >
        Yellow
      </button>
      <button
        onClick={() => setColor("brown")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-white"
        style={{ backgroundColor: "brown" }}
      >
        Brown
      </button>
      <button
        onClick={() => setColor("cyan")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg"
        style={{ backgroundColor: "cyan" }}
      >
        Cyan
      </button>
      <button
        onClick={() => setColor("teal")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-white"
        style={{ backgroundColor: "teal" }}
      >
        Teal
      </button>
      <button
        onClick={() => setColor("gold")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-black"
        style={{ backgroundColor: "gold" }}
      >
        Gold
      </button>
      <button
        onClick={() => setColor("silver")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg text-black"
        style={{ backgroundColor: "silver" }}
      >
        Silver
      </button>
      <button
        onClick={() => setColor("lime")}
        className="outline-none border-none font-bold px-4 py-1 rounded-lg"
        style={{ backgroundColor: "lime" }}
      >
        Lime
      </button>
        </div>
      </div>
    </div>
  );
}

export default App;
