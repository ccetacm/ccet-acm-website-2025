import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const Testimonials = () => {
  const testimonials_data = [
    {
      img: "./images/team-pics/CASC 2024-25/Sahil - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Sahil Garg",
      text_block: "Chairperson",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Ayushi - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Ayushi",
      text_block: "Chairperson",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Saksham - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Saksham Arora",
      text_block: "Vice Chaiperson",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Simran - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Simran Jaggi",
      text_block: "Vice Chaiperson",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Samar - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Samar Pratap Singh",
      text_block: "Secretary",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Vanshika - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Vanshika Chilkoti",
      text_block: "Secretary",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Divyansh - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Divyansh",
      text_block: "Treasurer",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Janvi - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Janvi Sharma",
      text_block: "Treasurer",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Harshit - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Harshit Vashisht",
      text_block: "Web Master",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Japjot - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Japjot",
      text_block: "Web Master",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Rajneesh - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Rajneesh",
      text_block: "Design Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Rima - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Rima",
      text_block: "Design Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Yuvraj - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Yuvraj",
      text_block: "Executive Member Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Raj - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Raj Kanwar",
      text_block: "Executive Member Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Nipun - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Nipun",
      text_block: "Editorial Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Deepika - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Deepika",
      text_block: "Editorial Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Dikshant - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Dikshant Rajput",
      text_block: "Social Media Manager",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Anoop - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Anoop",
      text_block: "Social Media Manager",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Jaiveer - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Jaiveer",
      text_block: "External PR Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Ravina - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Ravina Mittal",
      text_block: "External PR Head",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Tranum - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Trannum",
      text_block: "Membership chair",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Vanshika Singla - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Vanshika Singla",
      text_block: "Membership chair",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Jasjeet - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Jasjeet",
      text_block: "Event Manager",
    },
    {
      img: "./images/team-pics/CASC 2024-25/Deependra - 1.JPG",
      content_text:
        "CCET ACM Student chapter is a group of people with similar interests and goals in computer science. Together, this platform focuses on growth and development at not only personal but professional level also it has a unique learning environment. It provides everyone an opportunity to learn something new.",
      testimonial_name: "Deependra",
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