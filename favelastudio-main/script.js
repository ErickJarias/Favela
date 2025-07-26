// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking on links
const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      
      // Update active link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
    document.querySelector('.header').classList.add('scrolled');
  } else {
    backToTopBtn.classList.remove('show');
    document.querySelector('.header').classList.remove('scrolled');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});