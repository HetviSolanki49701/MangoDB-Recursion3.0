import "./App.css";
import Home from "./components/Home/Home";
import Test from "./Test";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, NavLink, Link, Routes,useNavigate } from "react-router-dom";
import Excercise from "./components/Excercise/Excercise";
import Room from "./components/Room/Room";
import React, { useEffect } from 'react';
import Alan from "./Alan";

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
