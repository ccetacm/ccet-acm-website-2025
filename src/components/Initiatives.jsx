import React from 'react'
import '../styles/initiatives.css';
import Section from './Section';
import '../styles/acmwstyles.css'
import Button from './Button';

const Initiatives = () => {
  return (
    <Section crosses={true} customPaddings>
      <div className="card-container in-section">
        <h2 className="h2 section-text ml-[-27px] text-white">Our Initiatives</h2>
        <div className="card__container">
          {/* Research & Innovation Card */}
          <article className="card__article card__green">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main3" src="./acm-assets-2/main3.png" alt=""/>
              <h2 className="card__title">Research & Sponsored Projects </h2>
              <p className="card__description">
                International Collaborative and Sponsored Projects
              </p>
              <Button href="/research" white>Learn More</Button>
            </div>
          </article>

          {/* Code for Cause Card */}
          <article className="card__article">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main1" src="./acm-assets-2/main1.png" alt=""/>
              <h2 className="card__title">Code For Cause</h2>
              <p className="card__description">
                Code for Cause unites tech and NGOs to tackle social issues.
              </p>
              <Button href="/codeforcause" white>Learn More</Button>
            </div>
          </article>

          {/* Code for Technology Card */}
          <article className="card__article card__orange">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main2" src="./acm-assets-2/main2.png" alt=""/>
              <h2 className="card__title">Code for Technology</h2>
              <p className="card__description">
                Code for Technology empowers coding for leading tech giants.
              </p>
              <Button href="/codefortech" white>Learn More</Button>
            </div>
          </article>

          {/* Talk with Techies Card */}
          <article className="card__article">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main4" src="./acm-assets-2/main4-2.webp" alt=""/>
              <h2 className="card__title">Talk with Techies</h2>
              <p className="card__description">
                Engaging conversations with tech experts to inspire and inform.
              </p>
              <Button href="/talkwithtechie" white>Learn More</Button>
            </div>
          </article>

          {/* Career Opportunities Card */}
          <article className="card__article card__orange">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main5" src="./acm-assets-2/main5.webp" alt=""/>
              <h2 className="card__title">Career Pathways</h2>
              <p className="card__description">
                Exploring pathways to internships and career opportunities.
              </p>
              <Button href="/careerpathway" white>Learn More</Button>
            </div>
          </article>

          {/* Healthy Bytes Card */}
          <article className="card__article card__green">
            <div className="card__scale-1"></div>
            <div className="card__scale-2"></div>
            <div className="card__data">
              <img className="main6" src="./acm-assets-2/main6.png" alt=""/>
              <h2 className="card__title">Healthy Byte</h2>
              <p className="card__description">
                Empowering you with essential skills for a healthier tomorrow.
              </p>
              <Button href="/healthybytes" white>Learn More</Button>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}

export default Initiatives