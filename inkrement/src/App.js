import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const getValue = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodo((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={getValue} />
      <button onClick={addTodo}>Posalji</button>
      <div>
        {todo.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
