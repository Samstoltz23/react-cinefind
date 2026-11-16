import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
