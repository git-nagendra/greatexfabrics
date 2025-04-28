// Main script.js

// === Hamburger Menu Toggle ===
const ham = document.querySelector('.ham');
const nav = document.querySelector('nav');

if (ham && nav) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('transform');
    nav.classList.toggle('mobile');
  });
}

// === Menu & Submenu Toggle ===
const menus = document.querySelectorAll('.menu_wrapper');
const submenus = document.querySelectorAll('.submenu_wrapper');

menus.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    submenus[index]?.classList.toggle('active');
  });
});

// === Color Picker Active Toggle ===
const colorOptions = document.querySelectorAll('.color_option');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(el => el.classList.remove('active'));
    option.classList.add('active');
  });
});

// === Size Selector Active Toggle ===
const sizes = document.querySelectorAll('.size');

sizes.forEach(size => {
  size.addEventListener('click', () => {
    sizes.forEach(el => el.classList.remove('active'));
    size.classList.add('active');
  });
});

// === Image Magnifier on Load ===
window.addEventListener('load', () => {
  magnify('myimage', 2);
});

function magnify(imgID, zoom) {
  const img = document.getElementById(imgID);
  if (!img) return;

  const glass = document.createElement('div');
  glass.className = 'img-magnifier-glass';
  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = `url('${img.src}')`;
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

  const bw = 3;
  const w = glass.offsetWidth / 2;
  const h = glass.offsetHeight / 2;

  function moveMagnifier(e) {
    e.preventDefault();
    const pos = getCursorPos(e);
    let x = pos.x;
    let y = pos.y;

    if (x > img.width - w / zoom) x = img.width - w / zoom;
    if (x < w / zoom) x = w / zoom;
    if (y > img.height - h / zoom) y = img.height - h / zoom;
    if (y < h / zoom) y = h / zoom;

    glass.style.left = `${x - w}px`;
    glass.style.top = `${y - h}px`;
    glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
    glass.style.display = 'block';
  }

  function getCursorPos(e) {
    e = e || window.event;
    const a = img.getBoundingClientRect();
    const x = e.pageX - a.left - window.pageXOffset;
    const y = e.pageY - a.top - window.pageYOffset;
    return { x, y };
  }

  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);
  glass.addEventListener('touchmove', moveMagnifier);
  img.addEventListener('touchmove', moveMagnifier);
}

// === Sticky Header on Scroll ===
const header = document.querySelector('.header');
const scrollText = document.querySelector('.scroll_text');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (header) {
    header.classList.toggle('sticky', scrollTop > 40);
  }

  if (scrollText) {
    scrollText.style.transform = `translateX(${scrollTop / 5}px)`;
  }
});

// === Toggle Share Modal ===
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const myElement = document.getElementById('myElement');

  if (toggleButton && myElement) {
    toggleButton.addEventListener('click', () => {
      myElement.classList.toggle('share');
    });
  }
});

// === Duplicate Logo Slider Content ===
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.logo-slider');
  const slide = document.querySelector('.logos-slide');

  if (slider && slide) {
    const duplicate = slide.cloneNode(true);
    slider.appendChild(duplicate);
  }
});

// === Popup Modal for Images ===
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('popupModal');
  const modalImg = document.getElementById('popupImg');
  const closeBtn = document.querySelector('.popup-close');

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll('.popup-image').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});

// === Download PDF on Button Click ===
const downloadBtn = document.getElementById('downloadBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './assest/images/pdf/Greatex-factory.pdf';
    link.download = 'Greatex-factory.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
