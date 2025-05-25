 const toggleBtn = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });