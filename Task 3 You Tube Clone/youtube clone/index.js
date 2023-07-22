const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
function showPopup() {
    var overlay = document.getElementById("popupOverlay");
    overlay.style.display = "block";
  }
  
  function hidePopup() {
    var overlay = document.getElementById("popupOverlay");
    overlay.style.display = "none";
  }
  