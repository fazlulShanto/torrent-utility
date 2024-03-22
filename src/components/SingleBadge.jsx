import React from "react";

const PillBadge = ({ text, color }) => {
    return (
        <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${color}`}
        >
            {text}
        </span>
    );
};

export default PillBadge;
