import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import SportsPage from "./pages/SportsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sports" element={<SportsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
