import React, { Suspense, lazy } from 'react';
import './index.css';

// Critical components (above the fold) - load immediately
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';

// Lazy load below-the-fold components for better initial load
const Services = lazy(() => import('./sections/Services/Services'));
const VisionBanner = lazy(() => import('./sections/VisionBanner/VisionBanner'));
const Team = lazy(() => import('./sections/Team/Team'));
const Works = lazy(() => import('./sections/Works/Works'));
const ContactCTA = lazy(() => import('./sections/ContactCTA/ContactCTA'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Minimal loading fallback
const SectionLoader = () => (
  <div style={{
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }} />
);

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <VisionBanner />
        <Team />
        <Works />
        <ContactCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
