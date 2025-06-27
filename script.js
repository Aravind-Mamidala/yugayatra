// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        // Collapse/hide navbar on mobile after click
        if (window.innerWidth <= 991) {
          if (typeof closeMenu === 'function') {
            closeMenu();
          } else {
            // fallback: hide Bootstrap collapse if present
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
              new bootstrap.Collapse(navbarCollapse).toggle();
            }
          }
        }
      }
    }
  });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Product filters
const filterBtns = document.querySelectorAll('.product-filters .btn');
const productCards = document.querySelectorAll('.product-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    productCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    this.querySelectorAll('input, textarea').forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('is-invalid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });
    if (valid) {
      alert('Thank you for contacting us!');
      this.reset();
    }
  });
}

// Lightbox2 initialization (handled automatically by data-lightbox attributes)
// AOS initialization is in index.html 

// FAQ accordion works with Bootstrap, no extra JS needed. 