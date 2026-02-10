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
              title="AsbirTech | Expert Web & Mobile App Development Agency"
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
        <Route path="*" element={
          <div style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '2rem'
          }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>We couldn't find the page you're looking for.</p>
            <a href="/" style={{
              padding: '0.8rem 2rem',
              background: 'white',
              color: 'black',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: '600'
            }}>Back to Home</a>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
