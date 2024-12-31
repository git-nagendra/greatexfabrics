const ham =document.querySelector('.ham');
const nav =document.querySelector('nav');
ham.addEventListener('click', ()=>{
    ham.classList.toggle('transform')
    nav.classList.toggle('mobile')
})
const menu = document.querySelectorAll('.menu_wrapper');
console.log(menu);
const submenu = document.querySelectorAll('.submenu_wrapper');
console.log(submenu);

menu.forEach((element, index) => {
  element.addEventListener('click', function() {
    // submenu.forEach(subEl => {
    //   subEl.classList.remove('active');
    // });
    submenu[index].classList.toggle('active');
  });
});
const colorPick = document.querySelectorAll('.color_option');

colorPick.forEach(element => {
  element.addEventListener('click', () => {
    colorPick.forEach(el => el.classList.remove('active')); 
    element.classList.add('active');
  });
});
const size = document.querySelectorAll('.size');
size.forEach(element => {
  element.addEventListener('click', () => {
    size.forEach(el => el.classList.remove('active')); 
    element.classList.add('active');
  });
});
// script.js
window.onload = function() {
  magnify("myimage", 2);
};

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* Also work on touch screens: */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
      if (x < w / zoom) { x = w / zoom; }
      if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
      if (y < h / zoom) { y = h / zoom; }
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
      glass.style.display = "block"; // Show the glass when moving
  }

  function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
  }
}












const sticky =document.querySelector('.header');
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  if (scrollTop > 40) {
    sticky.classList.add('sticky');
  }
  else{
    sticky.classList.remove('sticky');
  }
  const text = document.querySelector('.scroll_text');
  if (text) {
    const val = window.scrollY / 5;
    text.style.transform = `translateX(${val}px)`;
  }
});






// function scroll() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
