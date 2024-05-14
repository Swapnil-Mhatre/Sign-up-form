const password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#Confirm_password");
const paraCont = document.querySelector(".left-el p");

password.addEventListener("blur", function () {
  if (password.value !== confirmPassword.value) {
    password.setAttribute("style", "border: 1px solid red;");
    confirmPassword.setAttribute("style", "border: 1px solid red;");
    paraCont.textContent = "* Passwords do not match";
  } else {
    password.setAttribute("style", "border: 1px solid #E5E7EB;");
    confirmPassword.setAttribute("style", "border: 1px solid #E5E7EB;");
    paraCont.textContent = "";
  }
});

confirmPassword.addEventListener("blur", function () {
  if (password.value !== confirmPassword.value) {
    password.setAttribute("style", "border: 1px solid red;");
    confirmPassword.setAttribute("style", "border: 1px solid red;");
    paraCont.textContent = "* Passwords do not match";
  } else {
    password.setAttribute("style", "border: 1px solid #E5E7EB;");
    confirmPassword.setAttribute("style", "border: 1px solid #E5E7EB;");
    paraCont.textContent = "";
  }
});
