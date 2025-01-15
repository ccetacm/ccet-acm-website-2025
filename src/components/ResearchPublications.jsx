import React, { useState } from 'react';
import { Search, Calendar, User, ArrowUpDown, ExternalLink } from 'lucide-react';

const publicationsData = {
  journals: [
    {
      year: "2024",
      title: "Navigating the Landscape: Safeguarding Privacy and Security in the Era of Ambient Intelligence within Healthcare Settings",
      authors: "Tarun Vats, Sudhakar Kumar, Sunil K Singh, Uday Madan, Mehak Preet, Varsha Arya, Ritika Bansal & Ammar Almomani"
    },
    {
      year: "2024",
      title: "Sustainable and Intelligent Time-Series Models for Epidemic Disease Forecasting and Analysis",
      authors: "Anureet Chhabra, Dr. Sunil K. Singh, Akash Sharma, Sudhakar Kumar, Brij B. Gupta, Varsha Arya, Kwok Tai Chui"
    },
    {
      year: "2023",
      title: "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
      authors: "Vyom Verma, Anish Benjwal, Amit Chhabra, Sunil K. Singh, Sudhakar Kumar, Brij B. Gupta, Varsha Arya & Kwok Tai Chui"
    },
    {
      year: "2023",
      title: "Explainable context-aware IoT framework using human digital twin for healthcare",
      authors: "Tarun Vats, Sunil K. Singh, Sudhakar Kumar, Brij B. Gupta, Shabeg Singh Gill, Varsha Arya & Wadee Alhalabi"
    },
    {
      year: "2023",
      title: "Evaluating the Sustainable COVID-19 Vaccination Framework of India Using Recurrent Neural Networks",
      authors: "Anshul Gupta, Sunil K. Singh, Brij B. Gupta, Muskaan Chopra & Shabeg Singh Gill"
    },
    {
      year: "2023",
      title: "Ultralightweight, Privacy preserved, and Secure RFID-based authentication protocol for VIoT Networks",
      authors: "Rakesh Kumar, Sunil K. Singh & D. K. Lobiyal"
    },
    {
      year: "2022",
      title: "Analysis & Prognosis of Sustainable Development Goals using Big Data-based Approach during COVID-19 Pandemic",
      authors: "Muskaan Chopra, Dr. Sunil K. Singh, Anshul Gupta, Kriti Aggarwal, Brij Gupta, Francesco Colace"
    },
    {
      year: "2022",
      title: "An efficient hardware supported and parallelization architecture for intelligent systems to overcome speculative overheads",
      authors: "Sudhakar Kumar, Dr. Sunil K. Singh, Naveen Aggarwal, Brij B Gupta, Wadee Alhalabi, Shahab S Band"
    },
    {
      year: "2022",
      title: "Secure Internet of Behavior (IOB): Challenges and Future Directions",
      authors: "SIDDHARTH SINGH Khati, Dr. Sunil K. Singh, AKASH Sharma"
    },
    {
      year: "2022",
      title: "A Comparative Study of Generative Adversarial Networks for Text-to-Image Synthesis",
      authors: "Muskaan Chopra, Dr. Sunil K. Singh, Akhil Sharma, Shabeg Singh Gill"
    }
  ],
  books: [
    {
      year: "2023",
      title: "Speculative Parallelism on Multicore Chip Architecture Strengthen Green Computing Concept",
      authors: "Sudhakar Kumar, Sunil Kr. Singh & Naveen Aggarwal"
    },
    {
      year: "2023",
      title: "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
      authors: "Akash Sharma, Sunil K. Singh, Anureet Chhabra, Sudhakar Kumar, Varsha Arya, Massoud Moslehpour"
    },
    {
      year: "2023",
      title: "Communication structure for Vehicular Internet of Things (VIoTs) and review for vehicular networks",
      authors: "Rakesh Kumar, Sunil K. Singh & D.K. Lobiyal"
    },
    {
      year: "2023",
      title: "Impact of Artificial Intelligence and the Internet of Things in Modern Times and Hereafter: An Investigative Analysis",
      authors: "Anshul Gupta, Sunil Kr Singh, Muskaan Chopra"
    },
    {
      year: "2023",
      title: "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
      authors: "Saksham Gupta, Satvik Agrawal, Dr. Sunil K. Singh, Sudhakar Kumar"
    },
    {
      year: "2022",
      title: "SDN-Aided Edge Computing-Enabled AI for IoT and Smart Cities",
      authors: "Rashandeep Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Shabeg Singh Gill"
    },
    {
      year: "2022",
      title: "An Inquisitive Prospect on the Shift Toward Online Media, Before, During, and After the COVID-19 Pandemic: A Technological Analysis",
      authors: "Anshul Gupta, Dr. Sunil K. Singh, Muskaan Chopra, Shabeg Singh Gill"
    },
    {
      year: "2022",
      title: "Role of Social Media in the COVID-19 Pandemic: A Literature Review",
      authors: "Kriti Aggarwal, Dr. Sunil K. Singh, Muskaan Chopra, Sudhakar Kumar"
    },
    {
      year: "2022",
      title: "Predicting Catastrophic Events Using Machine Learning Models for Natural Language Processing",
      authors: "Muskaan Chopra, Dr. Sunil K. Singh, Kriti Aggarwal, Anshul Gupta"
    }
  ],
  conferences: [
    {
      year: "2022",
      title: "Deep Learning in Robotics for Strengthening Industry 4.0.: Opportunities, Challenges and Future Directions",
      authors: "Kriti Aggarwal, Dr. Sunil K. Singh, Muskaan Chopra, Sudhakar Kumar, Francesco Colace"
    },
    {
      year: "2024",
      title: "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
      authors: "Aishita Sharma, Dr. Sunil K Singh, Sudhakar Kumar, Mehak Preet, Brij B Gupta, Varsha Arya, Kwok Tai Chui"
    },
    {
      year: "2024",
      title: "Sustainable Data Dependency Resolution Architectural Framework to Achieve Energy Efficiency Using Speculative Parallelization",
      authors: "Sudhakar Kumar, Dr. Sunil K. Singh & Naveen Aggarwal"
    },
    {
      year: "2023",
      title: "Forecasting Air Pollution for Environment and Good Health Using Artificial Intelligence",
      authors: "Neelam Yadav, Sunil K Singh, Dinesh Sharma"
    },
    {
      year: "2023",
      title: "Routing of Vehicular IoT Networks based on various routing Metrics, Characteristics, and Properties",
      authors: "Rakesh Kumar, Sunil K. Singh & D.K. Lobiyal"
    },
    {
      year: "2023",
      title: "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
      authors: "Saksham Gupta, Satvik Agrawal, Dr. Sunil K. Singh, Sudhakar Kumar"
    },
    {
      year: "2023",
      title: "Fuzzy Based Clustering of Consumers' Big Data in Industrial Applications",
      authors: "Akash Sharma, Dr. Sunil K. Singh, Eshita Badwal, Sudhakar Kumar, Brij B Gupta, Varsha Arya, Kwok Tai Chui, Domenico Santaniello"
    },
    {
      year: "2022",
      title: "Efficient Loop Unrolling Factor Prediction Algorithm using Machine Learning Models",
      authors: "Inderpreet Singh, Dr. Sunil K. Singh, Rashandeep Singh, Sudhakar Kumar"
    },
    {
      year: "2022",
      title: "Assess and Analysis Covid-19 Immunization Process: A Data Science Approach to make India self-reliant and safe",
      authors: "Muskaan Chopra, Dr. Sunil K. Singh, Gopal Mengi, Devashish Gupta"
    },
    {
      year: "2022",
      title: "Impact and Usability of Artificial Intelligence in Manufacturing Workflow to Empower Industry 4.0",
      authors: "Muskaan Chopra, Dr. Sunil K. Singh, Sidharth Sharma, Deepak Mahto"
    },
    {
      year: "2022",
      title: "Efficient speculative parallelization architecture for overcoming speculation overheads",
      authors: "Sudhakar Kumar, Dr. Sunil K. Singh, Naveen Aggarwal, Kriti Aggarwal"
    },
    {
      year: "2022",
      title: "Exploring Convolutional Neural Network in Computer Vision based Image Classification",
      authors: "Parnit Kaur, Dr. Sunil K. Singh, Inderpreet Singh, Sudhakar Kumar"
    },
    {
      year: "2022",
      title: "Security of Android Banking Mobile Apps: Challenges and Opportunities",
      authors: "Akash Sharma, Dr. Sunil K. Singh, Sudhakar Kumar, Anureet Chhabra, Saksham Gupta"
    },
    {
      year: "2022",
      title: "Sustainable Framework for Metaverse Security and Privacy: Opportunities and Challenges",
      authors: "Manraj Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Uday Madan, Tamanna Maan"
    },
    {
      year: "2021",
      title: "Automated Machine Learning (AutoML): The Future of Computational Intelligence",
      authors: "Gopal Mengi, Dr. Sunil K. Singh, Sudhakar Kumar, Deepak Mahto, Anamika Sharma"
    },
    {
      year: "2021",
      title: "Dropout-VGG based Convolutional Neural Network for Traffic Sign Categorization",
      authors: "Inderpreet Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Kriti Aggarwal"
    }
  ]
};

