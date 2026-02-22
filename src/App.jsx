import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Hollywood from "./pages/Hollywood";
import Bollywood from "./pages/Bollywood";
import Classes from "./pages/Classes";
import Explore from "./pages/Explore";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import "./App.css";

function App() {

  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar  setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books search={search} />} />
        <Route path="/hollywood" element={<Hollywood search={search} />} />
        <Route path="/bollywood" element={<Bollywood search={search} />} />
        <Route path="/classes" element={<Classes search={search} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
