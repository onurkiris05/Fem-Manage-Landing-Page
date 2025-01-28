const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const isVisible = primaryNav.toggleAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", isVisible);
  primaryHeader.toggleAttribute("data-overlay", isVisible);
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  responsive: {
    640: {
      dots: false,
    },
  },
});
