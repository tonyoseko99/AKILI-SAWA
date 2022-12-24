import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Motivations from "./components/Motivations";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assessment from "./components/Assessment";

function App() {
  // alert user on button click
  function handleClick() {
    alert(
      "Help us collect data for the mental health survey by filling out the form below"
    );
    // redirect to survey form
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSdOT6jYxlYcHXnqSxQxZkmX_osFvMPzTiniefr_CX7wAx7zWQ/viewform?usp=sf_link";
  }
  return (
    <div className="App">
      <Router>
        <Navigation handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/motivations" element={<Motivations />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
