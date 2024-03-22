import React, { useState } from "react";
import CountBadge from "./CountBadge";
import { FolderFill } from "react-bootstrap-icons";
import SingleFile from "./SingleFile";
import { FolderIcon } from "./icons";
import useStore from "../hooks/useStore";

function SingleFolder({ name, data, level }) {
    const isVideoOnly = useStore((state) => state.viewDetails.showVideoOnly);
    const _ms_ = 25;
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen((v) => !v);
        // console.log("clicked");
    };

    let fileList = data["files"] ?? [];

    // console.log(`level=${level} -> ${list.length} --> ${name}`, data);

    let folderList = Object.keys(data).filter(
        (v) => !["files", "level"].includes(v)
    );
    const isEmptyDirectory = !(fileList.length || folderList.length);

    if (isEmptyDirectory) {
        return (
            <p
                style={{
                    paddingLeft: `${level * _ms_}px`,
                    display: open ? "block" : "none",
                }}
            >
                📄{name}
                <h1 className="text-3xl">Nothing found here</h1>
            </p>
        );
    }

    return (
        <div onClick={handleClick}>
            {folderList.map((folderName, folderId) => {
                // console.log("#".repeat(10), key, data[key]);
                const videoCount = data[folderName]["files"].filter(
                    (f) => f?.extension === "mp4"
                ).length;
                const fileCount = data[folderName]["files"]?.length;

                return (
                    <div
                        style={{ paddingLeft: `${level * _ms_}px` }}
                        key={folderName + folderId}
                    >
                        <h1 className="flex gap-2 py-2">
                            <FolderIcon size={20} />
                            {folderName}
                            <CountBadge label={"Total"} count={fileCount} />

                            <CountBadge label={"Video"} count={videoCount} />
                        </h1>

                        <SingleFolder
                            key={folderName}
                            name={folderName}
                            data={data[folderName]}
                            level={level + 1}
                        />
                    </div>
                );

                // return <p key={Math.random()}> {key} </p>;
            })}

            <div className="block">
                {data["files"]?.map((v, fileId) => {
                    if (v["extension"] != "mp4" && isVideoOnly) {
                        return null;
                    }
                    return (
                        <p
                            style={{ paddingLeft: `${level * _ms_}px` }}
                            className="text-sm leading-6"
                            key={v.name + fileId}
                        >
                            <SingleFile name={v.name} data={v} />
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default SingleFolder;
