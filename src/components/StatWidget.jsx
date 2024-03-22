import React from "react";

const getColor = (txt) => {
    const __color__ = {
        success: "border-green-500",
        failed: "border-red-500",
        warn: "border-amber-500",
        default: "border-fuchsia-500",
    };
    if (Object.keys(__color__).includes(txt)) {
        return __color__[txt];
    }
    return __color__["default"];
};

function StatWidget({ datavalue, datatitle, color }) {
    // console.log(color);
    return (
        <div
            className={`bg-slate-700 w-full text-gray-200 gap-4 border-l-4 ${getColor(
                color
            )} pb-1 flex-col h-auto rounded-md pl-4`}
        >
            <p className="font-semibold text-md">{datatitle}</p>
            <p className="font-medium text-md">{datavalue} </p>
        </div>
    );
}

export default StatWidget;
