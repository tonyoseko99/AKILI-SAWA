import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Assessment from "./components/Assessment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Navigation handleClick={handleClick} />
      <Router>
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
