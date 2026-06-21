function sendQuoteEnquiry() {
  var name = document.getElementById('q-name').value.trim();
  var company = document.getElementById('q-company').value.trim();
  var email = document.getElementById('q-email').value.trim();
  var phone = document.getElementById('q-phone').value.trim();
  var product = document.getElementById('q-product').value;
  var quantity = document.getElementById('q-quantity').value.trim();
  var message = document.getElementById('q-message').value.trim();

  if (!name || !email) {
    alert('Please enter at least your Name and Email before sending.');
    return;
  }

  var subject = 'Quote Request - ' + product + ' (' + name + ')';
  var bodyLines = [
    'Name: ' + name,
    'Company: ' + (company || '-'),
    'Email: ' + email,
    'Phone: ' + (phone || '-'),
    'Product: ' + product,
    'Quantity: ' + (quantity || '-'),
    '',
    'Message:',
    (message || '-')
  ];
  var body = bodyLines.join('\n');

  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    var mailtoLink = 'mailto:forgeflowmetal@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
  } else {
    var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1'
      + '&to=forgeflowmetal@gmail.com'
      + '&su=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    window.open(gmailLink, '_blank');
  }
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
});

const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => obs.observe(el));

const cards = document.querySelectorAll('.mv-card');
const mvObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 150);
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => mvObserver.observe(card));

// --- SCROLL TO TOP LOGIC ---
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) { // Shows after scrolling down 400px
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});