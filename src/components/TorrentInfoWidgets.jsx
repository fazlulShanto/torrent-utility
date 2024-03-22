import React from "react";
import StatWidget from "./StatWidget";
import RandomBadge from "./RandomBadge";

function TorrentInfoWidgets({ data }) {
    // console.log(data);
    const { announce, created, createdBy, name, status, size, files } = data;
    return (
        <div className="pt-8 px-2 flex gap-8 flex-col">
            {/* <StatWidget datavalue={name} datatitle={"Name:"} color={'success'} /> */}

            <StatWidget datavalue={size} datatitle={"Size on Disk:"} />

            <StatWidget
                datavalue={files.length}
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
            <div className="badges files">
                <RandomBadge text={"test : 04"} />
                <RandomBadge text={"test : 04"} />
                <RandomBadge text={"test : 04"} />
                <RandomBadge text={"test : 04"} />
                <RandomBadge text={"test : 04"} />
                <RandomBadge text={"test : 04"} />
            </div>
        </div>
    );
}

export default TorrentInfoWidgets;
