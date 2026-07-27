import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blogs from '../pages/Blogs';
import Navbar from '../context/nav';
import Letsconnect from './Letsconnect';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Letsconnect/>
    </div>
  );
};

export default MainLayout;
