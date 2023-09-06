import { handleValidatingCSV } from "./validator.js";

const resultContent = document.querySelector(".resultContent");

export default function handleConvertToJSON(content) {
  let separatedContent = content.split("\n");
  const [cols, ...rows] = separatedContent;

  const isValid = handleValidatingCSV(separatedContent, cols, rows);

  if (isValid) {
    const array = handleGenerateArray(cols, rows);
    resultContent.textContent = JSON.stringify(array);
  } else {
  }
}

function handleGenerateArray(cols, rows) {
  const colsArray = cols.trim().split(",");
  return rows.map((row) => {
    const rowArray = row.split(",");
    const array = {};

    rowArray.map((value, index) => {
      const trimed = value.trim();
      const removedQuotationsRowItem = handleRemoveQuatations(trimed);
      const removedQuotationsColItem = handleRemoveQuatations(colsArray[index]);

      array[removedQuotationsColItem] = removedQuotationsRowItem;
    });

    return array;
  });
}

function handleRemoveQuatations(text) {
  let result = text;
  if (result.startsWith('"') || result.endsWith('"')) {
    if (result.startsWith('"')) {
      result = result.substring(1, result.length);
    }

    if (result.endsWith('"')) {
      result = result.substring(0, result.length - 1);
    }
  }

  return result;
}
