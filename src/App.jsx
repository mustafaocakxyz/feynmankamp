import "./App.css";
import Home from "./pages/home.jsx";
import Paragraph from "./pages/paragraph.jsx";
import Math from "./pages/math.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/math" element={<Math />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
