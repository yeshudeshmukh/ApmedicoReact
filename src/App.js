import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import ".//styles.css";


const App = () => {
  return (
    <BrowserRouter >
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
};
export default App;