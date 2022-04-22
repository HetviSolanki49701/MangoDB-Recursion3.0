import "./App.css";
import Home from "./components/Home/Home";
import Alan from "./Alan";
import Profile from "./components/Profile/Profile";
import Maps from "./components/Maps/Maps";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";
import Exercise from "./components/Exercise/Exercise";
import Room from "./components/Room/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />
        <Route path="/maps" element={<Maps />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
