import React from "react";
import {
    Film,
    CardText,
    FiletypeHtml,
    FileEarmarkZipFill,
    PlayBtnFill,
    PlayBtn,
} from "react-bootstrap-icons";
import {
    DefaultFileIcon,
    FolderIcon,
    HTMLFileIcon,
    PDFFileIcon,
    SrtFileIcon,
    ZipFileIcon,
} from "./icons";

/**
 * @param {string} name Represents a file.
 * @param {Object} file - The file object.
 * @param {string} file.name - The name of the file.
 * @param {number} file.bytes - The size of the file in bytes.
 * @param {string} file.extension - The file extension.
 * @param {string} file.size - The size of the file in a human-readable format.
 */

function SingleFile({ name, data }) {
    const renderFileIcon = () => {
        const fileExtension = data.extension;
        const defaultIconSize = 18;
        const extensionMap = {
            video: {
                extensions: [
                    "mp4",
                    "mkv",
                    "avi",
                    "webm",
                    "flv",
                    "mov",
                    "wmv",
                    "3gp",
                    "3g2",
                    "m4v",
                    "mpg",
                    "mpeg",
                    "m2v",
                ],
                icon: <PlayBtn color="#b727ff" size={defaultIconSize} />,
            },
            audio: {
                extensions: [
                    "mp3",
                    "wav",
                    "ogg",
                    "flac",
                    "m4a",
                    "aac",
                    "wma",
                    "aiff",
                    "alac",
                    "pcm",
                    "dsd",
                ],
                icon: <PlayBtn color="#b727ff" size={defaultIconSize} />,
            },
            subtitle: {
                extensions: ["srt", "vtt", "sub", "sbv", "ssa"],
                icon: <SrtFileIcon size={defaultIconSize} />,
            },
            html: {
                extensions: ["html", "htm"],
                icon: <HTMLFileIcon size={defaultIconSize} />,
            },
            document: {
                extensions: [
                    "pdf",
                    "epub",
                    "mobi",
                    "azw",
                    "azw3",
                    "azw4",
                    "azw8",
                    "prc",
                    "pdb",
                    "fb2",
                    "lit",
                    "lrf",
                ],
                icon: <PDFFileIcon size={defaultIconSize + 2} />,
            },
            compressed: {
                extensions: [
                    "zip",
                    "rar",
                    "7z",
                    "tar",
                    "gz",
                    "bz2",
                    "xz",
                    "lz",
                ],
                icon: (
                    <FileEarmarkZipFill
                        className="text-lime-300"
                        size={defaultIconSize}
                    />
                ),
            },
        };

        const fileTypeList = Object.keys(extensionMap);
        for (let i = 0; i < fileTypeList.length; i++) {
            const key = fileTypeList[i];
            if (extensionMap[key].extensions.includes(fileExtension)) {
                return extensionMap[key].icon;
            }
        }
        return <DefaultFileIcon size={defaultIconSize} />;
    };
    return (
        <div className="flex items-center gap-2">
            <span>{renderFileIcon()}</span>
            <span className="text-gray-300">{name}</span>
        </div>
    );
}

export default SingleFile;
