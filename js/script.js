//Enhanced JavaScript with DOM manipulation and smooth scrolling

document.addEventListener("DOMContentLoaded", function () {
  // Change header cursor style
  const header = document.querySelector("header");
  if (header) {
    header.style.cursor = "pointer";
    
    // Add click event to header
    header.addEventListener("click", function () {
      alert("Welcome to my Personal Profile Website!");
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll-to-top button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.setAttribute('id', 'scrollTopBtn');
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #1C4E80;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: opacity 0.3s;
  `;
  document.body.appendChild(scrollTopBtn);

  // Show/hide scroll-to-top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Scroll to top on button click
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add hover effect to divs
  const contentDivs = document.querySelectorAll('.main-content > div');
  contentDivs.forEach(div => {
    div.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    div.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Log page load time
  console.log('Page loaded successfully!');
  console.log('DOM fully loaded at:', new Date().toLocaleTimeString());
});