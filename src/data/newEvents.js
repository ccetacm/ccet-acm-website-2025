// Existing events imports 
import wordpressEventImg from "../images/events/wordpress-event.jpg";
import teacherDayEventImg from "../images/events/teacher-day-event.jpg";
import resumeBuildingEventImg from "../images/events/resume-building-event.jpeg";
import orientationEventImg from "../images/events/orientation-event.jpg";
import meetMentorEventImg from "../images/events/meet-mentor-event.jpg";
import introDomainEventImg from "../images/events/intro-domain-event.jpg";
import hacktoberDay1EventImg from "../images/events/hacktober-day-1-event.jpg";
import hacktoberDay2EventImg from "../images/events/hacktober-day-3-event.jpg";
import farewellEventImg from "../images/events/farewell-event.jpg";
import designEventImg from "../images/events/design-event.jpg";
import cppEventImg from "../images/events/cpp-event.jpg";

// New(2025) event images imports
import generativeAIEventImg from "../images/events/Generative_AI.png";
import nepEventImg from "../images/events/NEP.png";


// competitions imports 
import bgmiComp from "../images/events/bgmi-comp.png";
import byteBrawlComp from "../images/events/bytebrawl-comp.png";
import designScapeComp from "../images/events/design-scape-comp.png";
import quizathonComp from "../images/events/quizathon-comp.png";
import techscribeComp from "../images/events/techscribe-comp.png";


export const events = [
  {
    id: 1,
    title: "Wordpress Workshop",
    date: "August 23, 2024",
    speaker: "Harshit Vashisht, Sahil Garg",
    description: "The CCET ACM and ACM-W Student Chapters hosted a WordPress website building workshop on 23rd August 2024. Speakers Harshit Vashisht and Sahil Garg guided participants through website creation, demonstrating WordPress's user-friendly interface and powerful development tools.",
    image: wordpressEventImg,
  },
  {
    id: 2,
    title: "Orientation",
    date: "August 30, 2024",
    speaker: "Sahil Garg, Ayushi",
    description: "CCET's ACM Chapter orientation introduced new students to coding, featuring interactive challenges and insights from Sahil Garg and Ayushi, inspiring tech passion and skill development.",
    image: orientationEventImg,
  },
  {
    id: 3,
    title: "Introduction To Domains",
    date: "September 27, 2024",
    speaker: "Samar Pratap Singh, Vanshika Chilkoti",
    description: "CCET ACM and ACM-W Student Chapters hosted an Introduction to Domains session by Vanshika Chilkoti and Samar Pratap Singh, exploring diverse technology career paths for students.",
    image: introDomainEventImg,
  },
  {
    id: 4,
    title: "Meet The Mentors",
    date: "September 30, 2024",
    speaker: "Dr. Sunil K. Singh, Dr. Sudhakar Kumar",
    description: "CCET ACM and ACM-W chapters hosted a Meet the Mentors session with Dr. Sunil K. Singh and Dr. Sudhakar Kumar, providing students with career guidance and insights.",
    image: meetMentorEventImg,
  },
  {
    id: 5,
    title: "HACKTOBERFEST DAY 1: Git and Github",
    date: "October 1, 2024",
    speaker: "Sahil Garg",
    description: "CCET ACM Student Chapter's Hacktoberfest session featured Sahil Garg explaining open-source contributions, Git, and GitHub, motivating students to engage in collaborative tech development.",
    image: hacktoberDay1EventImg,
  },
  {
    id: 6,
    title: "Hactoberfest Day 3 - CSS",
    date: "October 3, 2024",
    speaker: "Japjot Singh Nanda",
    description: "On October 3, 2024, the ACM and ACM-W Chapters hosted the third day of Hacktoberfest, focusing on the essentials of Cascading Style Sheets (CSS). The session, conducted virtually on Google Meet, started at 3:00 PM and provided an interactive platform for students to enhance their understanding of CSS, a core technology in web development.",
    image: hacktoberDay2EventImg,
  },
  {
    id: 7,
    title: "Resume Building",
    date: "October 4, 2024",
    speaker: "Samar Pratap Singh",
    description: "On October 4, 2024, the ACM and ACM-W student chapters of CCET hosted a Resume Building session led by Samar Pratap Singh. The workshop focused on crafting professional resumes tailored to career goals, with insights on structuring, highlighting achievements, and optimizing content for various industries. Key topics included using keywords for ATS, presenting concise information, and strategies to stand out in competitive hiring. The session was highly engaging, with students actively seeking advice to enhance their resumes, making it a practical and valuable experience.",
    image: resumeBuildingEventImg,
  },
  {
    id: 8,
    title: "Design 101",
    date: "October 9, 2024",
    speaker: "Saksham Arora , Ayushi",
    description: "On October 9, 2024, the ACM and ACM-W Chapters at CCET hosted Design 101 as part of their Technical Week celebrations. Held in Seminar Hall, Block C, the workshop featured speakers Saksham Arora and Ayushi, who introduced students to design fundamentals and their practical applications. Through interactive sessions, participants explored creativity and problem-solving, gaining valuable insights into leveraging design in technology and innovation. The event inspired attendees to incorporate design principles into their academic and professional pursuits, reflecting ACM and ACM-W's dedication to fostering a dynamic and inclusive learning environment.",
    image: designEventImg,
  },
  {
    id: 9,
    title: "Introduction to C/C++",
    date: "November 7, 2024",
    speaker: "Divyansh Manro, Dikshant Rajput",
    description: "On November 7, 2024, the ACM and ACM-W student chapters of CCET hosted Introduction to C/C++ in the CCET auditorium. Speakers Divyansh Manro and Dikshant Rajput covered syntax basics, pointers, memory management, and real-world applications of C/C++ in system programming and competitive coding. Students actively participated in an interactive Q&A session, enhancing their understanding and problem-solving skills. The event provided a solid foundation in C/C++ and inspired attendees to explore advanced programming concepts.",
    image: cppEventImg,
  },

  // New (2025) events added below

  {
    id: 10,
    title: 'National Educational Policy',
    date: 'July 31, 2025',
    speaker: 'Prof Sunil K. Singh',
    description: 'The ACM Student Chapter, CCET, organized an Insightful Expert Talk on 31st July 2025, delivered by Prof. Sunil K. Singh, Head, Department of CSE, CCET (Degree Wing), Panjab University. Centered on the theme “Towards Academic Excellence and Research-Driven Nation Building: Five-Year Achievements of NEP 2020 for Viksit Bharat @2047”, the session highlighted the transformative role of NEP 2020 in advancing academic innovation, skill development, and research excellence. Prof. Singh emphasized how education and research are vital to India’s vision of becoming a developed nation by 2047. The event saw active participation from students and faculty, making it both informative and inspiring.',
    image: nepEventImg,
  },
  {
    id: 11,
    title: 'Generative AI',
    date: 'August 22, 2025',
    speaker: 'Aanshi Bansal & Bhavya',
    description: 'The ACM CCET Student Speaker Event, held on 22nd August 2025, focused on the theme “Generative AI: Redefining Today …”. The session explored how generative AI is transforming technology and society, covering its core concepts along with real-world applications. Organized as part of ACM’s initiative to engage students with emerging technologies, the event offered insightful discussions that highlighted both the opportunities and challenges of generative AI, leaving participants with a deeper understanding of its impact on the present and future.',
    image: generativeAIEventImg,
  },
];


