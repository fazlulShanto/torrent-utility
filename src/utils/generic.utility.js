export function formatFileSize(bytes, decimalPoint = 2) {
  // if (bytes === 0) return '0 Bytes';
  // const k = 1024;
  // const dm = decimalPoint || 2;
  // const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  // const i = Math.floor(Math.log(bytes) / Math.log(k));
  // return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  const units = ["B", "KB", "MB", "GB", "TB"];
  let sizeBytes = bytes;
  let i = 0;
  while (sizeBytes >= 1024 && i < units.length - 1) {
    sizeBytes /= 1024;
    i++;
  }
  return `${sizeBytes.toFixed(2)} ${units[i]}`;
}
export const copyClipboard = async (text) => {
  if (navigator && !!navigator.clipboard && !!window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  } else {
    let input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand("copy");
    document.body.removeChild(input);
    return result;
  }
};

export const isValidJson = (text = "") => {
  try {
    text = atob(text);
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    return false;
  }
};

export const decodeText = (text = "") => {
  try {
    const result = atob(text);
    return result;
  } catch (error) {
    return text;
  }
};
