import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, NavLink, Link, Routes,useNavigate } from "react-router-dom";
import Alan from "./Alan";
import Profile from "./components/Profile/Profile";
import Exercise from "./components/Exercise/Exercise";
import Room from "./components/Room/Room";
import React, { useEffect } from 'react';
import Coach from "./components/Coach/Coach";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/room" element={<Room />} />
        <Route path="/coach" element={<Coach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
