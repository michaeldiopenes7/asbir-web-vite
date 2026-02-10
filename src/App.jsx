import React, { Suspense, lazy } from 'react';
import SEO from './components/SEO/SEO';
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

import { Routes, Route } from 'react-router-dom';
import CaseStudy from './pages/CaseStudy/CaseStudy';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <SEO
              title="Home"
              description="AsbirTech enables businesses to scale, transform, and gain a competitive advantage with robust and flexible web and mobile solutions."
              canonical="/"
            />
            <Hero />
            <Suspense fallback={<SectionLoader />}>
              <Services />
              <VisionBanner />
              <Team />
              <Works />
              <ContactCTA />
              <Footer />
            </Suspense>
          </main>
        } />
        <Route path="/projects/:slug" element={
          <Suspense fallback={<SectionLoader />}>
            <CaseStudy />
            <Footer />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default App;
