const header = document.getElementById('mainHeader');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) link.classList.add('active');
    });
  });