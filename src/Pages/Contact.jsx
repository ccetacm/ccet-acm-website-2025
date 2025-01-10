import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, ArrowRight, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animated background gradient
  const gradientBg = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div className="min-h-screen mt-[100px] bg-[#0E0C15] text-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-transparent rounded-full filter blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Get in Touch
              </h1>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a question or want to connect? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Floating Cards with Gradient Borders */}
              <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  <div className="p-6 rounded-xl bg-gray-800/90 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Email</h3>
                        <a href="mailto:acm@ccet.ac.in" className="text-gray-400 hover:text-blue-400 transition-colors">
                          acm@ccet.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                  <div className="p-6 rounded-xl bg-gray-800/90 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Location</h3>
                        <p className="text-gray-400">
                          Chandigarh College of Engineering and Technology<br />
                          Sector 26, Chandigarh, 160019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500">
                  <div className="p-6 rounded-xl bg-gray-800/90 backdrop-blur-xl hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-pink-500/10 rounded-lg">
                        <Globe className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">Social</h3>
                        <div className="flex space-x-4 mt-2">
                          <a href="https://x.com/acmccet" target="_blank" className="text-gray-400 hover:text-pink-400 transition-colors">Twitter</a>
                          <a href="https://www.facebook.com/acmccet" target="_blank"  className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
                          <a href="https://www.instagram.com/acmccet/" target="_blank"  className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <div className="p-8 rounded-xl bg-gray-800/90 backdrop-blur-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 placeholder-transparent peer"
                          placeholder="Name"
                          required
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300"
                        >
                          Name
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 placeholder-transparent peer"
                          placeholder="Email"
                          required
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300"
                        >
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300 placeholder-transparent peer"
                        placeholder="Subject"
                        required
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300"
                      >
                        Subject
                      </label>
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 placeholder-transparent peer"
                        placeholder="Message"
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm transition-all duration-300"
                      >
                        Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;