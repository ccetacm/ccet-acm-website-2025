import React from 'react';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import mentor1 from "../acm-assets/mentor1.png";
import mentor2 from "../acm-assets/mentor-2.png";
import mentor3 from "../acm-assets/mentor3.png";
import mentor4 from "../acm-assets/mentor4.png";
import Section from './Section';

const mentors = [
  {
    name: 'Dr. Manpreet Singh',
    designation: 'Principal CCET Degree Wing',
    description: 'Our mission at CCET is not only to produce engineering graduates but to produce engineering minds.',
    imageUrl: mentor1,
  },
  {
    name: 'Dr. Sunil K. Singh',
    designation: 'Professor and HOD, CSE Faculty Mentor',
    description: 'ACM CCET provides student a great opportunity to learn scientific and practical approach of computer science.',
    imageUrl: mentor2,
  },
  {
    name: 'Sudhakar Kumar',
    designation: 'Assistant Professor, CSE Faculty',
    description: 'ACM CCET provides every person with an opportunity to learn, heighten and explore the field of computer science.',
    imageUrl: mentor3,
  },
  {
    name: 'Saurabh Pratap Singh',
    designation: 'Mentor & Innovator illustrator',
    description: 'The ACM CCET offers students a fantastic opportunity to master computer science using a scientific and practical approach.',
    imageUrl: mentor4,
  },
];

const Mentors = () => {
  return (
    <Section>
      <section className="mentor-section py-20 bg-n-8">
        <div className="container">
          <h2 className="h2 text-center mb-12">Our Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="mentor-card border border-n-6 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-n-7"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full object-cover" // Set size for full circle image
                  />
                </div>
                <h3 className="h3 text-center mb-2 text-n-1 text-base">{mentor.name}</h3> {/* Adjusted text size */}
                <p className="body-2 text-center text-n-5 text-sm">{mentor.designation}</p> {/* Adjusted text size */}
                <p className="body-1 mt-2 text-center text-n-4 text-sm">{mentor.description}</p> {/* Adjusted text size */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <BottomLine/>
    </Section>
  );
};

export default Mentors;
