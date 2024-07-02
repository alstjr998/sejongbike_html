const toggleButton = document.querySelector(".toggleButton");
const menu = document.querySelector(".menu");
toggleButton.onclick = function(){
  menu.classList.toggle("active");
}