import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/page2" element={<h1>Ovo je page 2</h1>} />
      <Route path="/page3" element={<h1>Ovo je page 3</h1>} />
      <Route path="*">"404 Not Found"</Route>
    </Routes>
  );
}

export default App;
