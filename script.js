document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  // Hide all sections
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  // Add click event listener to navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = 'none';
      });

      // Show the corresponding section
      sections[index].style.display = 'block';
    });
  });
});
