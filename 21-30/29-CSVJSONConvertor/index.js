import handleConvertToJSON from "./assets/jsonConvertor.js";
import handleConvertToCSV from "./assets/csvConvertor.js";

const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const toCSVButton = document.querySelector(".toCSVButton");
const downloadButton = document.querySelector(".downloadButton");
const uploadFileInput = document.querySelector(".uploadFileInput");
const resultContent = document.querySelector(".resultContent");
const clearButton = document.querySelector(".clearButton");

let content = "";
let fileType = "";

toJSONButton.addEventListener("click", () => {
  if (content) {
    fileType = "json";
    handleConvertToJSON(content);
  }
});

toCSVButton.addEventListener("click", () => {
  if (content) {
    fileType = "csv";
    handleConvertToCSV(content);
  }
});

downloadButton.addEventListener("click", handleDownloadFile);

function handleDownloadFile() {
  const result = resultContent.textContent;
  const fileName = `${fileType}.${fileType}`;

  var aElem = document.createElement("a");
  aElem.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(result)
  );
  aElem.setAttribute("download", fileName);
  aElem.style.display = "none";

  document.body.appendChild(aElem);
  aElem.click();
  document.body.removeChild(aElem);
}

uploadFileInput.addEventListener("change", (e) => {
  handleReset();
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      handleContentChange(reader.result);
      inputContent.value = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
});

inputContent.addEventListener("change", (e) =>
  handleContentChange(e.target.value)
);

clearButton.addEventListener("click", handleReset);

function handleContentChange(value) {
  content = value;
}

function handleReset() {
  resultContent.textContent = "";
  inputContent.value = "";
  handleContentChange("");
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
