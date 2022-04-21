import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Alan from "./Alan";
import Test from "./Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alan" element={<Alan />} />       
        <Route path="/test" element={<Test />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
