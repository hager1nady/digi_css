const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme'); // يرجع للـ light
  } else {
    document.documentElement.setAttribute('data-theme', 'dark'); // يفعّل الـ dark
  }
});