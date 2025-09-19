document.addEventListener("DOMContentLoaded", () => {
  /* ========== MENU TOGGLE ========== */
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (menu.classList.contains("active") &&
          !menu.contains(e.target) &&
          e.target !== toggleBtn) {
        menu.classList.remove("active");
      }
    });

    window.addEventListener("scroll", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  }

  /* ========== COLLECTION SLIDER ========== */
  const grid = document.querySelector(".collections-grid");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  if (grid && btnLeft && btnRight) {
    const itemWidth = grid.offsetWidth; // 1 lần scroll = chiều rộng container

    btnLeft.addEventListener("click", () => {
      grid.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      grid.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
  }

  /* ========== PRODUCT SLIDER ========== */
  const slides = document.querySelectorAll(".product-slider .product-img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0) {
    showSlide(current); // hiển thị slide đầu tiên

    setInterval(() => {
      let next = Math.floor(Math.random() * slides.length);
      while (next === current) {
        next = Math.floor(Math.random() * slides.length); // tránh lặp
      }
      current = next;
      showSlide(current);
    }, 4000);
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".product-slider .product-img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // hiện ảnh đầu tiên
  if (slides.length > 0) showSlide(current);

  // đổi ảnh mỗi 4s
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
});


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".arrivals-slider");
  const btnLeft = document.querySelector(".arrivals-btn.left");
  const btnRight = document.querySelector(".arrivals-btn.right");
  const items = document.querySelectorAll(".arrival-item");

  if (slider && btnLeft && btnRight && items.length > 0) {
    const itemWidth = items[0].offsetWidth + 20; // full width của 1 item + khoảng cách gap

    btnLeft.addEventListener("click", () => {
      slider.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      slider.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
  }
});



