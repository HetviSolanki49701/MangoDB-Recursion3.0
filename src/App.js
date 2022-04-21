import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Alan from "./Alan";
import Maps from "./Maps";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />
        <Route path="/map" element={<Maps />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
