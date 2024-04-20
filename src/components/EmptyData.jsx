import { CircleOff } from "lucide-react";
import React from "react";

function EmptyData() {
    return (
        <div className="h-full w-full flex gap-4 items-center justify-center">
            <CircleOff size={48} strokeWidth={3} />
            No data found
        </div>
    );
}

export default EmptyData;
