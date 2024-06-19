import { useState } from "react";
import CopyBlock from "../components/CopyBlock";
import _ from "lodash";
import {
  isValidJson as checkValidJson,
  decodeText,
} from "../utils/generic.utility";

export default function Decoder() {
  const [encodedText, setEncodedText] = useState("");
  const [isValidJson, setIsValidJson] = useState(false);
  const [jsonData, setJsonData] = useState("");

  const handleDecodedTextChange = (text = "") => {
    setEncodedText(text);
    const isJson = checkValidJson(text);

    if (isJson) {
      setIsValidJson(true);
      setJsonData(isJson);
    } else {
      setIsValidJson(false);
      setJsonData("");
    }
  };

  const renderValidJsonBlocks = (jsonValue) => {
    return (
      <>
        {Object.keys(jsonValue).map((v, i) => {
          switch (v) {
            case "userinput": {
              //   return <CopyBlock key={v + i} label={v} value={jsonData[v]} />;
              return renderValidJsonBlocks(jsonValue[v]);
            }
            case "mediaInfo": {
              return (
                <CopyBlock
                  key={v + i}
                  label={_.startCase(v)}
                  value={decodeText(jsonData[v])}
                />
              );
            }

            default:
              return (
                <CopyBlock
                  key={v + i}
                  downloadable={["metaFileDownloadLink"].includes(v)}
                  label={_.startCase(v)}
                  value={jsonData[v]}
                />
              );
          }
        })}
      </>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex flex-col gap-2">
        <p>Enter Decoded Text Here:</p>
        <textarea
          rows={5}
          onChange={(e) => handleDecodedTextChange(e.currentTarget.value)}
          className="bg-gray-800 flex-grow cursor-disabled border-0 focus:border-0 focus:outline-none w-full focus:ring-1 focus:ring-[#A855F7] border-gray-700 py-2 pl-3 focus:rounded-md rounded-l-md text-sm text-gray-300"
          type="text"
          value={encodedText}
        />
      </div>

      <div className="flex flex-col flex-grow p-4 border border-gray-500 rounded-md mx-3 overflow-y-auto">
        {isValidJson ? (
          <div className="flex flex-col gap-2">
            {renderValidJsonBlocks(jsonData)}
          </div>
        ) : (
          <CopyBlock label={"Decoder Block"} value={decodeText(encodedText)} />
        )}
      </div>
    </div>
  );
}
