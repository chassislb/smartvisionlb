document.addEventListener("DOMContentLoaded", () => {

  const heroContent = document.querySelector(".hero-content");

  heroContent.animate(
    [
      {
        opacity: 0,
        transform: "translateY(40px)"
      },
      {
        opacity: 1,
        transform: "translateY(0)"
      }
    ],
    {
      duration: 1400,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards"
    }
  );

});