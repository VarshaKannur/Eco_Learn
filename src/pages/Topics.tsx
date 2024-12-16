import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Topics: React.FC = () => {
  const navigate = useNavigate();

  const redirectToStreamlit = () => {
    window.location.href = 'https://final-2.streamlit.app/';
  };

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Buy or Sell Leftovers</h1>
        <p className="text-white mb-4">
        </p>
        <button
          onClick={redirectToStreamlit}
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
        >
          Click here!
        </button>
      </div>
    </div>
  );
};

export default Topics;