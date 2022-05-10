
//Define Global Variables

let navBarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let navBar = document.querySelector("navbar__menu");

// build the nav

function navBuilder() {
  sections.forEach(section => {
    const itemList = document.createElement("li");
    itemList.insertAdjacentHTML("afterbegin", `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);

    navBarList.appendChild(itemList);
  });
}
navBuilder();

// Add class 'active' to section when near top of viewport
const addActive = function (conditional, section) {
  if (conditional) {
    section.classList.add("your-active-class");
    //change style of active section
    section.style.cssText = "background-color:indigo;";
  };
};
const removeActive = function (section) {
  section.classList.remove("your-active-class");
  //remove box shadow from inactive section 
  section.style.cssText = "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
//Calculate offset of the section.
const offset = function (section) {
  return Math.floor(section.getBoundingClientRect().top);
};

const sectionActivation = function () {
  sections.forEach(section => {
    const elementOffset = offset(section);

    inviewport = () => elementOffset < 380 && elementOffset >= -350;

    removeActive(section);
    addActive(inviewport(), section);
  });
};
window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event
const scrollBehavior = () => {
  //Select all the links
  const links = document.querySelectorAll("navbar__menu a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        section[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
};
scrollBehavior();
// Scroll to section on link click
window.addEventListener("scroll", (e) => {
  addActive();
});
