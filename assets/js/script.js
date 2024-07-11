document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.querySelector(".typing");
  const textArray = ["Full-Stack Developer", "Web Enthusiast", "Tech Lover"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  const skillsSvg = document.getElementById("skills-svg");
  skillsSvg.addEventListener("load", () => {
    const svgDoc = skillsSvg.contentDocument;
    const paths = svgDoc.querySelectorAll(".hover-path");

    paths.forEach((path) => {
      path.addEventListener("mouseenter", () => {
        path.style.fill = "url(#violet-blue-gradient)";
      });

      path.addEventListener("mouseleave", () => {
        path.style.fill = ""; // Reset to original color or define a specific one
      });
    });
  });

  type();

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });
});
