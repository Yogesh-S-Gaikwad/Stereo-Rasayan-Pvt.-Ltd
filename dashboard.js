document.addEventListener("DOMContentLoaded", function () {
    const addProductBtn = document.querySelector(".addProductBtn");
    const addProductDiv = document.querySelector(".addProduct");

    // Initially hide the form
    addProductDiv.style.display = "none";

    // Toggle form visibility on button click
    addProductBtn.addEventListener("click", function () {
      if (addProductDiv.style.display === "none") {
        addProductDiv.style.display = "block";
      } else {
        addProductDiv.style.display = "none";
      }
    });
  });