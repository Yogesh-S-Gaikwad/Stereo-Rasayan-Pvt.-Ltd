 const toggleBtn = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggleBtn.addEventListener('click ', () => {
    mobileNav.classList.toggle('active');
  });

  function subscribe() {
      const email = document.getElementById('emailInput').value;
      if (email) {
        alert("Thank you for subscribing: " + email);
      } else {
        alert("Please enter a valid email.");
      }
    }