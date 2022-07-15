let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;

    //
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

let getRood = document.getElementById("rood");
console.log(getRood);

getRood.addEventListener("click", function () {
  console.log(getRood);
  getBody = document.querySelector("body");
  getBody.style.background = "red";
  toggleNav();
});

let getGeel = document.getElementById("geel");
console.log(getGeel);

getGeel.addEventListener("click", function () {
  console.log(getGeel);
  getBody = document.querySelector("body");
  getBody.style.background = "yellow";
  toggleNav();
});

let getBlauw = document.getElementById("blauw");
console.log(getBlauw);

getBlauw.addEventListener("click", function () {
  console.log(getBlauw);
  getBody = document.querySelector("body");
  getBody.style.background = "blue";
  toggleNav();
});

let getGroen = document.getElementById("groen");
console.log(getGroen);

getGroen.addEventListener("click", function () {
  console.log(getGroen);
  getBody = document.querySelector("body");
  getBody.style.background = "green";
  toggleNav();
});

let getHome = document.getElementById("home");
console.log(getHome);

getHome.addEventListener("click", function () {
  console.log(getHome);
  getBody = document.querySelector("body");
  getBody.style.background = "lightgrey";
  toggleNav();
});
