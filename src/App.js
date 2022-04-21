import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Alan from "./Alan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
