// App.js
import React, { useState, useRef } from "react";
import Hero from "./components/Hero";
import AcmwDesc from "./components/AcmwDesc";
import Initiatives from "./components/Initiatives";
import CompetitionsSlider from "./components/CompetitionsSlider";
import Events from "./components/Events";
import Mentors from "./components/Mentors";
import Team from "./components/Team";
import Flipbook from "./components/Flipbook";
import Membership from "./components/Membership";
import Testimonials from "./components/testimonials";
import VisionMission from "./components/VisionMission";
import EventNotification from "./components/EventPopup.jsx";

const App = () => {
    const [showNotification, setShowNotification] = useState(true);
    const eventsRef = useRef(null);

    const scrollToEvents = () => {
        eventsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Optional: Custom event data for notification
    const notificationData = {
        title: "New Event Alert!",
        description: "Don't miss our upcoming event AI and Generative AI in CyberSecurity - Sept 12, 2025",
        buttonText: "View Event"
    };

    // Optional: Custom events data
    const eventsData = [
        {
            id: 1,
            date: "Dec 15, 2024",
            time: "6:00 PM - 8:00 PM",
            title: "Tech Talk: AI in Healthcare",
            description: "Join us for an insightful discussion on the applications of AI in modern healthcare.",
            location: "Main Auditorium",
            type: "Tech Talk"
        },
        {
            id: 2,
            date: "Dec 20, 2024",
            time: "2:00 PM - 5:00 PM",
            title: "Workshop: Web Development",
            description: "Hands-on workshop covering modern web development frameworks and best practices.",
            location: "Computer Lab 1",
            type: "Workshop"
        }
        // Add more events as needed
    ];

    return (
        <>
            {showNotification && (
                <EventNotification
                    onClose={() => setShowNotification(false)}
                    onEventClick={scrollToEvents}
                    eventData={notificationData} // Optional: pass custom notification data
                />
            )}

            <Hero />
            <AcmwDesc />
            <Initiatives />
            <div ref={eventsRef}>
                <Events events={eventsData} />
            </div>
            <CompetitionsSlider />
            <Mentors />
            <Team />
            <Flipbook />
            <VisionMission />
            <Membership />
            <Testimonials />
        </>
    );
};

export default App;