import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => console.log("I run only once."), []);
  useEffect(() => {
    console.log(`I run when 'keyword' changes.`);
  }, [keyword]);
  useEffect(() => {
    console.log(`I run when 'count' changes.`);
  }, [count]);
  useEffect(() => {
    console.log(`I run when keyword & count changes`);
  }, [keyword, count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
