const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "`~!@#$%^&*()-_=+[{]}|;:',<.>/?";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordBox.value = password;
}

function openModal() {
  document.getElementById("accountModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("accountModal").style.display = "none";
}

function copyPassword() {
  openModal();
}

function submitAccount() {
  const account = document.getElementById("accountInput").value;
  if (account) {
    navigator.clipboard
      .writeText(passwordBox.value)
      .then(() => {
        const alertDiv = document.createElement("div");
        alertDiv.innerHTML = `Password copied for <b>${account}</b> to clipboard!`;
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "10px";
        alertDiv.style.right = "10px";
        alertDiv.style.backgroundColor = "#019f55";
        alertDiv.style.color = "white";
        alertDiv.style.padding = "10px 20px";
        alertDiv.style.borderRadius = "5px";
        alertDiv.style.zIndex = "1000";
        alertContainer.appendChild(alertDiv);

        setTimeout(() => {
          alertContainer.removeChild(alertDiv);
        }, 3000); // Display alert for 3 seconds

        closeModal(); // Close the modal
      })
      .catch((err) => alert("Failed to copy password: " + err));
  } else {
    alert("Please specify the account.");
  }
}
