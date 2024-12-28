import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiFileWarningLine } from "react-icons/ri";

const topics = [
  "AI",
  "Web Development",
  "Deep Learning",
  "Machine Learning",
  "Data Science",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps",
  "Blockchain",
  "Smart Vehicles",
  "Healthcare",
  "Metaverse",
];

const resources = [
  {
    id: 1,
    image: "./acm-assets-2/resource1.jpg",
    title: "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
    description: "Sudhakar Kumar, Sunil K. Singh",
    buttonText: "Read More",
    topics: ["AI", "Deep Learning","Healthcare"],
  },
  {
    id: 2,
    image: "./acm-assets-2/resource2.png",
    title: "Distributed Ledger Technology",
    description: "Manraj Singh, Sudhakar Kumar",
    buttonText: "Read More",
    topics: ["Blockchain"],
  },
  {
    id: 3,
    image: "./acm-assets-2/resource3.png",
    title: "Digital Twins",
    description: "Tarun Vats, Sudhakar Kumar",
    buttonText: "Read More",
    topics: ["AI", "Data Science"],
  },
  {
    id: 4,
    image: "./acm-assets-2/resource4.png",
    title: "MLOps: A New Era Of DevOps, Powered By Machine Learning",
    description: "Muskaan Chopra, Sunik K Singh",
    buttonText: "Read More",
    topics: ["Machine Learning", "DevOps"],
  },
  {
    id: 5,
    image: "./acm-assets-2/resource5.png",
    title: "Metaverse Technology And It's Applications",
    description: "Mavneet Kaur, B.Gupta",
    buttonText: "Read More",
    topics: ["Blockchain", "Metaverse"],
  },
  {
    id: 6,
    image: "./acm-assets-2/resource6.jpg",
    title: "Edge Intelligence: A New Emerging Era",
    description: "A Dahiya, B.Gupta",
    buttonText: "Read More",
    topics: ["AI", "Data Science","Machine Learning"],
  },
  {
    id: 7,
    image: "./acm-assets-2/resource7.png",
    title: "Blockchain For Data Science",
    description: "Dipesh Singla, Sudhakar Kumar",
    buttonText: "Read More",
    topics: ["Blockchain", "Data Science"],
  },
];

const Resources = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topics);
  const [filteredResources, setFilteredResources] = useState(resources);
  const [noResults, setNoResults] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredTopics(topics);
      setFilteredResources(resources);
      setNoResults(false);
      return;
    }

    // Filter topics
    const matchedTopics = topics.filter(topic => 
      topic.toLowerCase().includes(query)
    );
    setFilteredTopics(matchedTopics);

    // Filter resources based on title, description, and topics
    const matchedResources = resources.filter(resource => 
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.topics.some(topic => topic.toLowerCase().includes(query))
    );

    setFilteredResources(matchedResources);
    setNoResults(matchedTopics.length === 0 && matchedResources.length === 0);
  };

  // Handle search on enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredTopics(topics);
      setFilteredResources(resources);
      setNoResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const matchedTopics = topics.filter(topic => 
      topic.toLowerCase().includes(query)
    );
    const matchedResources = resources.filter(resource => 
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.topics.some(topic => topic.toLowerCase().includes(query))
    );

    setFilteredTopics(matchedTopics);
    setFilteredResources(matchedResources);
    setNoResults(matchedTopics.length === 0 && matchedResources.length === 0);
  };

  return (
    <div className="bg-[#0E0C15] min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Mobile Topic Toggle */}
      <button
        className="md:hidden w-full bg-[#1C1A26] p-4 rounded-lg mb-4 flex items-center justify-between"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <span className="text-white font-semibold">Select Topic</span>
        <MdKeyboardArrowDown 
          className={`text-2xl transform transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className={`md:w-1/4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
          <div className="bg-[#1C1A26] p-6 rounded-xl sticky top-24">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Topics
            </h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                placeholder="Search topics..."
                className="w-full bg-[#2A2833] text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <IoSearchOutline 
                className="absolute left-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer" 
                onClick={handleSearch}
              />
            </div>

            {noResults ? (
              <div className="flex flex-col items-center justify-center p-4 text-gray-400">
                <RiFileWarningLine className="text-4xl mb-2" />
                <p className="text-center">No results found</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {filteredTopics.map((topic, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 
                      ${selectedTopic === topic 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : 'hover:bg-[#2A2833] text-gray-300'}`}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Resources
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mt-2 rounded-full"></div>
            </h1>
          </div>

          {noResults ? (
            <div className="flex flex-col items-center justify-center p-12 bg-[#1C1A26] rounded-xl">
              <RiFileWarningLine className="text-6xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
              <p className="text-gray-400 text-center">
                We couldn't find any resources matching your search. Try different keywords or browse all topics.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="group bg-[#1C1A26] rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A26] to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {resource.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500 bg-opacity-20 text-purple-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <button className="relative px-6 py-2 text-sm font-medium text-white transition-all duration-300 
                      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-600 before:to-pink-600 before:opacity-0 
                      hover:before:opacity-100
                      after:absolute after:inset-0 after:rounded-full after:border after:border-purple-500
                      group-hover:after:border-transparent">
                      <span className="relative">{resource.buttonText}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;