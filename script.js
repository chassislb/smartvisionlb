document.addEventListener("DOMContentLoaded", () => {

  const heroCopy = document.querySelector(".hero-copy");
  const heroImage = document.querySelector(".hero-image");
  const proofCards = document.querySelectorAll(".proof-row div");

  if (heroCopy) {
    heroCopy.animate(
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
        duration: 1100,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );
  }

  if (heroImage) {
    heroImage.animate(
      [
        {
          opacity: 0,
          transform: "scale(1.04)"
        },
        {
          opacity: 1,
          transform: "scale(1)"
        }
      ],
      {
        duration: 1400,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );
  }

  proofCards.forEach((card, index) => {

    card.animate(
      [
        {
          opacity: 0,
          transform: "translateY(18px)"
        },
        {
          opacity: 1,
          transform: "translateY(0)"
        }
      ],
      {
        duration: 800,
        delay: index * 120,
        easing: "ease-out",
        fill: "forwards"
      }
    );

  });

});