import "./App.css";
import  {React, useState,useEffect } from "react";
import './style/app.scss'


function App() {
//State
  const [data, setData] = useState({})
  const [number, setNumber] = useState(77)
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  //API
  const getSomething =()=>{
    fetch(`https://api.vaktija.ba/vaktija/v1/${number}`)
    .then(response => response.json())
    .then(json => {
      setData(json)
      return json
    })
  }

//functions
  const handleChangeNumber = () =>{
  setNumber(input)
  setInput('')
  }
  const addTodo = () => {
    setTodo((nekitodo) => [...nekitodo, input])
    setInput("")
  }
  const deleteLastTodo = () => {
    const newInput = [...todo]
    newInput.pop()
    setTodo(newInput)
  }
  useEffect(()=>{
    console.log("ja se pozivoam samo..");
    getSomething()
  },[number])

 
  return (
    <div className="owner">
    <h1>Namaz Vakat</h1>
      <div className="input-btn">
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Unesi neki number" />
      <button onClick={handleChangeNumber}>Posalji </button></div>
    <h1>Vrijeme namaza:
      {
        data?.vakat?.map((el)=>{
          return <span>{el}</span>
        })
      }
      </h1>
      <h2>Grad: {data?.lokacija}, id:{number}</h2>
  {/* <button onClick={deleteLastTodo}>Izbrisi poslednji  el</button> */}
  {/* <button onClick={handleChangeNumber}>Potvrdi unos</button> */}
  <div>
    {todo.map((value, index ) => {
      return <li key={index}>{value}</li>
    })}
  </div>
  </div>
 )
}


export default App;