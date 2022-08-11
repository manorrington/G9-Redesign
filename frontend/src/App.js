import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Footer from "./components/Footer/Footer";
import ContactScreen from "./pages/ContactPage";
import "./App.css";
import SportsPage from "./pages/SportsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/sports" element={<SportsPage />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/contact" element={<ContactScreen />}/>
        </Routes>
        <Footer />
        <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHM6qbhNeeOu_VUF_3mgFXog7rISleV5s&callback=initMap&libraries=places&v=weekly"
        defer></script>
      </Router>
    </>
  );
}

export default App;
