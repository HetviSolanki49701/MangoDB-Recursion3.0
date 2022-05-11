import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, NavLink, Link, Routes,useNavigate } from "react-router-dom";
import Alan from "./Alan";
import Profile from "./components/Profile/Profile";
import Maps from "./components/Maps/Maps";
import Exercise from "./components/Exercise/Exercise";
import Room from "./components/Room/Room";
import React, { useEffect } from 'react';
import Exerciselist from "./components/ExerciseList/ExerciseList";
import YogaList from "./components/ExerciseList/YogaList";
import Diet from "./components/Diet/Diet";
import Coach from "./components/Coach/Coach";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />
        <Route path="/gyms" element={<Maps />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tadasana" element={<Exercise />} />
        <Route path="/list" element={<YogaList />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/room" element={<Room />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
