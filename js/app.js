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
    box = section.getBoundingClientRect();
    if (box.top < 150 && box.bottom > -150) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
        //change background color for active class
        section.style.backgroundColor = "indigo";
      }
    } else {
      if (section.classList.contains("your-active-class")) {
        section.classList.remove("your-active-class");
        section.style.backgroundColor = "black";
      }
    }
  }
}
// Scroll to section on link click
window.addEventListener("scroll", inViewPort);

//smooth scroll
const sectionScroll = () => {
  navbarList.addEventListener("click", (event) => {
    if (event.target.dataset.nav) {
      document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}
sectionScroll();
