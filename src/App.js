import "./App.css";
import Nav from "./Components/Nav/Nav";
import DoYouKnow from "./Components/DoYouKnow/DoYouKnow"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
const App = () => {
  return (
    <Router>
      <Nav/>
      <Hero/>
      <DoYouKnow/>
      <Features/>
    </Router>
  );
};

export default App;
