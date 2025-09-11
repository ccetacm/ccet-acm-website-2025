import React, { useState } from "react";
import { X, Calendar, ChevronDown } from "lucide-react";

const EventNotification = ({ onClose, onEventClick, eventData }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    const handleEventClick = () => {
        if (onEventClick) onEventClick();
        setIsVisible(false);
    };

    if (!isVisible) return null;

    // Default event data if none provided
    const defaultEventData = {
        title: "New Event!",
        description: "Don't miss our upcoming AI and Generative AI in CyberSecurity - Sept 12, 2025",
        buttonText: "View Events"
    };

    const event = eventData || defaultEventData;

    return (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg p-4 max-w-sm animate-bounce">
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                    <Calendar className="mr-2" size={20} />
                    <span className="font-semibold">{event.title}</span>
                </div>
                <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close notification"
                >
                    <X size={16} />
                </button>
            </div>
            <p className="text-sm mb-3">
                {event.description}
            </p>
            <button
                onClick={handleEventClick}
                className="bg-white text-purple-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors flex items-center"
            >
                {event.buttonText}
                <ChevronDown className="ml-1" size={14} />
            </button>
        </div>
    );
};

export default EventNotification;
