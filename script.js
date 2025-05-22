document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('burger');
  const navList = document.getElementById('nav-list');

  if (burger && navList) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('nav--active');
    });
  }
});
