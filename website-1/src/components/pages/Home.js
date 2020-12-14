import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutHero from "../AboutHero";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutHero />
      <Footer />
    </>
  );
}

export default Home;
