
//Function for the anchor links when navigated to the section to be visible when the section is revealed
$(document).ready(function () {
  $('a').on('click', function (e) {
      var target = this.hash,
          $target = $(target);

     $('html, body').stop().animate({
      'scrollTop': $target.offset().top-400
  }, 300, 'swing', function () {
  });
      return false;
  });
});



//Check if the site is fully loaded
let stateCheck = setInterval(() => {
    const desktop = window.matchMedia( "(min-width: 992px)")
    const iphone5 = window.matchMedia( "(max-width: 320px)" );// IPHONE 5/SE Screen size
    const iphone6 = window.matchMedia( "(max-width: 375px)" );// IPHONE 6/7/8  Screen size
    const iphone6plus = window.matchMedia( "(max-width: 414px)" );// IPHONE 6/7/8  PLUS Screen size

    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      //if yes, show the notification

      if(iphone5.matches){
        GrowlNotification.notify({
            title: 'Welcome!',
            description: 'The site is still under development.',
            type: 'alert',
            closeTimeout: 8000,
            position: 'bottom-center',
            width: 340,

          });
        }

      else if(iphone6.matches){
        GrowlNotification.notify({
            title: 'Welcome!',
            description: 'The site is still under development.',
            type: 'alert',
            closeTimeout: 8000,
            position: 'bottom-center',
            width: 410,

          });
        }
        else if(iphone6plus.matches){
            GrowlNotification.notify({
                title: 'Welcome!',
                description: 'The site is still under development.',
                type: 'alert',
                position: 'bottom-center',
                closeTimeout: 8000,
                width: 420,

              });
        }
        else if(desktop.matches){
            GrowlNotification.notify({
                title: 'Welcome!',
                description: 'The site is still under development.',
                type: 'alert',
                position: 'bottom-right',
                closeTimeout: 8000,

            });
      }

    }
  }, 1000);

//Function for the navbar when reach end of the home section
  $(window).scroll(function() {
    var top_of_element = $(".first-section").offset().top;
    var bottom_of_element = $(".first-section").offset().top + $(".first-section").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $('#nav_bar').removeClass('navbar-fixed');
    } else {
        $('#nav_bar').addClass('navbar-fixed');
    }
});




//-----------NAVBAR SHOW ON WHICH SECTION I AM ON SCRIPT -------------
  window.addEventListener('scroll', function() {
	var home_element = document.getElementById('Home');
	var position_home = home_element.getBoundingClientRect();

    var about_element = document.getElementById('About');
	var position_about = about_element.getBoundingClientRect();

    var projects_element = document.getElementById('Projects');
	var position_projects = projects_element.getBoundingClientRect();

    var contact_element = document.getElementById('Contact');
	var position_contact = contact_element.getBoundingClientRect();

    var socials_element = document.getElementById('Socials');
	var position_socials = socials_element.getBoundingClientRect();

    // checking for partial visibility
	if(position_home.top < window.innerHeight && position_home.bottom >= 0) {
		document.getElementById("navbar_home").style.backgroundColor = "#e9ecef";
        document.getElementById("navbar_home").style.color = "black";
	}else{
        document.getElementById("navbar_home").style.backgroundColor = "#0c0c0c";
        document.getElementById("navbar_home").style.color = "#e9ecef";
    }
    if(position_about.top < window.innerHeight && position_about.bottom >= 110) {
        document.getElementById("navbar_about").style.backgroundColor = "#e9ecef";
        document.getElementById("navbar_about").style.color = "black";
    }else{
        document.getElementById("navbar_about").style.backgroundColor = "#0c0c0c";
        document.getElementById("navbar_about").style.color = "#e9ecef";
    }
    if(position_projects.top < window.innerHeight && position_projects.bottom >= 220) {
		document.getElementById("navbar_projects").style.backgroundColor = "#e9ecef";
        document.getElementById("navbar_projects").style.color = "black";
	}else{
        document.getElementById("navbar_projects").style.backgroundColor = "#0c0c0c";
        document.getElementById("navbar_projects").style.color = "#e9ecef";
    }
    if(position_contact.top < window.innerHeight && position_contact.bottom >= 330) {
		document.getElementById("navbar_contact").style.backgroundColor = "#e9ecef";
        document.getElementById("navbar_contact").style.color = "black";
	}else{
        document.getElementById("navbar_contact").style.backgroundColor = "#0c0c0c";
        document.getElementById("navbar_contact").style.color = "#e9ecef";
    }
    if(position_socials.top < window.innerHeight && position_socials.bottom >= 440) {
		document.getElementById("navbar_socials").style.backgroundColor = "#e9ecef";
        document.getElementById("navbar_socials").style.color = "black";
	}else{
        document.getElementById("navbar_socials").style.backgroundColor = "#0c0c0c";
        document.getElementById("navbar_socials").style.color = "#e9ecef";
    }
});



/*
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
//IF... then this --->
document.getElementById("bar").style.top = "0";
document.getElementById("bar").style.opacity = "1";
 */


/* -------- FORM SCRIPT ----- */
window.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
    
    function success(){
        status.classList.add('success');
        status.innerHTML = "Thank you for getting in touch!";
        form.reset();
    }

    function error(){
        status.classList.add('error');
        status.innerHTML = "There was an error!";
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if(xhr.readyState !== XMLHttpRequest.DONE) return;
        if(xhr.status === 200){
            success(xhr.response, xhr.responseType);
        }else{
            console.error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}



/* ------ FADE IN SCRIPT FOR THE HEADERS ( SOCIALS, PROJECTS, ABOUT...) ------- */
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealtop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}






/* ----------END OF THE PAGE (BOTTOM) ALERT SCRIPT -----   */
window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        document.getElementById("footer").style.opacity = "1";
        //if at the bottom of the page then fade in the backbutton arrow
        $('.back-to-top').fadeIn();
    }
}

// -------------SCRIPT FOR THE FOOTERS BACKBUTTON-----------
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},400); // 0 to top, 400 speed
});

const updateProperties = (elem, state) => {
    elem.style.setProperty('--x', `${state.x}px`)
    elem.style.setProperty('--y', `${state.y}px`)
    elem.style.setProperty('--width', `${state.width}px`)
    elem.style.setProperty('--height', `${state.height}px`)
    elem.style.setProperty('--radius', state.radius)
    elem.style.setProperty('--scale', state.scale)
  }
  
  document.querySelectorAll('.cursor').forEach(cursor => {
    let onElement
  
    const createState = e => {
      const defaultState = {
        x: e.clientX,
        y: e.clientY,
        width: 40,
        height: 40,
        radius: '50%'
      }
  
      const computedState = {}
  
      if (onElement != null) {
        const { top, left, width, height } = onElement.getBoundingClientRect()
        const radius = window.getComputedStyle(onElement).borderTopLeftRadius
  
        computedState.x = left + width / 2
        computedState.y = top + height / 2
        computedState.width = width
        computedState.height = height
        computedState.radius = radius
      }
  
      return {
        ...defaultState,
        ...computedState
      }
    }
  
    document.addEventListener('mousemove', e => {
      const state = createState(e)
      updateProperties(cursor, state)
    })
  
    document.querySelectorAll('a, button').forEach(elem => {
      elem.addEventListener('mouseenter', () => (onElement = elem))
      elem.addEventListener('mouseleave', () => (onElement = undefined))
    })
  })
  