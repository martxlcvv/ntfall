document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section');
  const footer = document.querySelector('footer');

  let firstClick = false; // default: lahat visible sa umpisa

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);

      // kapag pinindot yung HOME
      if (target === "home") {
        // ipakita lahat ng sections ulit
        sections.forEach(sec => sec.classList.remove("hidden"));
      } else {
        // una itago lahat
        sections.forEach(sec => sec.classList.add("hidden"));

        // tapos ipakita lang yung piniling section
        const activeSection = document.getElementById(target);
        if (activeSection) {
          activeSection.classList.remove("hidden");
        }
      }

      // Footer laging visible
      footer.style.display = "block";

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
