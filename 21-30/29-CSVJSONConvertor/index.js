import handleConvertToJSON from "./assets/jsonConvertor.js";
import handleConvertToCSV from "./assets/csvConvertor.js";

const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const toCSVButton = document.querySelector(".toCSVButton");
const downloadButton = document.querySelector(".downloadButton");
const uploadFileInput = document.querySelector(".uploadFileInput");
const resultContent = document.querySelector(".resultContent");
const clearButton = document.querySelector(".clearButton");
const copyButton = document.querySelector(".copyButton");

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
clearButton.addEventListener("click", handleReset);
copyButton.addEventListener("click", handleCopyResult);
uploadFileInput.addEventListener("change", handleUploadingFile);
inputContent.addEventListener("change", handleInputChange);

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

function handleReset() {
  resultContent.textContent = "";
  inputContent.value = "";
  handleContentChange("");
}

function handleCopyResult() {
  const text = resultContent.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text is coppied successfully");
    })
    .catch((err) => console.log("unabled to copy"));
}

function handleUploadingFile(e) {
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
}

function handleInputChange(e) {
  handleContentChange(e.target.value);
}

function handleContentChange(value) {
  content = value;
}
