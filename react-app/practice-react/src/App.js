import Button from "./Button";
import styles from "./App.module.css";
import {useState , useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('항상 실행');
  useEffect(() => {
    console.log('한번만 실행');
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
