// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDmfIrKEPpLxR6C_YdTXrX2l8Ed92wh908",
  authDomain: "register-e46d6.firebaseapp.com",
  projectId: "register-e46d6",
  storageBucket: "register-e46d6.appspot.com", // fixed domain
  messagingSenderId: "616103627858",
  appId: "1:616103627858:web:1afd357b4454b14c9de38b"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Form
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// Register Form (only works if this JS is loaded in register.html too)
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const captcha = document.getElementById('captchaInput').value.trim();

  if (captcha !== "7") {
    alert("Captcha is incorrect. Please try again.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
});
