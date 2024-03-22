import React from "react";
import StatWidget from "./StatWidget";
import RandomBadge from "./RandomBadge";

function TorrentInfoWidgets({ data }) {
    // console.log(data);
    const { announce, created, createdBy, refinedData, status, size, files } =
        data;

    const sortedRefinedData = Object.keys(refinedData.types)
        .map((key) => ({ text: key, count: refinedData.types[key] }))
        .sort((a, b) => b.count - a.count);
    return (
        <div className="pt-8 px-2 flex gap-4 flex-col">
            {/* <StatWidget datavalue={name} datatitle={"Name:"} color={'success'} /> */}

            <StatWidget datavalue={size} datatitle={"Size on Disk:"} />

            <StatWidget
                datavalue={refinedData.total}
                datatitle={"Total File:"}
                color={"success"}
            />

            <StatWidget
                datavalue={new Date(created).toLocaleDateString()}
                datatitle={"Created At:"}
                color={"success"}
            />

            <StatWidget
                datavalue={status ? "Private" : "Public"}
                datatitle={"Tracker Status:"}
                color={"failed"}
            />

            <StatWidget
                datavalue={announce?.length || 0}
                datatitle={"Tracker Count:"}
                color={"success"}
            />

            <StatWidget
                datavalue={createdBy}
                datatitle={"Created By:"}
                color={"success"}
            />
            <div className="badges files overflow-y-auto flex flex-col gap-2">
                {sortedRefinedData.map((keyData, index) => {
                    return (
                        <RandomBadge
                            key={index}
                            text={`.${keyData.text} : ${keyData.count} `}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TorrentInfoWidgets;
