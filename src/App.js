import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/about-me">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
