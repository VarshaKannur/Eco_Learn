import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

const Learning: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: "The Delicate Balance of Ecosystems",
      duration: "12 mins",
      videoUrl: "https://www.youtube.com/embed/GlnFylwdYH4",
      description: "Explore how different species interact and maintain harmony in nature"
    },
    {
      title: "Climate Change: Understanding the Science",
      duration: "15 mins",
      videoUrl: "https://www.youtube.com/embed/ifrHogDujXw",
      description: "Learn the fundamentals of climate change and its global impact"
    },
    {
      title: "Sustainable Living: Making a Difference",
      duration: "10 mins",
      videoUrl: "https://www.youtube.com/embed/gTamnlXbgqc",
      description: "Discover practical ways to reduce your environmental footprint"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white mb-8 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Let's Dive Into Learning</h1>

        <div className="grid gap-8">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={lesson.videoUrl}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{lesson.title}</h3>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Play className="w-5 h-5" />
                  {lesson.duration}
                </div>
              </div>
              <p className="text-emerald-100">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
