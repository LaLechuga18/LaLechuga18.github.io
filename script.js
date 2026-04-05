// Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Glitch on nav hover
  document.querySelector('.nav-logo').addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    setTimeout(() => this.style.animation = '', 10);
  });