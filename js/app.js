
//Define Global Variables

let navBarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let navBar = document.querySelector("navbar__menu");

// build the nav
function navBuilder (){
  sections.forEach(section=> {
  const itemList = document.createElement("li");
	itemList.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
  
  navBarList.appendChild(itemList);
  scrollBehavior(itemList, section);	
	
});
navBar.appendChild(navBarList);
}
navBuilder();


// Add class 'active' to section when near top of viewport
function activeSection (){
  // Select all anchor using "menu__link" class
  const currentNavBar = document.querySelectorAll(".menu__link")
  sections.forEach((section, i)=>{
      //Get the boundingrect for each section 
      const bounding = section.getBoundingClientRect();
      //Check if the section is in viewport or not 
      if (bounding.top <= 380 && bounding.bottom >= 350){
          //section in viewport accourding to top and bottom boundings
          section.classList.add("your-active-class");
          currentNavBar[i].classList.add("active");
      } else{
          //When section is off sight
          section.classList.remove("your-active-class");
          currentNavBar[i].classList.remove("active");
      }
  })
}
// Scroll to anchor ID using scrollTO event
function scrollBehavior(itemList, section){
  itemList.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// Scroll to section on link click
window.addEventListener('scroll',(e)=>{
  activeSection();
  toggleNavBar();
});
