import Button from "./Button";
import styles from "./App.module.css";
import {useState , useEffect} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo,...currentArray]);
    setTodo("");
  };
  console.log(toDos)
  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="to do list"
        />
        <button>Add To Do</button>
      </form>
    </div>
  )
}


export default App;
