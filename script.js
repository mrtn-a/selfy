// update navbar on scroll
const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight / 5) {
        navbar.classList.add("navbar-white");
      } else {
        navbar.classList.remove("navbar-white");
      }
    });
  }
};

initUpdateNavbarOnScroll();

// counter

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) VanillaCounter();
  },
  { threshold: [1] }
);

observer.observe(document.querySelector("#description"));
