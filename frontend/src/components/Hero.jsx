
import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-screen min-h-[700px] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#1b1b1b]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#1b1b1b]/60 to-[#1b1b1b]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#bae51a]/[0.06] blur-[140px] rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full justify-center items-center px-6 py-16">

        <div className="max-w-[850px] w-full text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#bae51a]/30 rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-[#bae51a]" />
            <p className="text-[#bae51a] text-sm font-semibold tracking-[2px] uppercase">
              Your Stories. Your Space.
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight md:py-3">
            A Place for Stories
            <br />
            <span className="text-[#bae51a]">
              That Matter.
            </span>
          </h1>

          {/* Animated Text */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-7 mb-6">
            <p className="text-xl sm:text-3xl font-medium text-gray-300">
              Write to
            </p>

            <ReactTyped
              className="text-xl sm:text-3xl font-bold text-[#bae51a]"
              strings={['INSPIRE.', 'CONNECT.', 'EXPRESS.', 'GROW.']}
              typeSpeed={100}
              backSpeed={70}
              loop
            />
          </div>

          {/* Description */}
          <p className="max-w-[650px] mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Share your ideas, explore different perspectives, and
            connect with people through stories worth reading.
            Your next story starts here.
          </p>

          {/* CTA */}
          <div className="mt-9">
            <Link to="/signup">
              <button className="group bg-[#bae51a] hover:bg-[#d5ff3f] text-black font-semibold px-9 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(186,229,26,0.2)]">
                Get Started
                <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-[650px] mx-auto">

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                10K<span className="text-[#bae51a]">+</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 uppercase tracking-wider">
                Active Users
              </p>
            </div>

            <div className="text-center border-x border-white/10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                50K<span className="text-[#bae51a]">+</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 uppercase tracking-wider">
                Stories Shared
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                100K<span className="text-[#bae51a]">+</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 uppercase tracking-wider">
                Engagements
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
