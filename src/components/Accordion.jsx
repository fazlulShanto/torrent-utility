import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-700 last:border-b-0">
            <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className="text-lg font-semibold text-gray-200">
                    {title}
                </div>
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </div>
            <div
                className={`px-4 py-3 transition-all duration-300 ${
                    isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
            >
                <div className="text-gray-400">{content}</div>
            </div>
        </div>
    );
};

export default Accordion;
