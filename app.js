const form = document.getElementById("email-form");
const inputField = document.getElementById("email-input");
const button = document.getElementById("email-btn");
const error = document.querySelector(".error-message");

const validate = () => {
  if (inputField.value.trim() === "") {
    inputField.classList.add("invalid");
    error.textContent = "*Please enter your email.";
    return false;
  }
  if (!validateEmail(inputField.value)) {
    inputField.classList.add("invalid");
    error.textContent = "*Please enter a valid email address.";
    return false;
  } else {
    inputField.classList.remove("invalid");
    error.textContent = "";
  }
  return true;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

button.addEventListener("click", (e) => {
  e.preventDefault();
	validate();  
});
