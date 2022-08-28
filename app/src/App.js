import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  console.log("i run all the time");
  const iFunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(() => console.log("CALL THE API..."), []);
  return (
    <div>
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
