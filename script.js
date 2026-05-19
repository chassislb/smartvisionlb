document.addEventListener("DOMContentLoaded", () => {

  const heroCopy = document.querySelector(".hero-copy");
  const heroImage = document.querySelector(".hero-image");
  const proofCards = document.querySelectorAll(".proof-row div");

  // HERO TEXT ANIMATION
  if (heroCopy) {

    heroCopy.style.opacity = "0";

    heroCopy.animate(
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

  }

  // HERO IMAGE ANIMATION
  if (heroImage) {

    heroImage.style.opacity = "0";

    heroImage.animate(
      [
        {
          opacity: 0,
          transform: "scale(1.08) translateY(20px)"
        },
        {
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }
      ],
      {
        duration: 1700,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

  }

  // PROOF CARDS STAGGER
  proofCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.animate(
      [
        {
          opacity: 0,
          transform: "translateY(24px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }
      ],
      {
        duration: 900,
        delay: 500 + (index * 140),
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

  });

  // SCROLL REVEAL
  const revealElements = document.querySelectorAll(`
    section,
    .service-list article,
    .detail-grid div,
    .program-list span,
    .outcome-grid div,
    .partner-logo,
    .partner-name,
    .contact-card
  `);

  const revealOnScroll = () => {

    revealElements.forEach((element) => {

      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < window.innerHeight - 90) {

        element.classList.add("reveal-active");

      }

    });

  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

});