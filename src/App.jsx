import "./App.css";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import AYTMatematik from "./pages/AYTMatematik.jsx";
import AYTFizik from "./pages/AYTFizik.jsx";
import Geometri from "./pages/Geometri.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aytmatematik" element={<AYTMatematik />} />
        <Route path="/aytfizik" element={<AYTFizik />} />
        <Route path="/geometri" element={<Geometri />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
