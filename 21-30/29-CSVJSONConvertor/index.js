import { handleConvertToJSON } from "./assets/jsonConvertor";

const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const resultContent = document.querySelector(".resultContent");

toJSONButton.addEventListener("click", handleConvertToJSON);
inputContent.addEventListener("change", handleInputContentChange);

function handleInputContentChange(e) {
  content = e.target.value;
}

/**
 * 1-  how to upload and read the content
 * 2-  how to read a content from a path
 * 3-  convert to csv
 * 4-  download
 * 5-  clear the contents
 * 6-  copy
 * 7-  ui
 * 8-  toast
 * 9-  separate functions to to be cleaner
 * 10- propper validation checking
 */
