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
