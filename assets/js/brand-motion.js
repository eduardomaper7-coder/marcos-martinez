(function () {
  "use strict";

  var selectors = [
    ".section-head",
    ".service-mini",
    ".why-list article",
    ".slider-card",
    ".featured-box",
    ".process-grid article",
    ".reviews-grid article",
    ".blog-card",
    ".contact-home-card article",
    ".faq-list details",
    ".treatment-card",
    ".service-card",
    ".tarifa-card",
    ".team-card",
    ".article-card"
  ];

  var items = document.querySelectorAll(selectors.join(","));
  items.forEach(function (item, index) {
    item.setAttribute("data-reveal", "");
    item.style.transitionDelay = Math.min(index % 4, 3) * 70 + "ms";
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    items.forEach(function (item) { observer.observe(item); });
  } else {
    items.forEach(function (item) { item.classList.add("is-visible"); });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }, { passive: true });
  }

  var summerNotice = document.querySelector(".summer-hours-notice");
  var pageHero = document.querySelector(".page-hero");
  if (summerNotice && pageHero) {
    pageHero.insertAdjacentElement("afterend", summerNotice);
  }
})();
