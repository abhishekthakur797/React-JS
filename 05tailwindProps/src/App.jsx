import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-orange-600 font-bold">Hello</h1>
      <button className="m-4 bg-green-500 font-bold text-2xl hover:bg-green-600 rounded-full">
        buy Now
      </button>
      <Card headingText="Available soon" />
      <Card headingText="coming soon"/>

    </>
  );
}

export default App;
