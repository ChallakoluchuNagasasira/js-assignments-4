// Task 1: Live character counter and instant password validation
const usernameInput = document.getElementById("username");
const charCount = document.getElementById("char-count");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

usernameInput.addEventListener("input", (e) => {
  const length = e.target.value.length;
  charCount.textContent = `${length} / 12`;
  charCount.style.color = length > 12 ? "#d92d20" : "";
});

passwordInput.addEventListener("input", (e) => {
  passwordError.textContent = e.target.value.length < 6
    ? "Password must be at least 6 characters"
    : "";
});

// Task 2: Update selected plan and guard subscription form
const planSelect = document.getElementById("plan-select");
const planDetails = document.getElementById("plan-details");
const termsCheck = document.getElementById("terms-check");
const formError = document.getElementById("form-error");

const planInfo = {
  free: "Selected: Free Plan ($0)",
  pro: "Selected: Pro Plan ($15/mo)",
  enterprise: "Selected: Enterprise Plan ($50/mo)"
};

planSelect.addEventListener("change", (e) => {
  planDetails.textContent = planInfo[e.target.value];
});

document.getElementById("sub-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!termsCheck.checked) {
    formError.textContent = "You must accept the terms to proceed";
    return;
  }
  formError.textContent = "";
  alert("Subscription successful!");
});

// Task 3: Registration validation and dynamic profile card
const registerForm = document.getElementById("register-form");
const fullNameInput = document.getElementById("full-name");
const passInput = document.getElementById("pass");
const confirmPassInput = document.getElementById("confirm-pass");
const roleSelect = document.getElementById("role-select");
const nameError = document.getElementById("name-err");
const passError = document.getElementById("pass-err");
const roleError = document.getElementById("role-err");
const profileDisplay = document.getElementById("profile-display");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear old errors before validating again.
  nameError.textContent = "";
  passError.textContent = "";
  roleError.textContent = "";

  let isValid = true;
  const name = fullNameInput.value.trim();
  const password = passInput.value;
  const confirmPassword = confirmPassInput.value;
  const role = roleSelect.value;

  if (!name) {
    nameError.textContent = "Name is required";
    isValid = false;
  }
  if (password !== confirmPassword) {
    passError.textContent = "Passwords do not match";
    isValid = false;
  }
  if (!role) {
    roleError.textContent = "Please select a role";
    isValid = false;
  }

  if (!isValid) return;

  const card = document.createElement("article");
  card.className = "profile-card";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = name.charAt(0).toUpperCase();

  const heading = document.createElement("h4");
  heading.textContent = name;

  const roleText = document.createElement("p");
  roleText.textContent = role;

  card.append(avatar, heading, roleText);
  profileDisplay.replaceChildren(card);
  e.target.reset();
});
