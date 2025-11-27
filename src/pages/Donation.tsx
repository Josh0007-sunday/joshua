import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { HelioCheckout } from '@heliofi/checkout-react';

const helioConfig = {
  paylinkId: '69278d99571aab82f8edf2c5',
  theme: { themeMode: 'dark' as const },
  primaryColor: '#9E9E9E',
  neutralColor: '#5A6578',
};

const Donation = () => {

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
              <FaArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Joshua</h1>
          </div>
        </div>
      </nav>

      {/* Donation Content */}
      <section className="pt-24 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Support My Work
            </h1>
            <p className="text-xl text-white/70">
              Your donation helps me continue building on Solana and creating amazing projects
            </p>
          </div>

          {/* Helio Checkout Widget */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <HelioCheckout config={helioConfig} />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-white/70">
                Every donation, no matter the size, is greatly appreciated and helps me continue my work in the blockchain space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
