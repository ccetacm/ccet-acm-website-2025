import React from "react";
import img1 from "../acm-assets-2/achieve1.jpeg";
import img2 from "../acm-assets-2/achieve2.jpg";
import img3 from "../acm-assets-2/achieve3.jpg";
import img4 from "../acm-assets-2/achieve4.jpeg";
import ImageCard from "../components/ImageCard";
import Button from "../components/Button";

const achievements = [
  {
    id: 1,
    image: img1,
    title: "CCET ACM Student Chapter featured on ACM India Website",
    description: "CCET ACM Student Chapter was featured on the official website of ACM India as the Chapter of the Month for reporting the highest amount of activities in the month of December and was highlighted the best among the 195 student chapters all over India...",
  },
  {
    id: 2,
    image: img2,
    title: "Best paper award at International Conference on Smart Systems and Advanced Computing",
    description: "Sudhakar Kumar, Faculty Sponsor CCET ACM Student Chapter, won the BEST PAPER AWARD for his paper entitled Efficient Speculative Parallelization Architecture for Overcoming Speculation Overheads..."
  },
  {
    id: 3,
    image: img4,
    title: "Feature Editor for the ACM XRDS Magazine",
    description: "The CCET ACM Student Chapter is proud to announce that our Chairperson, Ms.Muskaan Chopra has been selected as the Feature Editor for the ACM XRDS magazine. XRDS is the flagship academic magazine for student members ..."
  },
];

const Achievements = () => {
  return (
    <div className="bg-[#0E0C15] min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-[80px]">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient underline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievement cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative bg-[#1A1825] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Image container with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C15] to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                {/* Button with gradient border */}
                <button className="relative px-6 py-2 text-sm font-medium text-white transition-all duration-300 
                  before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-r before:from-purple-600 before:to-blue-500 before:opacity-0 
                  hover:before:opacity-100 hover:text-white
                  after:absolute after:inset-0 after:rounded-full after:border after:border-purple-500
                  group-hover:after:border-transparent">
                  <span className="relative">Read More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;