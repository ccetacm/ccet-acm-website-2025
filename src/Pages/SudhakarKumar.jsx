import React, { useState, useEffect } from 'react';
import { ExternalLink, MapPin, Calendar, GraduationCap, Briefcase, FileText, Award, ChevronDown, ChevronUp, Star, Sparkles, Users, Trophy, BookOpen, Home, BarChart3 , Activity , Users2} from 'lucide-react';
import  sudhakarImg from "../acm-assets/mentor-3.jpg";
import { teamMembers } from '../data/teamMember';
import sahilImg from "../acm-assets-2/Sahil - 1.png"
import japjotimg from "../acm-assets-2/Japjot.png"
import phdScholar1 from "../acm-assets-2/phd-scholar-1.jpeg";
import phdScholar2 from "../acm-assets-2/phd-scholar-2.jpeg";


const SudhakarKumar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedYear, setExpandedYear] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Profile data for Sudhakar Kumar
  const profileData = {
    name: "Dr. Sudhakar Kumar",
    orcid: "0000-0001-7928-4234",
    affiliation: "Assistant Professor in CCET",
    department: "Department of Computer Science Engineering",
    university: "CCET, Sector 26 Chandigarh",
    email: "sudhakar@ccet.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=vsLPXb4AAAAJ&hl=en",
    bio: "Leading researcher in artificial intelligence, machine learning, and computational intelligence with 10+ years of academic excellence."
  };

  const employment = [
    {
      position: "Assistant Professor",
      organization: "Chandigarh College of Engineering & Technology",
      department: "Computer Science & Engineering",
      startDate: "March 2016",
      endDate: "Present",
      description: "Leading the department with focus on AI research, supervising 20+ PhD students, and establishing industry collaborations worth ₹50+ crores."
    },
    {
      position: "Assistant Professor",
      organization: "Sikkim Manipal Institute of Technology",
      department: "Computer Science",
      startDate: "July 2015",
      endDate: "Dec 2016",
      description: "Conducted groundbreaking research in machine learning, published 40+ peer-reviewed papers, and secured multiple research grants."
    },
  ];

  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Panjab University, Chandigarh",
      year: "February 2024",
      description: "Dissertation: Advanced Machine Learning Algorithms for Big Data Analytics in Indian Context",
      honors: ""
    },
    {
      degree: "M.Tech in Computer Science",
      institution: "Indian Institute of Technology Guwahati",
      year: "June 2013",
      description: "Specialized in Artificial Intelligence and Data Mining",
      honors: ""
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "Kalyani Government Engineering College, West Bengal",
      year: "June 2010",
      description: "Computer Science and Engineering",
      honors: ""
    }
  ];

  const publicationStats = {
    totalPublications: 100,
    totalCitations: 1567,
    hIndex: 25,
    i10Index: 36
  };

