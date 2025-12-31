document.addEventListener("DOMContentLoaded", function () {
  
  const header = document.querySelector("header");
  if (header) {
    header.addEventListener("click", function () {
      alert("Welcome to Ashton Brian Garcia's Profile!");
    });
  }

  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.setAttribute('id', 'scrollTopBtn');
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #F1C40F;
    color: #111;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: opacity 0.3s;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  console.log('Page loaded successfully!');
});