import React from "react";
import { Users, Globe2, Target, Lightbulb, Compass, Instagram, Twitter, Linkedin } from "lucide-react";

export default function AboutHero() {
  const teams = [
    {
      name: "CASC",
      title: "CCET ACM Student Chapter",
      image: "./images/ccet-acm-logo-website.png",
      social: {
        instagram: "https://www.instagram.com/acmccet/",
        twitter: "https://twitter.com/acmccet",
        linkedin: "https://www.linkedin.com/company/ccet-acm-student-chapter/",
      },
    },
    {
      name: "CASC-W",
      title: "CCET ACM Student Chapter - W",
      image: "./images/acm-w-logo.png",
      social: {
        instagram: "https://www.instagram.com/acmwccet/",
        twitter: "https://twitter.com/acmccet",
        linkedin:
          "https://www.linkedin.com/company/ccet-acm-w-student-chapter/",
      },
    },
  ];

  const missions = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Our Mission",
      description:
        "To advance the field of computing and empower individuals within it, promoting innovation and excellence in computing education, research, and practice.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Our Vision",
      description:
        "To be at the forefront of shaping the future of computing, fostering a dynamic global community where interdisciplinary collaboration thrives.",
    },
    {
      icon: <Compass className="w-8 h-8 text-pink-400" />,
      title: "Our Plan",
      description:
        "Drive the future of computing by fostering interdisciplinary collaboration, advocating for ethical and responsible technology development.",
    },
  ];

  return (
    <div className="min-h-screen  pt-16">
      {/* Main Hero Section - About ACM */}
      <div className=" text-white py-20 px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
          CCET ACM-W Student Chapter
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-300 font-semibold text-md leading-relaxed">
              ACM-W Team at CCET is a dynamic group of individuals passionate about advancing women in computing. Committed to creating an inclusive environment, the team organizes engaging events, workshops, and mentorship programs, providing valuable opportunities for skill enhancement and networking. With a dedication to empowering women in technology, the ACM-W team at CCET cultivates a supportive community, encouraging members to thrive and contribute to the ever-evolving landscape of computing.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./images/acm-w-logo.png"
                alt="Technology collaboration"
                className="h-96 w-96 object-contain"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Purpose Section */}
      <div className=" py-20 px-4 md:px-8">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Purpose
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Driving innovation and excellence in computing through education, research, and global collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className=" py-20 px-4 md:px-8">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="relative mb-6 aspect-square">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-400 mb-6">{team.title}</p>

                <div className="flex space-x-4">
                  <a
                    href={team.social.instagram}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram />
                  </a>
                  <a
                    href={team.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter />
                  </a>
                  <a
                    href={team.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
