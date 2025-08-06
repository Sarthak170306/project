
    const items = document.querySelectorAll(".gallery-item");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.9;
      items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          item.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    // Lightbox popup
    document.querySelectorAll(".gallery-item img").forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.className = "img-overlay";
        overlay.innerHTML = `
          <div class="popup-img-box">
            <span class="close-btn">&times;</span>
            <img src="${img.src}" alt="${img.alt}" />
            <p>${img.alt}</p>
          </div>
        `;
        document.body.appendChild(overlay);
        overlay.querySelector(".close-btn").addEventListener("click", () => {
          document.body.removeChild(overlay);
        });
      });
    });
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("shrink", window.scrollY > 50);
    });

    const fadeElements = document.querySelectorAll(".section-content");

    const fadeInOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.9;
      fadeElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
          el.classList.add("visible");
        }
      });
    };
    // Animate list items on scroll
    const animatedItems = document.querySelectorAll("ul.content-list li");
    function revealItemsOnScroll() {
      const triggerPoint = window.innerHeight * 0.9;
      animatedItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < triggerPoint) {
          item.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    window.addEventListener("load", fadeInOnScroll);
    window.addEventListener("load", revealItemsOnScroll);