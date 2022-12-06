import Button from "./Button";
import styles from "./App.module.css";
import {useState , useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log('created :)');
    // cleanup function : 컴포넌트가 없어질때 호출
    return () => console.log('destroyed :(');
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  )
}


export default App;
