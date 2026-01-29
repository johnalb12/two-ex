import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Super Bowl LX - February 9, 2026, 6:30 PM EST
      const superBowlDate = new Date('2026-02-09T18:30:00-05:00');
      const now = new Date();
      const difference = superBowlDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-navy-seahawks via-navy-seahawks to-green-seahawks">
      {/* Fog Effect Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fog-sf animate-fog-drift"></div>
      </div>

      {/* Ewok Watermark */}
      <div className="absolute top-8 right-8 opacity-10 text-9xl">
        🐻
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title */}
        <h1 className="text-7xl md:text-9xl font-bebas text-white mb-4 tracking-wider drop-shadow-2xl">
          TWO-EX
        </h1>
        <p className="text-2xl md:text-3xl text-green-seahawks font-poppins font-semibold mb-2">
          Super Bowl LX Weekend
        </p>
        <div className="flex items-center justify-center gap-2 text-white text-lg mb-8">
          <Calendar className="w-5 h-5" />
          <span>February 6-10, 2026</span>
          <MapPin className="w-5 h-5 ml-4" />
          <span>San Francisco, CA</span>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-green-seahawks">
          <div className="flex items-center justify-center gap-2 text-green-seahawks text-xl mb-4">
            <Clock className="w-6 h-6" />
            <h2 className="font-poppins font-semibold">Super Bowl Countdown</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bebas text-white">
                {timeLeft.days}
              </div>
              <div className="text-sm text-grey-seahawks uppercase tracking-wide">Days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bebas text-white">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-grey-seahawks uppercase tracking-wide">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bebas text-white">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-grey-seahawks uppercase tracking-wide">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bebas text-white">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-grey-seahawks uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {['agenda', 'packing', 'seahawks', 'photos'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="px-6 py-3 bg-green-seahawks hover:bg-white text-navy-seahawks hover:text-green-seahawks font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        {/* Coors Light Branding */}
        <div className="text-coors-silver text-sm flex items-center justify-center gap-2">
          <span className="text-2xl">🍺</span>
          <span>Official Beverage of Two-Ex</span>
          <span className="font-bold">Coors Light</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
