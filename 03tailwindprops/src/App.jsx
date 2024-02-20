import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);
  const testArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Card username="Abarno" post="Staff" myArray={testArray} />
      <Card image="https://picsum.photos/200" />
    </>
  );
}

export default App;
