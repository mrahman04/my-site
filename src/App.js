import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Eat from "./Eat";
import Buy from "./Buy";
import Visit from "./Visit";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">📋 MyList</div>
        <div className="nav-links">
          <Link to="/eat">Places to Eat</Link>
          <Link to="/buy">Things to Buy</Link>
          <Link to="/visit">Places to Visit</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Router>
  );
}

export default App;