import "./App.css";
import Home from "./components/Home/Home";
import Alan from "./Alan";
import Test from "./Test";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";
import Excercise from "./components/Excercise/Excercise";
import Room from "./components/Room/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercise" element={<Excercise />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
