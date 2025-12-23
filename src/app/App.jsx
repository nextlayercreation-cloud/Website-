import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Portfolio from '../components/portfolio';
import AboutUs from '../components/aboutus';
import Gallery from '../components/gallery';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <AboutUs />
        <Portfolio />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default App;
