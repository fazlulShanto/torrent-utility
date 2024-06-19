import { useState } from "react";
import { copyClipboard } from "../utils/generic.utility";
import { CircleCheckBig, Copy } from "lucide-react";
import { DownloadCloudIcon } from "lucide-react";

const CopyBlock = ({ label, value, downloadable = false }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyLink = () => {
    copyClipboard(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };
  const renderCopyLinkIcon = () => {
    return (
      <div className="cursor-pointer h-full" onClick={() => handleCopyLink()}>
        {isCopied ? (
          <CircleCheckBig className="text-green-500 stroke-2" height={20} />
        ) : (
          <Copy className="text-cyan-300" height={20} />
        )}
      </div>
    );
  };
  const renderDownloadableIcon = () => {
    if (!downloadable) {
      return null;
    }
    return (
      <a
        rel="noreferrer"
        className="cursor-pointer"
        href={value}
        target="_blank"
      >
        <DownloadCloudIcon className="text-cyan-300" height={20} />
      </a>
    );
  };

  const renderInputElement = (text) => {
    if (text?.length > 100) {
      return (
        <textarea
          rows={5}
          disabled
          className="bg-gray-800 flex-grow cursor-disabled border-0 border-r  border-gray-700 py-2 pl-3 rounded-l-md text-sm text-gray-300"
          type="text"
          value={value}
        />
      );
    }
    return (
      <input
        disabled
        className="bg-gray-800 flex-grow cursor-disabled border-0 border-r  border-gray-700 py-2 pl-3  rounded-l-md text-sm text-gray-300"
        type="text"
        value={value}
      />
    );
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-md flex font-medium text-gray-200 leading-5">
        {label}
      </p>
      <div className="flex items-center border-gray-800 border rounded-md">
        {renderInputElement(value)}
        <div className="px-3 gap-2 flex">
          {renderCopyLinkIcon()}
          {renderDownloadableIcon()}
        </div>
      </div>
    </div>
  );
};

export default CopyBlock;
