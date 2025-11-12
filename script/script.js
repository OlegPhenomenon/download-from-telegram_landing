// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('.benefit-card, .step, .use-case, .faq-item');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Track CTA clicks for analytics (optional)
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      // You can add Google Analytics or other tracking here
      console.log('CTA clicked');
    });
  });

  // Add parallax effect to hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      if (heroImage) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }
});

