import Button from "./Button";
import styles from "./App.module.css";
import {useState , useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('한번만 실행');
  }, []);

  useEffect(() => {
    if(keyword !== '' && keyword.length > 5) {
      console.log('키워드가 바뀌면 실행 ' + keyword);
    }
  },[keyword])
  useEffect(() => {
      console.log('버튼누를때 실행');
  },[counter]) // 배열안에는 여러개 넣을수 있음

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;
