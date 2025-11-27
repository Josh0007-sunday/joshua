import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import joshuaImage from '../assets/joshua1.png';
import { FaXTwitter, FaGithub, FaTelegram } from 'react-icons/fa6';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const LandingPage = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const targetDate = new Date('2025-12-05T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Create balloons on mount
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const newBalloons: Balloon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: `${balloon.left}%`,
            bottom: '-100px',
            animation: `floatUp ${balloon.duration}s ease-in ${balloon.delay}s`,
            animationFillMode: 'forwards',
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className="w-12 h-14 rounded-full relative"
              style={{
                backgroundColor: balloon.color,
                animation: `sway 3s ease-in-out infinite`,
              }}
            >
              {/* Balloon shine */}
              <div className="absolute top-2 left-3 w-3 h-4 bg-white/40 rounded-full"></div>
            </div>
            {/* Balloon string */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white/30"
              style={{ top: '56px' }}
            ></div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0) rotate(-5deg);
          }
          50% {
            transform: translateX(10px) rotate(5deg);
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Joshua</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="w-full h-full">
          <div className="grid md:grid-cols-2 gap-0 h-full">
            {/* Left Side - Image as Background (50% of screen) */}
            <div
              className="h-full relative bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, #777d7d, #646464ff), url(${joshuaImage})`,
                backgroundBlendMode: 'multiply, normal',
                backgroundColor: '#777d7d'
              }}
            >
            </div>

            {/* Right Side - Content (50% of screen) */}
            <div className="h-screen flex items-center justify-center px-8 lg:px-16">
              <div className="space-y-6 max-w-xl">
              {/* Congratulations and Josh on same line */}
              <h2 className="text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 font-serif italic">
                Congratulations <span className="font-bold text-white not-italic font-sans">Blockchain_Josh</span>
              </h2>

              {/* Bio */}
              <div className="space-y-4">
                <p className="text-lg text-white/90 leading-relaxed">
                  I am a developer building on Solana, schooled at Rivers State University,
                  where I completed 5 years and was awarded a BSc.
                </p>
              </div>

              {/* Countdown */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white/80 text-sm uppercase tracking-wider mb-4 text-center">
                  Countdown to December 5th
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeRemaining.days}
                    </div>
                    <div className="text-xs text-white/60 uppercase mt-1">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeRemaining.hours}
                    </div>
                    <div className="text-xs text-white/60 uppercase mt-1">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeRemaining.minutes}
                    </div>
                    <div className="text-xs text-white/60 uppercase mt-1">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeRemaining.seconds}
                    </div>
                    <div className="text-xs text-white/60 uppercase mt-1">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                  See More
                </button>
                <button
                  onClick={() => navigate('/donate')}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Donate
                </button>
                <button
                  onClick={() => navigate('/create-ad')}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Create Ads
                </button>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-6 pt-8 justify-center sm:justify-start">
                <a
                  href="https://x.com/blockchain_josh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter size={28} />
                </a>
                <a
                  href="https://github.com/Josh0007-sunday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://t.me/joshdotlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
                  aria-label="Telegram"
                >
                  <FaTelegram size={28} />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
