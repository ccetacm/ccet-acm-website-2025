import  sudhakarImg from "../acm-assets/mentor-3.jpg";
import sunilImg from "../acm-assets/mentor-2-jpg.jpg";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const FacultySection = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sunil K. Singh",
      role: "Faculty Mentor",
      position: "Professor & Head of Dept.",
      department: "COMPUTER SCI. & ENG. DEPT.",
      institution: "CCET, Chandigarh",
      orcid: "0000-0003-4876-7190",
      image: sunilImg,  // Update with actual image path
      route: "/faculty/sunil-singh",
      LinkedinLink:"https://www.linkedin.com/in/sudhakarkumar5/?originalSubdomain=in",
    },
    {
      id: 2,
      name: "Dr. Sudhakar Kumar",
      role: "Faculty Sponsor",
      position: "Assistant Professor",
      department: "COMPUTER SCI. & ENG. DEPT.",
      institution: "CCET, Chandigarh",
      orcid: "0000-0001-7928-4234",
      image: sudhakarImg,  // Update with actual image path
      route: "/faculty/sudhakar-kumar",
      LinkedinLink:"https://www.linkedin.com/in/drsks/",
    }
  ];

  return (
    <section className="relative py-24 bg-[#0E0C15] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-4 backdrop-blur-sm border border-blue-500/20">
            <span className="text-blue-400 font-medium">Our Leadership</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 bg-clip-text text-transparent mb-4">
            Faculty Mentor | Faculty Sponsor
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {facultyMembers.map((faculty) => (
            <div 
              key={faculty.id}
              onClick={() => navigate(faculty.route)}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-[#161425]/80 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur group-hover:blur-md transition-all duration-500"></div>
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="relative w-full h-full rounded-full object-cover border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500"
                    />
                  </div>

                  {/* Faculty Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                      {faculty.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">{faculty.role}</p>
                    <p className="text-gray-300 mb-1">{faculty.position}</p>
                    <p className="text-gray-400 text-sm mb-1">{faculty.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{faculty.department}</p>
                    
                    {/* ORCID */}
                    <p className="text-gray-400 text-sm mb-4">
                      ORCID ID: {faculty.orcid}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <a href="#" className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors duration-300">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </a>
                      <a href={faculty.LinkedinLink} className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors duration-300">
                        <Linkedin className="w-5 h-5 text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;