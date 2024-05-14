import React, { useState } from "react";

const App =() => {
  const [arrNum] = useState([0,1,2,3,4,5,6,7,8,9])
  const [counter, setCounter] = useState(0)

  const [isVisibility, setIsVisibility] = useState(true)

  return(
    <div>App
      {isVisibility && arrNum.map((item, index) => {
        return <button onClick={() => setCounter(item)} key={index}>{item}</button>
      })}
      <div>{counter}</div>
      <button onClick={() => {setIsVisibility(!isVisibility)}}>
        {isVisibility ? "hide" : "show"}
      </button>
    </div>
  )
}
export default App;
