import Section from './Section';
import Button from './Button';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import  '../styles/acmwstyles.css';

const AcmwDesc = () => {
  return (
    <Section>
      <div id="acmw" className="container acmw-section  mt-[200px] mx-auto flex flex-col lg:flex-row items-center lg:space-x-10 ">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] mt-[-200px] lg:mt-[150px] flex justify-center lg:justify-start">
          <img 
            src={"./acm-assets-2/acmw-earth.png"} 
            className="h-[250px] lg:h-[50%] transform transition-transform duration-300 hover:scale-105 rounded-md" 
            alt="ACMW Earth" height="200px"/>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left self-center">
          <h2 className="h2 mt-[-10px] lg:mt-[150px]">ACM-W</h2>
          <p className="body-1 max-w-3xl mx-auto lg:mx-0 mb-6 text-n-2 lg:mb-8 ">
            ACM-W takes forward the torch of ACM but with a special focus on women and empowers them in a way that they lead the world in the field of technology and provides them a path and platform to showcase their talent and hard work, which also gets recognized at the global level.
          </p>
          <Button href="/acmw" white>Learn More</Button>
        </div>
      </div>

    </Section>
  );
}

export default AcmwDesc;
