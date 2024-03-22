import React, { useState } from "react";
import { readFromArrayBuffer } from "../utils/Torrent.utility";
import TorrentInfoWidgets from "../components/TorrentInfoWidgets";
import TorretnFileTree from "../components/TorretnFileTree";
import Checkbox from "../components/Checkbox";
import useStore from "../hooks/useStore";
import useStateReducer from "../hooks/useStateReducer";
import GearSettings from "../components/GearSettings";

function ViewTorrentDetails() {
    const isVideoOnly = useStore((state) => state.viewDetails.showVideoOnly);
    const reducers = useStateReducer();
    const [fileData, setFileDate] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const handleFileUpload = (ev) => {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.addEventListener("load", async () => {
            // console.log(file);
            /**
             * valid keys are
             * ----------------
             * announce
             * created
             * createdBy
             * files
             * infoHash
             * length
             * name
             * private
             */
            const res = await readFromArrayBuffer(reader.result);
            console.log("file data", res);
            setFileDate(res);
            setShowDetails(true);
        });
    };
    return (
        <div className="flex-col h-full flex">
            <div className="p-2 border-white border-b-2">
                <input
                    className="block w-full text-sm
                    file:py-2 file:px-4
                    file:rounded-full file:border-0 file:mr-4"
                    type="file"
                    name="torrent"
                    id="torrent-input"
                    onChange={handleFileUpload}
                />
            </div>
            <div className="flex flex-grow gap-2 w-full overflow-y-auto">
                <div className="w-[240px] overflow-y-auto border-r-2 border-gray-300">
                    {showDetails && <TorrentInfoWidgets data={fileData} />}
                </div>

                <div className="flex-grow flex flex-col relative">
                    <div className="overflow-y-auto">
                        {<TorretnFileTree data={fileData} />}
                    </div>
                    <div className="absolute bottom-8 right-8">
                        <GearSettings
                            className={`bottom-8 right-[30px] w-[200px]`}
                        >
                            <div className="w-full flex flex-col gap-2 px-2 py-2 bg-slate-700 rounded-md">
                                <p className="text-center">Filter Files</p>
                                <Checkbox
                                    defaultValue={isVideoOnly}
                                    label={"Show videos Only"}
                                    onChange={() =>
                                        reducers.viewDetails.toggleVideoOnly()
                                    }
                                />
                            </div>
                        </GearSettings>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTorrentDetails;
