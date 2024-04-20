import { CircleOff } from "lucide-react";
import React from "react";
import EmptyData from "./EmptyData";
import CopyBlock from "./CopyBlock";
import { getTbdTemplateDescription } from "../utils/tbd.utility";

/**
 * 
    "id",
    "title",
    "description",
    "lastUpdateDate",
    "rating",
    "headline",
    "requirements",
    "what_will_learn",
    "who_is_for",
    "badge"
 */

/**
 * @param {Object} data
 * @returns {JSX.Element}
 */

function TbdTemplate({ data }) {
    if (!data || typeof data !== "object" || !data?.id) {
        return <EmptyData />;
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="bg-slate-700 rounded-lg p-2">
                <CopyBlock label="Title:" value={data.title} />
            </div>
            <div className="bg-slate-700 rounded-lg p-2">
                <CopyBlock
                    label="Description:"
                    value={getTbdTemplateDescription(data)}
                />
            </div>
        </div>
    );
}

export default TbdTemplate;