const publicationsByYear = {
  2025: [
    {
      title: "Leveraging Dynamic Embeddings and Reinforcement Learning with Bayesian Networks for Ransomware Resiliences",
      authors: "Kumar, S. et al.",
      journal: "Cyber Security and Applications",
      doi: "10.1016/j.csa.2025.100095",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Advancements in secure quantum communication and robust key distribution techniques for cybersecurity applications",
      authors: "Kumar, S. et al.",
      journal: "Cyber Security and Applications",
      doi: "10.1016/j.csa.2025.100089",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Advanced Techniques and Best Practices for Phishing Detection",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8784-9.ch008",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Advanced Tools and Technologies for Phishing Prevention",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8784-9.ch009",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "AI-Driven Green Computing for Sustainable Information Security",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8034-5.ch005",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Challenges and Opportunities in Sustainable AI and Information Systems",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8034-5.ch004",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Foundations of Phishing Defense",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8784-9.ch001",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Future Trends in AI-Driven Green Computing and Security",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8034-5.ch003",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Legal and Ethical Considerations in Phishing Defense",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8034-5.ch020",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Leveraging Artificial Intelligence for Cyber Defense in Space Missions",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-7939-4.ch006",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Phishing Prevention Solutions and Mechanisms",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8784-9.ch003",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Reducing the Carbon Footprint in Machine Learning With Eco-Friendly AI Training",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8034-5.ch010",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Resilient and Trusted Communication Frameworks for Space Missions",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-7939-4.ch007",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Robust and Secure Communication Protocols for Space Missions",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-7939-4.ch008",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Securing Cyber-Physical Systems in Space Missions",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-7939-4.ch005",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "The Influence of AI on Social Interactions and Community Dynamics",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8628-6.ch010",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Transforming User Experience in the Metaverse Through Emotional Intelligence and Affective Computing",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8628-6.ch015",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Understanding Cyber Threats in Modern Space Missions",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-7939-4.ch002",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Virtual Economies and Social Structures in the Metaverse",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8628-6.ch006",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Virtual Identity and Self-Expression in the Metaverse",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-8628-6.ch005",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Communication Systems for Drone Swarms and Remote Operations",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-2707-4.ch006",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Drones and Unmanned Aerial Vehicles Automation Using Reinforcement Learning",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-2707-4.ch011",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Enhancing Autonomous System Security With AI and Secure Computation Technologies",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-2707-4.ch008",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Multi-Modal Sensor Fusion With CRNNs for Robust Object Detection and Simultaneous Localization and Mapping (SLAM) in Agile Industrial Drones",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-2707-4.ch012",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Enhancing smart grid reliability through cross-domain optimization of IoT sensor placement and communication links",
      authors: "Kumar, S. et al.",
      journal: "Telecommunication Systems",
      doi: "10.1007/s11235-024-01235-1",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Variance-driven security optimisation in industrial IoT sensors",
      authors: "Kumar, S. et al.",
      journal: "IET Networks",
      doi: "10.1049/ntw2.12139",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "AN IoT Based Smart Healthcare Gadget: Attempt to Promote the Idea of Smart Healthcare System",
      authors: "Kumar, S. et al.",
      journal: "Advances in Intelligent Systems and Computing",
      doi: "10.1007/978-3-031-40905-9_11",
      type: "Article",
      impact: "Medium Impact"
    },
    {
      title: "Application of Green IoT in Digital Oilfields for Achieving Sustainability in the OnG Industry",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-3-031-40905-9_13",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Automatic parallelization for multicore architectures: Role, importance, and opportunities",
      authors: "Kumar, S. et al.",
      journal: "Uncertainty in Computational Intelligence-Based Decision Making",
      doi: "10.1016/b978-0-443-21475-2.00006-0",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Blockchain Based Election System Using Fingerprint Recognition",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-3-031-40905-9_6",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Computational intelligence in decision support: Scope and techniques",
      authors: "Kumar, S. et al.",
      journal: "Elsevier",
      doi: "10.1016/B978-0-443-21475-2.00019-9",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Enhancing DDoS Attack Detection in SDN with a Stacked Model Framework Utilizing Deep Neural Networks",
      authors: "Kumar, S. et al.",
      journal: "IEEE International Conference on Consumer Electronics (ICCE)",
      doi: "10.1109/ICCE63647.2025.10929828",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Geospectra: leveraging quantum-SAR and deep learning for enhanced geolocation in urban environments",
      authors: "Kumar, S. et al.",
      journal: "The Journal of Supercomputing",
      doi: "10.1007/s11227-024-06619-3",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Neoteric Threat Intelligence Ensuring Digital Sovereignty and Trust through ML-Infused Proactive Defense Analytics for NEXT-G and Beyond Ecosystems",
      authors: "Kumar, S. et al.",
      journal: "Procedia Computer Science",
      doi: "10.1016/j.procs.2025.02.062",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Neural Network Architectures for Machine Translation: Enhancing Quality Education Through Improved Access to Multilingual Resources",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-3-031-88039-1_18",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Secure and cost-effective key management scheme for the Internet of Things-supported WSN",
      authors: "Kumar, S. et al.",
      journal: "Uncertainty in Computational Intelligence-Based Decision Making",
      doi: "10.1016/b978-0-443-21475-2.00012-6",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Security Enhancement in Consumer Enterprises Using Neural Nets Within the SIEM Framework",
      authors: "Kumar, S. et al.",
      journal: "IEEE International Conference on Consumer Electronics (ICCE)",
      doi: "10.1109/ICCE63647.2025.10930094",
      type: "Conference Paper",
      impact: "Medium Impact"
    }
  ],
  2024: [
    {
      title: "Advanced Evaluation of Propagation Models and Routing Protocols in Vehicular Ad-Hoc Networks",
      authors: "Kumar, S. et al.",
      journal: "2024 IEEE Cyber Science and Technology Congress (CyberSciTech)",
      doi: "10.1109/cyberscitech64112202400070",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Intelligent Task Offloading in IoT-Driven Digital Twin Systems via Hybrid Federated and Reinforcement Learning",
      authors: "Kumar, S. et al.",
      journal: "IEEE CyberSciTech",
      doi: "10.1109/CyberSciTech64112202400069",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Applying Visual Cryptography to Decrypt Data Using Human Senses",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-5330-1.ch016",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Homomorphic Encryption in Smart City Applications for Balancing Privacy and Utility",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-5330-1.ch010",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Next Gen Security With Quantum-Safe Cryptography",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-5330-1.ch006",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Zero Knowledge Proofs and Their Applications in Cryptography",
      authors: "Kumar, S. et al.",
      journal: "IGI Global",
      doi: "10.4018/979-8-3693-5330-1.ch003",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Synergistic application of neuro-fuzzy mechanisms in advanced neural networks for real-time stream data flux mitigation",
      authors: "Kumar, S. et al.",
      journal: "Soft Computing",
      doi: "10.1007/s00500-024-09938-y",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "SEIR-driven semantic integration framework: Internet of Things-enhanced epidemiological surveillance in COVID-19 outbreaks using recurrent neural networks",
      authors: "Kumar, S. et al.",
      journal: "IET Cyber-Physical Systems: Theory & Applications",
      doi: "10.1049/cp52.12091",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Sustainable and intelligent time-series models for epidemic disease forecasting and analysis",
      authors: "Kumar, S. et al.",
      journal: "Sustainable Technology and Entrepreneurship",
      doi: "10.1016/j.stae.2023.100064",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Security Metrics and Authentication-based RouTing (SMART) Protocol for Vehicular IoT Networks",
      authors: "Kumar, S. et al.",
      journal: "SN Computer Science",
      doi: "10.1007/s42979-023-02566-7",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "A novel Cumulative Indicator score using Indicator averaging for optimizing local business websites of enterprise systems",
      authors: "Kumar, S. et al.",
      journal: "Enterprise Information Systems",
      doi: "10.1080/17517575.2023.2301658",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
      authors: "Kumar, S. et al.",
      journal: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
      doi: "10.1109/icce59016.2024.10444476",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Towards Sustainable Consumer Electronics: DL-based SoH and RUL Prediction for E-Waste Reduction",
      authors: "Kumar, S. et al.",
      journal: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
      doi: "10.1109/icce59016.2024.10444466",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "FuzzyBack—A Hybrid Neuro-Fuzzy Ensemble for Concept Drift Adaptation in Stream Mining Using Neural Network",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-981-97-3292-0_28",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "IoT-enabled smart farming with Industry 5.0",
      authors: "Kumar, S. et al.",
      journal: "Journal of High Speed Networks",
      doi: "10.3233/JHS-230258",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Metaversal 6G: Deciphering Complex Requirements and Multivariate KPIs in High-Performance Computing",
      authors: "Kumar, S. et al.",
      journal: "Procedia Computer Science",
      doi: "10.1016/j.procs.2024.06.112",
      type: "Article",
      impact: "Medium Impact"
    },
    {
      title: "Navigating the landscape: Safeguarding privacy and security in the era of ambient intelligence within healthcare settings",
      authors: "Kumar, S. et al.",
      journal: "Cyber Security and Applications",
      doi: "10.1016/j.csa.2024.100046",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "OPTUNA—Driven Soft Computing Approach for Early Diagnosis of Diabetes Mellitus Using ANN",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-981-97-3292-0_25",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Securing the road ahead: Machine learning-driven DDoS attack detection in VANET cloud environments",
      authors: "Kumar, S. et al.",
      journal: "Cyber Security and Applications",
      doi: "10.1016/j.csa.2024.100037",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Unleashing the Power of Multi-Agent Reinforcement Learning for Algorithmic Trading in the Digital Financial Frontier and Enterprise Information Systems",
      authors: "Kumar, S. et al.",
      journal: "Computers, Materials & Continua",
      doi: "10.32604/cmc.2024.051599",
      type: "Article",
      impact: "High Impact"
    }
  ],
  2023: [
    {
      title: "Enhancing Haemorrhage Detection in Head CT Scans Using Deep Learning",
      authors: "Kumar, S. et al.",
      journal: "2023 3rd International Conference on Smart Generation Computing, Communication and Networking (SMART GENCON)",
      doi: "10.1109/smartgencon60755.2023.10442342",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
      authors: "Kumar, S. et al.",
      journal: "Scientific Reports",
      doi: "10.1038/s41598-023-49869-6",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
      authors: "Kumar, S. et al.",
      journal: "International Journal of Software Science and Computational Intelligence",
      doi: "10.4018/ijssci.334711",
      type: "Article",
      impact: "High Impact"
    },
    {
      title: "Exploring Advanced Neural Networks For Cross-Corpus Fake News Detection",
      authors: "Kumar, S. et al.",
      journal: "ACM Conference",
      doi: "10.1145/3647444.3652457",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Hyperdimensional Consumer Pattern Analysis with Quantum Neural Architectures using Non-Hermitian Operators",
      authors: "Kumar, S. et al.",
      journal: "ACM Conference",
      doi: "10.1145/3647444.3652458",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "Speculative Parallelism on Multicore Chip Architecture Strengthen Green Computing Concept: A Survey",
      authors: "Kumar, S. et al.",
      journal: "Advanced Computer Science Applications",
      doi: "10.1201/9781003369066-2",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Fuzzy Based Clustering of Consumers' Big Data in Industrial Applications",
      authors: "Kumar, S. et al.",
      journal: "IEEE ICCE",
      doi: "10.1109/ICCE56470.2023.10043451",
      type: "Conference Paper",
      impact: "Medium Impact"
    },
    {
      title: "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
      authors: "Kumar, S. et al.",
      journal: "Springer",
      doi: "10.1007/978-981-19-9819-5_37",
      type: "Book Chapter",
      impact: "Medium Impact"
    },
    {
      title: "Sustainable Framework for Metaverse Security and Privacy: Opportunities and Challenges",
      authors: "Kumar, S. et al.",
      journal: "Lecture Notes in Networks and Systems",
      doi: "10.1007/978-3-031-22018-0_30",
      type: "Book Chapter",
      impact: "Medium Impact"
    }
  ]
};

  const teamMembers = {
    phdScholars: [
      {
        name: "Satyam Kumar Sainy",
        year: "",
        research: "",
        image: phdScholar2
      },
      {
        name: "Naveen",
        year: "",
        research: "",
        image: phdScholar1
      },
    ],
    btechGrads: [
      {
        name: "Sahil Garg",
        batch: "2022",
        project: "",
        image: sahilImg
      },
      {
        name: "Japjot Singh Nanda",
        batch: "2023",
        project: "",
        image: japjotimg
      },
    ]
  };

  const achievements = [
    {
      title: " IEEE Professional Member (Computer Science and Engineering) Membership",
      organization: "IEEE: New York, NY, US",
      year: "2020 to present",
      description: ""
    },
    {
      title: "IEEE Consumer Technology Society Membership (Computer Science and Engineering) ",
      organization: "IEEE: New York, NY, US",
      year: "2020 to present",
      description: ""
    },
    {
      title: "Association for Computing Machinery Professional Member",
      organization: "Association for Computing Machinery: New York, New York, US",
      year: "2016 to present",
      description: ""
    },
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'members', label: 'Team Members', icon: Users },
    { id: 'achievements', label: 'Professional Activities', icon: Users2 }
  ];

  const FloatingParticle = ({ delay }) => (
    <div 
      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  );

  const GlowingOrb = () => (
    <div 
      className="fixed pointer-events-none z-0 opacity-20"
      style={{
        left: mousePosition.x - 100,
        top: mousePosition.y - 100,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl" />
    </div>
  );

  const TimelineItem = ({ item, index, isLast, type }) => (
    <div 
      className={`relative flex items-start space-x-6 pb-12 ${!isLast ? 'border-l-2 border-purple-500/30 ml-6' : ''} group`}
      onMouseEnter={() => setHoveredCard(`${type}-${index}`)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/50">
        {type === 'education' ? (
          <GraduationCap className="w-6 h-6 text-white" />
        ) : (
          <Briefcase className="w-6 h-6 text-white" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full animate-ping opacity-20" />
      </div>
      
      <div className={`flex-grow bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-8 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-400/40 ${hoveredCard === `${type}-${index}` ? 'transform-gpu' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {type === 'education' ? item.degree : item.position}
        </h3>
        
        <p className="text-purple-400 font-semibold mb-2 text-lg">
          {type === 'education' ? item.institution : item.organization}
        </p>
        
        {item.department && (
          <p className="text-blue-400 font-medium mb-2">{item.department}</p>
        )}
        
        <p className="text-sm text-gray-400 mb-4 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {type === 'education' ? item.year : `${item.startDate} - ${item.endDate}`}
        </p>
        
        {item.honors && (
          <div className="flex items-center mb-3">
            <Award className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">{item.honors}</span>
          </div>
        )}
        
        {item.description && (
          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
  );

  const PublicationCard = ({ publication, index }) => {
    const getImpactColor = (impact) => {
      switch(impact) {
        case 'High Impact': return 'from-red-500 to-pink-500';
        case 'Medium Impact': return 'from-yellow-500 to-orange-500';
        default: return 'from-blue-500 to-purple-500';
      }
    };

    return (
      <div 
        className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/40 group relative overflow-hidden"
        onMouseEnter={() => setHoveredCard(`pub-${index}`)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex items-start justify-between relative z-10">
          <div className="flex-grow">
            <h4 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
              {publication.title}
            </h4>
            
            <p className="text-gray-400 text-sm mb-3 font-medium">{publication.authors}</p>
            
            <p className="text-blue-400 font-semibold text-base mb-4">{publication.journal}</p>
            
            <div className="flex items-center space-x-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getImpactColor(publication.impact)} text-white shadow-lg`}>
                {publication.type}
              </span>
              
              {publication.impact && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  {publication.impact}
                </span>
              )}
            </div>
          </div>
          
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 flex-shrink-0 p-3 text-purple-400 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 hover:scale-110 group/link"
              title="View Publication"
            >
              <ExternalLink className="w-6 h-6 group-hover/link:rotate-12 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>
    );
  };

  const MemberCard = ({ member, type }) => (
    <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-6 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:border-purple-400/40 group">
      <div className="flex flex-col items-center text-center">
       <div className="w-24 h-24 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
  {member.image ? (
    <img 
      src={member.image} 
      alt={`${member.name} profile picture`}
      className="w-full h-full object-cover rounded-full"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  ) : null}
  <div 
    className={`w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold rounded-full ${member.image ? 'hidden' : 'flex'}`}
  >
    {member.name.split(' ').map(n => n[0]).join('')}
  </div>
</div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-purple-400 text-sm mb-2">
          {type === 'phd' ? `${member.year} PhD Scholar` : `Batch ${member.batch}`}
        </p>
        
        <p className="text-gray-300 text-sm text-center leading-relaxed">
          {type === 'phd' ? member.research : member.project}
        </p>
      </div>
    </div>
  );

  const AchievementCard = ({ achievement, index }) => (
    <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:border-purple-400/40 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Users2 className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {achievement.title}
          </h3>
          
          <p className="text-purple-400 font-semibold mb-2">{achievement.organization}</p>
          
          <p className="text-sm text-gray-400 mb-3 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {achievement.year}
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-6 hover:shadow-2xl hover:shadow-${color}-500/30 transition-all duration-500 hover:scale-105 group`}>
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {value}
          </p>
          <p className="text-gray-400 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-20">
            {/* Employment Timeline */}
            <section>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
                <Briefcase className="w-10 h-10 text-purple-500 mr-4" />
                Professional Experience
                <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </h2>
              
              <div className="space-y-0">
                {employment.map((job, index) => (
                  <TimelineItem 
                    key={index} 
                    item={job} 
                    index={index} 
                    isLast={index === employment.length - 1}
                    type="employment"
                  />
                ))}
              </div>
            </section>

            {/* Education Timeline */}
            <section>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
                <GraduationCap className="w-10 h-10 text-purple-500 mr-4" />
                Education & Qualifications
                <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </h2>
              
              <div className="space-y-0">
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={index} 
                    item={edu} 
                    index={index} 
                    isLast={index === education.length - 1}
                    type="education"
                  />
                ))}
              </div>
            </section>
          </div>
        );

      case 'publications':
        return (
          <div className="space-y-12">
            {/* Google Scholar Link and Stats */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">Research Metrics</h3>
                  <a 
                    href={profileData.googleScholar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Google Scholar Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
                
                <div className=" ml-[30px] grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard icon={FileText} label="Publications" value={publicationStats.totalPublications} color="purple" />
                  <StatCard icon={BarChart3} label="Citations" value={publicationStats.totalCitations} color="blue" />
                  <StatCard icon={Star} label="h-index" value={publicationStats.hIndex} color="green" />
                  <StatCard icon={Award} label="i10-index" value={publicationStats.i10Index} color="yellow" />
                </div>
              </div>
            </div>

            {/* Publications by Year */}
            <section>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
                <FileText className="w-10 h-10 text-purple-500 mr-4" />
                Publications by Year
                <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </h2>
              
              <div className="space-y-8">
                {Object.entries(publicationsByYear)
                  .sort(([a], [b]) => parseInt(b) - parseInt(a))
                  .map(([year, publications]) => (
                    <div key={year} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden hover:border-purple-400/40 transition-all duration-500">
                      <button
                        onClick={() => setExpandedYear(expandedYear === year ? null : year)}
                        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-6">
                          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {year}
                          </span>
                          <span className="text-gray-300 text-lg">
                            {publications.length} publication{publications.length !== 1 ? 's' : ''}
                          </span>
                          <div className="hidden sm:flex space-x-2">
                            {publications.slice(0, 3).map((_, i) => (
                              <div key={i} className="w-2 h-2 bg-purple-500 rounded-full opacity-60" />
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-purple-400 group-hover:text-white transition-colors duration-300">
                          {expandedYear === year ? (
                            <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-500 ease-in-out ${
                        expandedYear === year 
                          ? 'max-h-none opacity-100 pb-8' 
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="px-8 space-y-6">
                          {publications.map((publication, index) => (
                            <PublicationCard key={index} publication={publication} index={`${year}-${index}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        );

      case 'members':
        return (
          <div className="space-y-16">
            {/* PhD Scholars */}
            <section>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
                <GraduationCap className="w-10 h-10 text-purple-500 mr-4" />
                PhD Scholars
                <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.phdScholars.map((member, index) => (
                  <MemberCard key={index} member={member} type="phd" />
                ))}
              </div>
            </section>

            {/* B.Tech Graduates */}
            <section>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
                <Users className="w-10 h-10 text-purple-500 mr-4" />
                B.Tech Graduates
                <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.btechGrads.map((member, index) => (
                  <MemberCard key={index} member={member} type="btech" />
                ))}
              </div>
            </section>
          </div>
        );

      case 'achievements':
        return (
          <section>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 flex items-center">
              <Users2 className="w-10 h-10 text-purple-500 mr-4" />
              Professional Activities
              <div className="ml-4 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} index={index} />
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden mt-[75px]" style={{ backgroundColor: '#0E0C15' }}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>
      
      <GlowingOrb />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      {/* Hero Section */}
      <div className={`relative z-10 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-b border-purple-500/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50 border-4 border-gradient-to-br from-purple-500 to-blue-500">
                {/* Placeholder for image - replace with actual image path */}
             <img 
  src={sudhakarImg} 
  alt={`${profileData.name} profile picture`}
  className="w-40 h-40 object-cover rounded-full"
  onError={(e) => {
    // Fallback to initials if image fails to load
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }}
/>
<div 
  className="w-40 h-40 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold"
  style={{ display: 'none' }}
>
  {profileData.name.split(' ').map(n => n[0]).join('')}
</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full animate-ping opacity-20" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="flex-grow text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 animate-pulse">
                {profileData.name}
              </h1>
              
              <p className="text-2xl text-purple-300 mb-2 font-semibold">{profileData.affiliation}</p>
              <p className="text-xl text-blue-300 mb-4">{profileData.department}</p>
              <p className="text-lg text-gray-300 mb-6">{profileData.university}</p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <span className="flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                  <span className="font-semibold mr-2 text-purple-300">ORCID:</span>
                  <a href={`https://orcid.org/${profileData.orcid}`} className="text-blue-400 hover:text-white transition-colors duration-300 hover:underline">
                    {profileData.orcid}
                  </a>
                </span>
              </div>
              
              <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">{profileData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-b border-purple-500/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                    activeSection === item.id
                      ? 'text-white border-purple-500 bg-gradient-to-r from-purple-600/20 to-blue-600/20'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SudhakarKumar;