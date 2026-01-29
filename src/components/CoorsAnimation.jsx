import { useState, useEffect } from 'react';
import { Beer } from 'lucide-react';

const CoorsAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide after 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-bounce">
      <div className="flex items-center gap-2 bg-coors-blue text-white px-4 py-2 rounded-lg shadow-lg">
        <div className="coors-clink">
          <Beer className="w-6 h-6" />
        </div>
        <div className="coors-clink" style={{ animationDelay: '0.1s' }}>
          <Beer className="w-6 h-6" />
        </div>
        <span className="text-sm font-poppins font-semibold ml-2">
          Coors Light Time!
        </span>
      </div>
    </div>
  );
};

export default CoorsAnimation;
