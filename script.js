const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 50) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  const progressBar = document.createElement('div');
  progressBar.id = 'scrollProgress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = `${scrollProgress}%`;
  });
  
  const progressBarStyle = document.createElement('style');
  progressBarStyle.innerHTML = `
    #scrollProgress {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: #3498db;
      z-index: 1000;
      width: 0;
      transition: width 0.25s ease-out;
    }
  `;
  document.head.appendChild(progressBarStyle);
  
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'backToTop';
  backToTopBtn.innerText = '↑';
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  const backToTopStyle = document.createElement('style');
  backToTopStyle.innerHTML = `
    #backToTop {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 50%;
      display: none;
      z-index: 1000;
      cursor: pointer;
      font-size: 20px;
    }
  
    #backToTop:hover {
      background-color: #2980b9;
    }
  `;
  document.head.appendChild(backToTopStyle);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  