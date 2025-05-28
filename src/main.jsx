import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Magazine from './Pages/Magazine.jsx';
import Resources from './Pages/Resources.jsx';
import Achievements from './Pages/Achievements.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Team from './Pages/Team.jsx';
import Gallery from './Pages/Gallery.jsx';
import Event from './Pages/Event.jsx';
import About from './Pages/About.jsx';
import ACMAbout from './Pages/ACMAbout.jsx';
import './index.css';
import Research from './Pages/Research.jsx';
import CodeForCause from './Pages/CodeForCause.jsx';
import TalkWithTechie from './Pages/TalkWithTechie.jsx';
import CodeForTech from './Pages/CodeForTech.jsx';
import HealthyBytes from './Pages/HealthyBytes.jsx';
import CareerPathway from './Pages/CareerPathway.jsx';
import Webmasters from './Pages/WebMasters.jsx';
import Contact from './Pages/Contact.jsx';
import SudhakarKumar from './Pages/SudhakarKumar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/events" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About /> } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/acmw" element={<ACMAbout />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/research" element={<Research />} />
        <Route path="/sudhakar-kumar" element={<SudhakarKumar/>} />
        <Route path="/codeforcause" element={<CodeForCause/>} />
        <Route path="/talkwithtechie" element={<TalkWithTechie/>} />
        <Route path="/codefortech" element={<CodeForTech/>} />
        <Route path="/healthybytes" element={<HealthyBytes/>} />
        <Route path="/careerpathway" element={<CareerPathway/>} />
        <Route path="/webmasters" element={<Webmasters/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>
);
