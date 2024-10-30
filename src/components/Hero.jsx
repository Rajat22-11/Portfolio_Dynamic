import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/hero`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeroData(data.hero);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHeroData();
  }, []);

  if (error) {
    return <div>Error fetching hero data: {error}</div>;
  }

  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Rajat Patel
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer!', 'Data Analyst!'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  cursor: "|",
                }}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {heroData.heroContent}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={heroData.imageUrl}
              alt="Rajat Patel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}