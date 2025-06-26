window.onload = function () {

 window.subscribe = function() {
    const email = document.getElementById('emailInput').value;
    if (email) {
      alert("Thank you for subscribing: " + email);
    } else {
      alert("Please enter a valid email.");
    }
  };

  window.toggleFaq = function(anchor) {
    const answer = anchor.nextElementSibling;
    answer.classList.toggle('show');
  };
};
 let count = 1;
    const countSpan = document.getElementById('count');

    function increment() {
      count++;
      countSpan.textContent = count;
    }

    function decrement() {
      if (count > 1) {
        count--;
        countSpan.textContent = count;
      }
    }

    
const loginLink = document.getElementById("loginLink");
 const showSignup = document.getElementById("showSignup");
 const loginModal = document.getElementById("loginModal");
 const signupModal = document.getElementById("signupModal");
 const closeLogin = document.getElementById("closeLogin");
 const closeSignup = document.getElementById("closeSignup");
 const goToLogin =document.getElementById("goToLogin");

 loginLink.onclick = () => loginModal.style.display = "flex";

 showSignup.onclick = (e) => {
   e.preventDefault();
   loginModal.style.display = "none";
   signupModal.style.display = "flex";
 };

 closeLogin.onclick = () => loginModal.style.display = "none";
 closeSignup.onclick = () => signupModal.style.display = "none";


 // Auto open login modal if redirected with message
 if (window.location.href.includes("success") || window.location.href.includes("error")) {
   loginModal.style.display = "flex";
 }


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `email=${encodeURIComponent(email)}`
    })
    .then(response => {
      if (response.ok) {
        alert("✅ Subscription successful!");
        emailInput.value = "";
      } else {
        alert("❌ Subscription failed.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("⚠️ Something went wrong.");
    });
  });
});