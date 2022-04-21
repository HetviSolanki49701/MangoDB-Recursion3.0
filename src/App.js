import "./App.css";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";
import Excercise from "./components/Excercise/Excercise";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;