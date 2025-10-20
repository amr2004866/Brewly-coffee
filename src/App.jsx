import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Router basename="/Brewly-coffee">

      
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  
  </>

  );
}

