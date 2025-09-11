// components/Events.js
import React from "react";
import eventsBanner from "../acm-assets/ELIMENT_SPEAKER.png"; // adjust path if needed

const Events = () => {
    return (
        <section className="mb-0 pb-0">
            {/* Upcoming Events Title */}
            <div>
                <h2 className="text-white text-5xl font-bold mb-12 text-center">
                    Upcoming Events
                </h2>
            </div>

            {/* Banner Image */}
            <div className="p-8">
                <div className="w-3/4 rounded-lg overflow-hidden shadow-lg mx-auto">
                    <img
                        src={eventsBanner}
                        alt="Events Banner"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Events;
