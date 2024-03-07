import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 shadow hover:shadow-lg bg-slate-300
        px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightblue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#CF3F21" }}
          >
            RED
          </button>
          <button
            onClick={() => setColor("lightgreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightgreen" }}
          >
            GREEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
