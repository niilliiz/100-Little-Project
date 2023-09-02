const inputContent = document.querySelector(".fileContent");
const toJSONButton = document.querySelector(".toJSONButton");
const resultContent = document.querySelector(".resultContent");

toJSONButton.addEventListener("click", handleConvertToJSON);
inputContent.addEventListener("change", handleInputContentChange);

const result = [];
let content = "";

let isValid = false;

function handleInputContentChange(e) {
  content = e.target.value;
}

function handleConvertToJSON() {
  let separatedContent = content.split("\n");
  const [cols, ...rows] = separatedContent;

  const isValid = handleValidatingContent(separatedContent, cols, rows);

  if (isValid) {
    const array = handleGenerateArray(cols, rows);
    console.table(JSON.stringify(array));
    resultContent.textContent = JSON.stringify(array);
  } else {
  }

  function createJSON(array) {
    const content = "";

    array.forEach((row) => {
      console.log(row.toString());
    });
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
      // const colValue = handleFormatColValue(colsArray[index]);
      // const rowValue = handleFormatColValue(value);

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

function handleValidatingContent(array, cols, rows) {
  const isNotEmpty = handleValidateEmptyItem(array);
  const validCols = handleValidateEmptyItem(cols.split(","));
  const validRows = handleValidateRows(cols.split(",").length, rows);

  if (!isNotEmpty) {
    console.log(
      "is not valid bcuz there is empy line in middle or at the end of the content"
    );
  } else if (!validCols) {
    console.log(
      "is not valid bcuz there is empy item in cols. Entering cols is a must"
    );
  } else if (!validRows) {
    console.log("is not valid bcuz there must be value for each col");
  }

  return isNotEmpty && validCols && validRows;
}

function handleValidateEmptyItem(array) {
  return array.every((item) => Boolean(item));
}

function handleValidateRows(length, array) {
  return array.every((item) => item.split(",").length === length);
}
