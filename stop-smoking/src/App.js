import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Contents />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



