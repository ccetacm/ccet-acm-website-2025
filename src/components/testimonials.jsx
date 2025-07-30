import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials_data = [
    {
      img: "./images/team-pics/CASC 2025-26/jaiveer.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Jaiveer Singh",
      text_block: "Chairperson",
    },
    {
      img: "./images/team-pics/CASC 2025-26/ritika.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Ritika Kalia",
      text_block: "Chairperson",
    },
    {
      img: "./images/team-pics/CASC 2025-26/satvik.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Satvik Pathak",
      text_block: "Vice Chaiperson",
    },
    {
      img: "./images/team-pics/CASC 2025-26/samriti.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Samriti Sharma",
      text_block: "Vice Chaiperson",
    },
    {
      img: "./images/team-pics/CASC 2025-26/sanatan.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Sanatan Sharma",
      text_block: "Secretary",
    },
    {
      img: "./images/team-pics/CASC 2025-26/simar.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Simar Atwal",
      text_block: "Secretary",
    },
    {
      img: "./images/team-pics/CASC 2025-26/dhruv.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Dhruv Bali",
      text_block: "Treasurer",
    },
    {
      img: "./images/team-pics/CASC 2025-26/khushi.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Khushi Mittal",
      text_block: "Treasurer",
    },
    {
      img: "./images/team-pics/CASC 2025-26/rohan.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Rohan",
      text_block: "Web Master",
    },
    {
      img: "./images/team-pics/CASC 2025-26/bhavya.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Bhavya",
      text_block: "Web Master",
    },
    {
      img: "./images/team-pics/CASC 2025-26/saksham.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Saksham",
      text_block: "Design Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/eshmeet.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Eshmeet Singh Bachu",
      text_block: "Design Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/kritin.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Kritin",
      text_block: "Executive Member Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/ravina.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Ravina Mittal",
      text_block: "Executive Member Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/vanshika.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Vanshika Singla",
      text_block: "Editorial Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/aanshi.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Aanshi Bansal",
      text_block: "Editorial Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/sahil.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Sahil Kumar",
      text_block: "Social Media Manager",
    },
    {
      img: "./images/team-pics/CASC 2025-26/bhumika.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Bhumika Bijlwan",
      text_block: "Social Media Manager",
    },
    {
      img: "./images/team-pics/CASC 2025-26/maanit.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Maanit",
      text_block: "External PR Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/harshita.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Harshita Sharma",
      text_block: "External PR Head",
    },
    {
      img: "./images/team-pics/CASC 2025-26/shivam.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Shivam Vats",
      text_block: "Membership chair",
    },
    {
      img: "./images/team-pics/CASC 2025-26/mehak.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Mehak Negi",
      text_block: "Membership chair",
    },
    {
      img: "./images/team-pics/CASC 2025-26/aditya.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Aaditya",
      text_block: "Event Manager",
    },
    {
      img: "./images/team-pics/CASC 2025-26/sargun.jpg",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Sargun",
      text_block: "Event Manager",
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
                    src={"./acm-assets-2/quotes.png"}
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
