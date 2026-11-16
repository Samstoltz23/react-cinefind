import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
