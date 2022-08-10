import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SportsPage from './pages/SportsPage';
import ContactPage from './pages/ContactPage';



function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="sports" element={<SportsPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

export default App;