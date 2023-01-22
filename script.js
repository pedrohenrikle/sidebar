let sidebarIcon = document.getElementById("btn");
let sidebar = document.getElementById("sidebar");
let logo = document.querySelector(".vetshop");
let divlogo = document.querySelector("#logo");
let paragraph = document.querySelectorAll(".linkp");
let searchBox = document.querySelector("#search-box");
let user = document.querySelector("#user");
let count = 0;
let userimg = document.querySelector(".userimg");

function openCloseAside() {
  if (count == 1) {
    sidebar.classList.toggle("inactive");
    logo.src = "./img/logo.svg";
    paragraph.forEach(function (paragraph) {
      paragraph.style.fontSize = "15px";
    });
    searchBox.classList.toggle("inactive");
    sidebarIcon.style.marginLeft = "119px";
    user.src = "./img/photo.jpg";
    user.classList.toggle("inactive");

    count = 0;
  } else if (count == 0) {
    sidebar.classList.toggle("inactive");
    sidebarIcon.style.marginLeft = "0px";
    logo.src = "";
    divlogo.classList.toggle("inactive");
    paragraph.forEach(function (paragraph) {
      paragraph.style.fontSize = "0px";
    });
    searchBox.classList.toggle("inactive");
    user.src = "";
    user.classList.toggle("inactive");

    count = 1;
  }
}
