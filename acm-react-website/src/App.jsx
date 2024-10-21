
import ButtonGradient from "./jsm-assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AcmwDesc from "./components/AcmwDesc";
import CompetitionsSlider from "./components/CompetitionsSlider";
import Mentors from "./components/Mentors";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import Team from "./components/Team";

const App = () => {
  return (
  <>
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header/>
    <Hero/>
    <AcmwDesc/>
    <CompetitionsSlider/>
    <Mentors/>
    <Team/>
    <Membership/>
    <Footer/>
  </div>
  <ButtonGradient/>
  </>
  )
}

export default App;