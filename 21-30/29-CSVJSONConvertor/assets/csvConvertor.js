import { handleCheckJSONValidity } from "./validator.js";

const resultContent = document.querySelector(".resultContent");

function handleGenerateCSV(json) {
  const parsed = JSON.parse(json);

  let col = "";
  const rows = [];

  Object.values(parsed).map((value) => {
    Object.keys(value).map((key, index) => {
      if (!col.includes(key)) {
        const separator = index ? "," : "";
        col = col.concat(separator, key);
      }
    });

    rows.push(Object.values(value).join(","));
  });

  const result = [];
  result.push(col, ...rows);

  let content = "";
  result.forEach((item, index) => {
    const separator = index !== result.length - 1 ? "\r\n" : "";

    content = content.concat(item, separator);
  });

  console.log(content);

  resultContent.textContent = content;
}

export default function handleConvertToCSV(json) {
  const isValid = handleCheckJSONValidity(json);
  if (isValid) {
    handleGenerateCSV(json);
  } else {
    console.log("toast: not valid json");
  }
}
