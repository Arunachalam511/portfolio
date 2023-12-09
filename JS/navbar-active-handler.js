function navigateTo(sectionId) {
  // Remove "active" class from all navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add "active" class to the clicked navigation link
  const clickedLink = document.querySelector(
    `[onclick="navigateTo('${sectionId}')"]`
  );
  clickedLink.classList.add("active");

  // Scroll to the corresponding section
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}



document.addEventListener('scroll', function() {
    // Get the header element
    const header = document.getElementById('header');
    
    // Check the scroll position
    if (window.scrollY > 0) {
      // If scrolled down, change the background color
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Change the color as needed
    } else {
      // If at the top, revert to the initial background color
      header.style.backgroundColor = 'transparent';
    }
  });