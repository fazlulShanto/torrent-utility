import MyparseTorrent from "../lib/TorrentReader";
import { formatFileSize } from "./generic.utility";
const __path_separator__ = `/`;

const getFileExtension = (fileName) => {
    if (typeof fileName != "string") {
        return undefined;
    }
    const res = fileName.split(".").pop();
    return res;
};

// {
//     path: 'digital-marketing-guide\\28 - WordPress Masterclass\\076 Social Proof.mp4',
//     name: '076 Social Proof.mp4',
//     length: 382770526,
//     offset: 0
//   }

export const fileTypeFilter = (fileList = []) => {
    if (!Array.isArray(fileList)) {
        return undefined;
    }
    let ext;
    const result = {};
    result.total = fileList.length;
    result.types = {};

    fileList.forEach((v) => {
        ext = getFileExtension(v.name);
        if (result.types[ext] === undefined) {
            result.types[ext] = 1;
        } else {
            result.types[ext]++;
        }
    });
    return result;
};

export const sortFilesByKeys = function (data, level) {
    if (typeof data == "object" && data != null) {
        if (Array.isArray(data)) {
            data.sort((file1, file2) =>
                file1.name.toLowerCase().localeCompare(file2.name.toLowerCase())
            );
            return data;
        }
        const sortedObj = Object.keys(data)
            .sort()
            .reduce((prev, current) => {
                const value = data[current];
                prev[current] = sortFilesByKeys(value, level + 1);
                return prev;
            }, {});
        sortedObj.level = level;
        return sortedObj;
    }
    return data;
};
/**
 *
 * @param {parsed torrent Data object} data
 * @returns sorted list of the data
 */
export const generateFolderTree = function (data) {
    // console.log(data);
    const folderTree = {};
    for (const fileData of data) {
        const { path: filePath, length: bytes, name } = fileData;

        const pathList = filePath.split(__path_separator__);

        const fileName = pathList.pop();

        const fileInfo = {
            name: fileName,
            bytes: bytes,
            extension: getFileExtension(fileName),
            size: formatFileSize(bytes),
        };
        let currentLevel = folderTree;
        for (const folder of pathList) {
            if (!currentLevel[folder]) {
                currentLevel[folder] = {};
            }
            currentLevel = currentLevel[folder];
        }

        if (currentLevel?.files) {
            currentLevel.files.push(fileInfo);
        } else {
            currentLevel.files = [fileInfo];
        }
    }
    const sortedData = sortFilesByKeys(folderTree, 1);
    // console.log('i am here');
    return sortedData;
    // return folderTree;
};

export const readFromArrayBuffer = async (arryBuf) => {
    try {
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
        const rawData = await MyparseTorrent(arryBuf);
        if (!rawData) {
            return undefined;
        }
        const {
            files,
            name,
            private: status,
            length,
            created,
            createdBy,
            announce,
        } = rawData;

        const refinedData = fileTypeFilter(files);

        const folderTree = generateFolderTree(files);

        return {
            files,
            name,
            status,
            created,
            createdBy,
            refinedData,
            announce,
            length,
            size: formatFileSize(length),
            folderTree,
        };
    } catch (error) {
        return undefined;
    }
};
