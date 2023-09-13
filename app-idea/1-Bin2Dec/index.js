const input = document.querySelector(".input");
const button = document.querySelector(".button");
const helperText = document.querySelector(".helperText");

button.addEventListener("click", handleConvert);

input.addEventListener("change", (e) => handleChangInput(e));

let value = "";

function handleChangInput(e) {
  handleHelperText("clear");

  const { value: inputValue } = e.target;
  value = inputValue;
}

function handleConvert() {
  const isValid = handleValidateField(value);

  if (isValid) {
    const unit = value.length - 1;

    const result = [...value].reduce((acc, curr, index) => {
      acc += curr * Math.pow(2, unit - index);
      return acc;
    }, 0);

    handleHelperText("create", `Decimal Number is ${result} :))`, "success");
  }
}

function handleValidateField(value) {
  let binaryDigitRegex = /\b[01]+\b/g;
  let mustBeBinaryDigit = value.match(binaryDigitRegex) || [];

  if (mustBeBinaryDigit.length === 0) {
    input.value = "";
    handleHelperText("create");
    return false;
  }

  let limittingRegex = /\b[01]{8,}\b/g;
  let mustBeUpTo8Digit = value.match(limittingRegex) || [];

  if (mustBeUpTo8Digit.length === 0) {
    handleHelperText("create", "Must be up to 8 digit!");
    return false;
  }

  let beginningDigit = /^1[01]{8,}\b/g;
  let mustBeginWitth1 = value.match(beginningDigit) || [];

  if (mustBeginWitth1.length === 0) {
    handleHelperText("create", "Must begins with 1!");
    input.value = "";
    return false;
  }

  return true;
}

function handleHelperText(
  type = "",
  text = "Only 0 or 1 are allowed!",
  status = "warning"
) {
  helperText.textContent = "";

  if (type === "create") {
    helperText.textContent = text;
  }

  if (status === "success") {
    helperText.classList.add("success");
    helperText.classList.remove("warning");
  } else if (status === "warning") {
    helperText.classList.remove("success");
    helperText.classList.add("warning");
  }
}
