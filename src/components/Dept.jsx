import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Compass, ChevronDown, Book, Code, ChevronRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Program Outcomes Data
const programOutcomes = [
  {
    title: "Engineering Knowledge",
    description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems."
  },
  {
    title: "Problem Analysis",
    description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."
  },
  {
    title: "Design/Development of Solutions",
    description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
  },
  {
    title: "Conduct Investigations of Complex Problems",
    description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
  },
  {
    title: "Modern Tool Usage",
    description: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations."
  },
  {
    title: "The Engineer and Society",
    description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
  },
  {
    title: "Environment and Sustainability",
    description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
  },
  {
    title: "Ethics",
    description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
  },
  {
    title: "Individual and Team Work",
    description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
  },
  {
    title: "Communication",
    description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
  },
  {
    title: "Project Management and Finance",
    description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
  },
  {
    title: "Life-long Learning",
    description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long earning in the broadest context of technological change."
  }
];

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const ProgramOutcome = ({ index, title, description, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-400 font-bold">
            {index + 1}
          </span>
          <span className="text-gray-300 font-medium">{title}</span>
        </div>
        {isExpanded ? (
          <Minus className="w-5 h-5 text-blue-400" />
        ) : (
          <Plus className="w-5 h-5 text-blue-400" />
        )}
      </button>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pl-11 text-gray-400"
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};

const Dept = () => {
  const [showAllOutcomes, setShowAllOutcomes] = useState(false);
  const [expandedOutcomes, setExpandedOutcomes] = useState({});

  const toggleOutcome = (index) => {
    setExpandedOutcomes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const visibleOutcomes = showAllOutcomes ? programOutcomes : programOutcomes.slice(0, 4);

  const departmentDescription = `The Computer Science and Engineering Department at Chandigarh College of Engineering and Technology (CCET) is committed to delivering world-class education, fostering innovation, and nurturing skilled professionals in the field of computing and technology. With a strong emphasis on academic excellence and practical learning, the department offers a robust curriculum, state-of-the-art facilities, and opportunities for research and development. Our goal is to equip students with the knowledge and skills needed to thrive in the dynamic tech industry and contribute meaningfully to society.`;

  return (
    <div className="relative min-h-screen bg-[#0F0C15] text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-transparent from-purple-500/20 via-blue-500/20 to-pink-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedCard>
          <motion.h1 
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Department of Computer Science & Engineering
          </motion.h1>
        </AnimatedCard>

        {/* About Section */}
        <AnimatedCard delay={0.2}>
          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  About Us
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  {departmentDescription}
                </p>
                <Link 
                  to="https://ccet.ac.in/CSE-overview.php"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group shadow-lg shadow-purple-500/25 hover:scale-105"
                >
                  Read More
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <AnimatedCard delay={0.3}>
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-8 rounded-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  To produce self-motivated and globally competent technocrats equipped with computing, innovation, and human values for ever changing world and shape them towards serving the society.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Mission Card */}
          <AnimatedCard delay={0.4}>
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-900 p-8 rounded-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Compass className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Mission</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "To make the department a smart centre for learning, innovation and research, creativity, and entrepreneurship for the stakeholders.",
                    "To inculcate a strong background in mathematical, theoretical, analytical, and practical knowledge in computer science and engineering.",
                    "To promote interaction with institutions, industries and research organizations.",
                    "To provide a friendly environment while developing interpersonal skills."
                  ].map((mission, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-purple-500/10 rounded-full text-purple-400 font-medium text-sm">
                        {index + 1}
                      </span>
                      <span>{mission}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Program Outcomes */}
        <AnimatedCard delay={0.5}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Book className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Program Outcomes
                </h2>
              </div>
              
              <div className="grid gap-4 mb-8">
                {visibleOutcomes.map((outcome, index) => (
                  <ProgramOutcome
                    key={index}
                    index={index}
                    title={outcome.title}
                    description={outcome.description}
                    isExpanded={expandedOutcomes[index]}
                    onToggle={() => toggleOutcome(index)}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => setShowAllOutcomes(!showAllOutcomes)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group shadow-lg shadow-purple-500/25 hover:scale-105"
                >
                  {showAllOutcomes ? 'Show Less' : 'View All Program Outcomes'}
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Dept;