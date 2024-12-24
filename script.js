// Toggle Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Page Navigation Logic
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    document.querySelectorAll('.page').forEach((page) => {
      page.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');

    // Close the menu after navigation on mobile
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
  });
});
