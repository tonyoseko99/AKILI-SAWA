import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
