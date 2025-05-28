import React from 'react';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Section from './Section';
import "../styles/acmwstyles.css";
import { useNavigate } from 'react-router-dom';

const mentors = [
  {
    name: 'Dr. Manpreet Singh',
    designation: 'Principal CCET Degree Wing',
    description: 'Our mission at CCET is not only to produce engineering graduates but to produce engineering minds.',
    imageUrl: "./acm-assets-2/mentor1.png",
  },
  {
    name: 'Dr. Sunil K. Singh',
    designation: 'Professor and HOD, CSE Faculty Mentor',
    description: 'ACM CCET provides student a great opportunity to learn scientific and practical approach of computer science.',
    imageUrl: "./acm-assets-2/mentor-2.png",
  },
  {
    name: 'Dr. Sudhakar Kumar',
    designation: 'Assistant Professor, CSE Faculty',
    description: 'ACM CCET provides every person with an opportunity to learn, heighten and explore the field of computer science.',
    route:"/sudhakar-kumar",
    imageUrl: "./acm-assets-2/mentor3.png",
  },
];

const Mentors = () => {
   const navigate = useNavigate();
  return (
    <Section crosses={true}>
      <section className="mentor-section mentor-res bg-n-8">
        <div className="container">
          <h2 className="h2 text-center mb-12">Our Mentors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                onClick={() => navigate(mentor.route)}
                className="mentor-card flex-1 min-w-[280px] max-w-[320px] border border-n-6 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-n-7"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="h3 text-center mb-2 text-n-1 text-base">{mentor.name}</h3>
                <p className="body-2 text-center text-n-5 text-sm">{mentor.designation}</p>
                <p className="body-1 mt-2 text-center text-n-4 text-sm">{mentor.description}</p>
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
