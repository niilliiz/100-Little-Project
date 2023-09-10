import handleConvertToJSON from "./assets/jsonConvertor.js";
import handleConvertToCSV from "./assets/csvConvertor.js";

const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const toCSVButton = document.querySelector(".toCSVButton");
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

downloadButton.addEventListener("click", () => {
  handleDownloadFile();
});

function handleDownloadFile() {}

uploadFileInput.addEventListener("change", (e) => {
  handleInputContentChange("");
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      handleInputContentChange(reader.result);
      inputContent.value = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
});

inputContent.addEventListener("change", (e) =>
  handleInputContentChange(e.target.value)
);

function handleInputContentChange(value) {
  content = value;
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
