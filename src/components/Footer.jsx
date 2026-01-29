import { Heart, Beer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-seahawks text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bebas text-green-seahawks mb-4">
            TWO-EX 2026
          </h3>
          <p className="text-lg text-grey-seahawks mb-2">
            February 6-10, 2026 • San Francisco, CA
          </p>
          <div className="flex items-center justify-center gap-2 text-coors-silver">
            <span className="text-2xl">🏈</span>
            <span>Super Bowl LX Weekend</span>
            <span className="text-2xl">🎵</span>
          </div>
        </div>

        {/* Branding */}
        <div className="border-t border-grey-seahawks pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-grey-seahawks">
            {/* Ewok Power */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐻</span>
              <span>Powered by Ewoks</span>
            </div>

            <span className="hidden md:inline text-green-seahawks">•</span>

            {/* Coors Light */}
            <div className="flex items-center gap-2">
              <Beer className="w-5 h-5 text-coors-silver" />
              <span>Fueled by Coors Light</span>
              <span className="text-xl">❄️</span>
            </div>

            <span className="hidden md:inline text-green-seahawks">•</span>

            {/* Seahawks Spirit */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏈</span>
              <span>Seahawks Spirit</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-6">
            <p className="text-xs text-grey-seahawks italic">
              "Fueled by Seahawks spirit and Rocky Mountain refreshment"
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <div className="flex items-center justify-center gap-2 text-green-seahawks">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>for Guppa & Shmeegan</span>
            </div>
            <p className="text-xs text-grey-seahawks mt-2">
              © 2026 Two-Ex Weekend. GO HAWKS!
            </p>
          </div>
        </div>

        {/* Hidden Easter Egg Hint */}
        <div className="text-center mt-8">
          <p className="text-xs text-grey-seahawks opacity-50 hover:opacity-100 transition-opacity">
            Psst... Try scrolling past 50% or entering the Konami code 👀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
