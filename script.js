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