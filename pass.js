const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const lengthInput = document.getElementById("length");
const rangeInput = document.getElementById("range");

// Synchronize slider and number input
rangeInput.addEventListener("input", () => {
  lengthInput.value = rangeInput.value;
});
lengthInput.addEventListener("input", () => {
  rangeInput.value = lengthInput.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied!");
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  const selected = [];

  if (uppercase.checked) selected.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowercase.checked) selected.push("abcdefghijklmnopqrstuvwxyz");
  if (numbers.checked) selected.push("0123456789");
  if (symbols.checked) selected.push("!@#$%^&*()_+-=[]{}|;:,.<>?/");

  if (selected.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let allChars = selected.join('');
  let password = "";

  for (let i = 0; i < length; i++) {
    const randChar = allChars[Math.floor(Math.random() * allChars.length)];
    password += randChar;
  }

  passwordField.value = password;
});