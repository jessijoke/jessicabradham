const menuButton = document.querySelector("#bubbleMenu");
const navBar = document.querySelector("#navContainer");


menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
  });