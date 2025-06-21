function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  if (field.type === "password") {
    field.type = "text";
    icon.textContent = "🙈";
  } else {
    field.type = "password";
    icon.textContent = "👁️";
  }
}

function checkPasswordMatch() {
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  const message = document.getElementById("passwordMessage");

  if (!confirm) {
    message.textContent = "";
    return;
  }

  if (password === confirm) {
    message.textContent = "Passwords match!";
    message.classList.add("match");
  } else {
    message.textContent = "Passwords do not match!";
    message.classList.remove("match");
  }
}
function togglePassword(fieldId, icon) {
  const input = document.getElementById(fieldId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.textContent = isPassword ? "🙈" : "👁️"; // Optional: change icon
}
