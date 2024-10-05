import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import About from "./pages/About";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
