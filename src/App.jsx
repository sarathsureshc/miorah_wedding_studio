import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Collections from './components/Collections';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Lookbook from './components/Lookbook';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import CollectionDetail from './pages/CollectionDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Collections />
      <WhyChoose />
      <Reviews />
      <Lookbook />
      <Location />
      <ContactCTA />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-miorah-navy text-miorah-ivory selection:bg-miorah-gold selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
