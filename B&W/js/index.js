window.onload = function () {
    document.getElementById('menu-toggle').onclick = function () {
        document.getElementById('menu').classList.toggle('active');
        document.getElementById('burger').classList.toggle('close');
    }

}

window.addEventListener('scroll', function () {
   
    if (pageYOffset > 0) {
        document.getElementById('menu').classList.add('scrolled');
        
    }
    else{
        document.getElementById('menu').classList.remove('scrolled');
        
    }
});

const navbarLinks = document.getElementsByClassName('smooth');


for(let i=0; i<navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
  }
function navbarLinkClick(event) {

    smoothScroll(event);
}
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop - 60;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
   
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
     
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  
  // Easing Functions
  
  function linear(t, b, c, d) {
      return c*t/d + b;
  };
  
  function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };
  
  function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
  };


