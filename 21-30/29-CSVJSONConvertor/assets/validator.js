// check if the content is a valid csv
export function handleValidatingCSV(array, cols, rows) {
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

// check if the content is a valid JSON
export function handleCheckJSONValidity(json) {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