export const competitions = [
  {
    id: 1,
    title: 'Byte Brawl',
    date: 'Nov. 12, 2024',
    description: 'ByteBrawl was a fast-paced coding competition where participants solved algorithmic challenges under a strict 2-hour time limit. The competition encouraged problem-solving, programming efficiency, and accuracy. The event successfully brought together coding enthusiasts, challenging their logical thinking and programming skills. The live leaderboard added an exciting dynamic to the competition, keeping participants motivated throughout',
    image: byteBrawlComp
  },
  {
    id: 2,
    title: "Conqueror's Clash: BGMI Tournament",
    date: 'Nov. 12, 2024',
    description: "The Conqueror's Clash was an online BGMI tournament with teams of up to 4 competing for a ₹3000 prize pool. The event featured custom matches, strict anti-cheating rules, and showcased participants' strategy, teamwork, and gaming skills. It brought together enthusiasts in a fun yet competitive spirit.",
    image: bgmiComp
  },
  {
    id: 3,
    title: 'Design Scape',
    date: 'Nov. 12, 2024',
    description: 'DesignScape challenged participants to create original, captivating designs using tools like Adobe, Figma, and Sketch. Submissions in JPEG/PNG were judged on creativity, visual appeal, and innovation. The event saw strong participation, inspiring students to push creative boundaries, with seamless coordination ensuring a smooth process.',
    image: designScapeComp
  },
  {
    id: 4,
    title: 'Quizathon: Rapid Fire',
    date: 'Nov. 13, 2024',
    description: 'Rapid Fire was an offline quiz on programming, computer science, and tech trends, conducted via Kahoot! Participants competed with their devices in an engaging session, showcasing knowledge and staying updated on industry trends in a fun, interactive environment.',
    image: quizathonComp
  },
  {
    id: 5,
    title: 'Techscribe',
    date: 'Nov. 13, 2024',
    description: 'TechScribe was an article-writing competition designed to encourage originality and creative expression. Participants submitted articles based on their own ideas and imagination. The competition provided a platform for students to express their creativity and writing skills. Participants explored unique topics, fostering an environment of intellectual and literary growth.',
    image: techscribeComp
  },
]
