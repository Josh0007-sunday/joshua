import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const CreateAd = () => {
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

      {/* Create Ad Content */}
      <section className="pt-24 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Bring Your Project to the Spotlight
          </h1>

          <div className="text-lg md:text-xl text-white/90 leading-relaxed space-y-6 mb-12">
            <p>
              Join us in celebrating the 39th Convocation Ceremony with over 100,000+ students graduating!
            </p>

            <p>
              Are you ready to showcase your innovative project to over 100,000 graduating students and their networks?
              This is your opportunity to gain unprecedented visibility during our historic 39th Convocation Ceremony.
            </p>

            <p>
              Create an ad with me and I'll share your project to the world.
            </p>

            <p>
              Fill the Google Form below to get started!
            </p>
          </div>

          {/* Google Form Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdrA3zifi3cOgVpc5QqyXPaRxzgR-5_3g3zRRGZ-YcwuNEgXg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gray-600 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all"
          >
            Fill the Google Form
          </a>
        </div>
      </section>
    </div>
  );
};

export default CreateAd;
