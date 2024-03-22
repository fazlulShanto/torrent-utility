import React from "react";
import SingleFolder from "./SingleFolder";

// const addPadding=(num,str)=>'####'.repeat(num).concat(str);
const addPadding = (num, str) => str;

const showSingleFolder = (folderName, fileList, folders, level) => {
    const rt = addPadding(level - 1, folderName);
    const lst = [];
    fileList.forEach((v) => {
        lst.push(addPadding(level, "📄" + v));
    });
    const finalResult = {
        level: level,
        title: rt,
        fileList: lst,
        jsx: (
            <div>
                <h4 className="text-3xl"> {rt} </h4>
                {lst.map((v) => (
                    <p key={Math.random()}>{v}</p>
                ))}
            </div>
        ),
    };
    // return [`level =${level}`,rt,lst.join('\n')] ;
    return finalResult;
};

const createFolderTree = (tree) => {
    let result = [];
    const viewFolderTree = (treeData) => {
        if (Array.isArray(treeData) || typeof treeData == "string") {
            return treeData;
        }
        const keys = Object.keys(treeData);
        // console.log(keys);
        for (let i of keys) {
            if (i == "level") {
                continue;
            }
            const child = Object.keys(treeData[i]);
            // console.log(child);
            viewFolderTree(treeData[i]);
            const ltt = (
                <SingleFolder name={i} list={child} level={treeData["level"]} />
            );
            // console.log(child);
            result.push(ltt);
        }
    };
    viewFolderTree(tree);

    return result;
};

const realMain = (data, parent, trueLevel = 0, fr) => {
    let folders = [],
        files = [],
        rootName = parent;
    const keys = Object.keys(data);
    for (let key of keys) {
        if (key == "files") {
            files = data[key];
        } else if (key != "level") {
            realMain(data[key], key, data["level"], fr);
            folders.push(key);
        }
    }

    // console.log('level->',trueLevel);
    // console.log(`folder name : ${rootName}  | files = ${data['files']} | folders | ${folders}`);
    fr.push(showSingleFolder(rootName, files, folders, data["level"]));
};

function TorretnFileTree({ data }) {
    if (!data) {
        return null;
    }

    const { folderTree, name, length } = data;
    /*[
        "files",
        "name",
        "status",
        "created",
        "createdBy",
        "refinedData",
        "announce",
        "length",
        "size",
        "folderTree"
    ]
    */
    const isFolder = folderTree[name] ? true : false;

    return (
        <div className="">
            <h2 className="border text-xl border-gray-400 shadow-sm border-x-0 border-b text-center rounded-md">
                Name : {name}
            </h2>
            {isFolder ? (
                <SingleFolder name={name} data={folderTree[name]} level={0} />
            ) : (
                <div>
                    <p>Size : {data.size}</p>
                </div>
            )}
        </div>
    );
}

export default TorretnFileTree;
