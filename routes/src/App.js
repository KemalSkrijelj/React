import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.js";
import SuccesLogin from './pages/successlogin.js';
import Navbar from './pages/Navbar.js'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<SuccesLogin />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path="*">"404 Not Found"</Route>
    </Routes>
  );
}

export default App;