const ResearchPublications = () => {
  const [activeTab, setActiveTab] = useState('journals');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'year', direction: 'desc' });

  const tabs = [
    { id: 'journals', label: 'Journal Papers' },
    { id: 'books', label: 'Books/Book Chapters' },
    { id: 'conferences', label: 'Conference Papers' }
  ];

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const sortData = (data) => {
    return [...data].sort((a, b) => {
      if (sortConfig.key === 'year') {
        return sortConfig.direction === 'asc' 
          ? a.year - b.year 
          : b.year - a.year;
      }
      return sortConfig.direction === 'asc'
        ? a[sortConfig.key].localeCompare(b[sortConfig.key])
        : b[sortConfig.key].localeCompare(a[sortConfig.key]);
    });
  };

  const filteredData = publicationsData[activeTab]?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.year.includes(searchTerm)
  );

  const sortedData = sortConfig.key ? sortData(filteredData) : filteredData;

  return (
    <section className="py-24 bg-transparent  to-black min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
            Research Publications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest research contributions and academic publications
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Custom Table */}
        <div className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-left">
                    <button
                      onClick={() => handleSort('year')}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <span>Year</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="p-4 text-left">
                    <button
                      onClick={() => handleSort('title')}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <span>Title</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="p-4 text-left">
                    <button
                      onClick={() => handleSort('authors')}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <span>Authors</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <td className="p-4 text-blue-400 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-between group">
                        <span className="text-gray-200 group-hover:text-blue-400 transition-colors duration-200">
                          {item.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </td>
                    <td className="p-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 flex-shrink-0" />
                        <span>{item.authors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;