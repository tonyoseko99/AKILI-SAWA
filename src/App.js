import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  // alert user on button click
  function handleClick() {
    alert(
      "Help us collect data for the mental health survey by filling out the form below"
    );
    // redirect to survey form
    window.location.href =
      "https://docs.google.com/forms/d/1H-Golp0EOn0XpvSY8us-0CRMuxWTXERf8t9JPDrrjLs/edit?ts=614b0326";
  }
  return (
    <div className="App">
      <Navigation handleClick={handleClick} />
      <Home handleClick={handleClick} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
