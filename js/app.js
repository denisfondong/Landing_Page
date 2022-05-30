//Define Global Variables
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

// build the nav

function navBuilder() {
  for (let section of sections) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">
	${section.getAttribute("data-nav")}</a>`;
    navbarList.appendChild(newListItem);
  }
}
navBuilder();

// Add class 'active' to section when near top of viewport
function inViewPort() {
  for (let section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top < 200 && box.bottom >400) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
        //change background color for active class
        section.style.backgroundColor = "indigo";
      }
    } else {
      section.classList.remove("your-active-class");
      //change background color is class is not active
      section.style.backgroundColor = "black";
    }
  }
}
document.addEventListener("scroll", inViewPort);
// Scroll to anchor ID using scrollTO event
function sectionScroll(e) {
  const destination = document.querySelector(e.target.hash)
  const top = destination.getBoundingClientRect().top + window.scrollY;
  e.preventDefault();
  window.scrollTo({
    top,
    behavior: "smooth"
  });
}
// Scroll to section on link click
navbarList.addEventListener('click', sectionScroll);
// Set sections as active
setTimeout(document.addEventListener('scroll', activeSection), 0);
