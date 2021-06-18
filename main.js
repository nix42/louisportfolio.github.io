const menu = document.querySelector('#mainbar_mobile')
const menuLinks = document.querySelector('.mainbar_menu')
const navLogo = document.querySelector('#mainbar_logo')

// Display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home')
    const aboutMenu = document.querySelector('#about')
    const projectsMenu = document.querySelector('#projects')
    const upcomingMenu = document.querySelector('#upcoming')
    
    let scrollPos = window.scrollY
    console.log(scrollPos)
    // adds highlight class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        projectsMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        projectsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        upcomingMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        upcomingMenu.classList.add('highlight')
        projectsMenu.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600 || elem)) {
        elem.classList.remove('highlight')
        return
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//close mobile menu when clicking on item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <=960 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){ 

    if(i == 0) {
      images[i].style.display = 'block';
    } else if(i == images.length ) {
      images[i - 1].style.display = 'none';
      images[0].style.display = 'block';
      i = 0;
    } else {
      images[i - 1].style.display = 'none';
      images[i].style.display = 'block';
    }
    
   i++;
   
  }, 3000);
