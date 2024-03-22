import React from "react";

const CountBadge = ({ label, count }) => {
    return (
        <div className="inline-flex items-center px-1 rounded-full bg-gray-300 text-black">
            <span className="text-xs font-bold">{label}:</span>
            <span className="ml-1 bg-blue-800 text-white px-2 rounded-full text-xs">
                {count}
            </span>
        </div>
    );
};

export default CountBadge;
