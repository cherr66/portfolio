import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Arts from "./pages/arts/Arts";
import About from "./pages/about/About";
import Art from "./pages/sub/art/Art";
import Work from "./pages/sub/work/Work";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/arts" Component={Arts} />
          <Route exact path="/arts/:category" Component={Art} />
          <Route exact path="/about" Component={About} />
          <Route path="/work/:name" Component={Work} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
