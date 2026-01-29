import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import AgendaSection from './components/AgendaSection'
import PackingList from './components/PackingList'
import SeahawksHype from './components/SeahawksHype'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'
import CoorsAnimation from './components/CoorsAnimation'
import './App.css'

function App() {
  const [showEwok, setShowEwok] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [danceParty, setDanceParty] = useState(false);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        setShowEwok(true);
      } else {
        setShowEwok(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        if (newIndex === konamiCode.length) {
          setDanceParty(true);
          setTimeout(() => setDanceParty(false), 10000);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(newIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiIndex]);

  return (
    <div className="relative bg-white">
      {/* Coors Light Animation on Load */}
      <CoorsAnimation />

      {/* Ewok Easter Egg */}
      {showEwok && (
        <div className="fixed bottom-24 right-8 z-50 animate-bounce">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <span className="text-4xl">🐻</span>
            <div className="absolute -top-12 right-0 bg-navy-seahawks text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              Yub nub!
            </div>
          </div>
        </div>
      )}

      {/* Konami Code Dance Party */}
      {danceParty && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">
              🐻 🎵 🏈 🍺
            </div>
            <p className="text-white text-3xl font-bebas animate-pulse">
              EWOK DANCE PARTY! YUB NUB!
            </p>
            <div className="text-4xl mt-4 animate-spin">
              🎉
            </div>
          </div>
        </div>
      )}

      <Hero />
      <AgendaSection />
      <PackingList />
      <SeahawksHype />
      <PhotoGallery />
      <Footer />
    </div>
  )
}

export default App
