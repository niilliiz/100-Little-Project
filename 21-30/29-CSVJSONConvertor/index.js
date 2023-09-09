import handleConvertToJSON from "./assets/jsonConvertor.js";
import handleConvertToCSV from "./assets/csvConvertor.js";
import { handleUploadFile, handleDownloadFile } from "./assets/fileHandlers.js";

const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const toCSVButton = document.querySelector(".toCSVButton");
const uploadButton = document.querySelector(".uploadFileButton");
const downloadButton = document.querySelector(".downloadButton");
const uploadFileInput = document.querySelector(".uploadFileInput");

let content = "";

toJSONButton.addEventListener("click", () => {
  if (content) {
    handleConvertToJSON(content);
  }
});

toCSVButton.addEventListener("click", () => {
  if (content) {
    handleConvertToCSV(content);
  }
});

uploadButton.addEventListener("click", () => {
  uploadFileInput.click();
});

downloadButton.addEventListener("click", () => {
  handleDownloadFile();
});

function handleDownloadFile() {}

const reader = new FileReader();

reader.addEventListener(
  "load",
  () => {
    content = reader.result;
    inputContent.value = reader.result;
  },
  false
);

uploadFileInput.addEventListener("click", (e) => {
  const file = e.target.files[0];

  if (file) {
    reader.readAsText(file);
  }
});

// console.dir(inputContent);

inputContent.addEventListener("change", handleInputContentChange);

function handleInputContentChange(e) {
  console.log("change", e.target.value);
  // content = e.target.value;
}

// https://jsonlint.com/
// https://csvjson.com/csv2json
// https://gpaiva00.github.io/json-csv/

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
