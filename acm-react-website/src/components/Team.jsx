import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import member1 from '../acm-assets/memb-1.png';
import member2 from '../acm-assets/member-2.png';
import member3 from '../acm-assets/member-3.png';
import member4 from '../acm-assets/member-4.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Icons for navigation
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Section from './Section';
import Button from './Button';

const teamMembers = [
    {
        id: 1,
        name: 'Ayushi',
        position: 'Chairperson',
        image: member1,
    },
    {
        id: 2,
        name: 'Vanshika Chilkoti',
        position: 'Secretary',
        image: member2,
    },
    {
        id: 3,
        name: 'Deependra',
        position: 'Event Manager',
        image: member3,
    },
    {
        id: 4,
        name: 'Raj Kanwar Singh',
        position: 'Executive Member Head',
        image: member4,
    },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
  };

  const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
  };

  return (
    <Section>
      <section className="bg-transparent py-16 px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side: Title and Brief Description */}
              <div className="text-left">
              <h2 className="h2 mt-5">Our Team</h2>
                  <p className="body-1 max-w-3xl mx-auto lg:mx-0 mb-6 text-n-2 lg:mb-8 mt-5 ">
                      Meet the amazing team behind the success of our club. Each member brings unique skills and dedication
                      to ensure that we grow and make an impact.
                  </p>
                  <Button>More About Us</Button>
              </div>

              {/* Right Side: Slider */}
              <div className="relative w-full h-96 flex items-center justify-center">
                  <AnimatePresence mode='wait'>
                      <motion.div
                          key={teamMembers[currentIndex].id}
                          className="flex flex-col items-center space-y-4 bg-transparent p-6 rounded-lg"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                          {/* Team Member's Image */}
                          <motion.img
                              src={teamMembers[currentIndex].image}
                              alt={teamMembers[currentIndex].name}
                              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-300"
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                          />

                          {/* Team Member's Name and Position */}
                          <div className="text-center">
                              <h3 className="text-2xl font-bold text-white">
                                  {teamMembers[currentIndex].name}
                              </h3>
                              <p className="text-gray-400">{teamMembers[currentIndex].position}</p>
                          </div>
                      </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex justify-between items-center px-4">
                      <button
                          onClick={handlePrev}
                          className="bg-gray-600 p-2 rounded-full text-white hover:bg-gray-800 transition duration-200"
                      >
                          <FaArrowLeft />
                      </button>
                      <button
                          onClick={handleNext}
                          className="bg-gray-600 p-2 rounded-full text-white hover:bg-gray-800 transition duration-200"
                      >
                          <FaArrowRight />
                      </button>
                  </div>
              </div>
          </div>
      </section>
      <BottomLine></BottomLine>

      </Section>
  );
};

export default Team;
