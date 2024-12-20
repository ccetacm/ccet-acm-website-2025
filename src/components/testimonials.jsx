import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quotesImg from "../acm-assets-2/quotes-1.png";


import profile1 from "../acm-assets-2/profile-1.jpg"
import profile2 from "../acm-assets-2/profile-2.jpeg"
import profile3 from "../acm-assets-2/profile3.jpg"
import profile4 from "../acm-assets-2/profile-4.jpeg"
import profile5 from "../acm-assets-2/profile-5.jpg"
import profile6 from "../acm-assets-2/profile-6.jpg"


const Testimonials = () => {
  const testimonials_data = [
    {
      img: profile1,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Akash Sharma",
      text_block: "Chairperson",
    },
    {
      img: profile2,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Tarun",
      text_block: "Vice Chaiperson",
    },
    {
      img: profile3,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Uday Madan",
      text_block: "Secretary",
    },
    {
      img: profile4,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Mehak Preet",
      text_block: "Membership chair",
    },
    {
      img: profile5,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Aishita",
      text_block: "Treasurer",
    },
    {
      img: profile6,
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Devashish Gupta",
      text_block: "Webmaster",
    },
  ];


  const [current, setCurrent] = useState(0);
  const length = testimonials_data.length;


  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };


  return (
    <section className="flex flex-col items-center justify-center h-auto lg:mt-[100px] min-h-[100vh] px-4">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Testimonials
      </h1>
      <p className="text-gray-400 text-lg mb-12 text-center max-w-3xl">
        What Our Executives Have To Say.
      </p>


      {/* Slider Content */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        {testimonials_data.map(
          (item, index) =>
            index === current && (
              <div
                key={index}
                className="text-center flex flex-col items-center gap-6 px-4"
              >
                {/* Quote and Testimonial Text */}
                <div className="flex items-start gap-4">
                  <img
                    src={quotesImg}
                    alt="Quotes"
                    className="w-8 h-8 self-start"
                  />
                  <p className="text-white text-2xl leading-relaxed">
                    {item.content_text}
                  </p>
                </div>


                {/* Profile Information */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.testimonial_name}
                    className="w-20 h-20 border-2 border-pink-600 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h6 className="text-white text-lg font-medium">
                      {item.testimonial_name}
                    </h6>
                    <span className="text-gray-400">{item.text_block}</span>
                  </div>
                </div>
              </div>
            )
        )}


        {/* Navigation Arrows */}
        <div className="flex justify-between w-full mt-10 px-8">
          <button
            onClick={previous}
            className="text-white text-3xl hover:text-pink-600 transition"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="text-white text-3xl hover:text-pink-600 transition"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;