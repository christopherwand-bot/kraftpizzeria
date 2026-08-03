const content = window.siteContent ?? {};

function resolveContent(path) {
  return path.split(".").reduce((value, key) => {
    if (value == null) {
      return undefined;
    }

    return value[key];
  }, content);
}

document.querySelectorAll("[data-content]").forEach((element) => {
  const value = resolveContent(element.dataset.content);

  if (typeof value === "string") {
    element.textContent = value;
  }
});

document.querySelectorAll("[data-aria-content]").forEach((element) => {
  const value = resolveContent(element.dataset.ariaContent);

  if (typeof value === "string") {
    element.setAttribute("aria-label", value);
  }
});

document.querySelectorAll("[data-href-content]").forEach((element) => {
  const value = resolveContent(element.dataset.hrefContent);

  if (typeof value === "string") {
    element.setAttribute("href", value);
  }
});

const pageTitle = document.querySelector("#site-title");
const pageDescription = document.querySelector("#site-description");

if (pageTitle && typeof content.meta?.title === "string") {
  pageTitle.textContent = content.meta.title;
}

if (pageDescription && typeof content.meta?.description === "string") {
  pageDescription.setAttribute("content", content.meta.description);
}

const mobileBarQuery = window.matchMedia("(max-width: 640px)");

function syncMobileBarSpacing() {
  document.body.classList.toggle("has-mobile-bar", mobileBarQuery.matches);
}

syncMobileBarSpacing();

if (typeof mobileBarQuery.addEventListener === "function") {
  mobileBarQuery.addEventListener("change", syncMobileBarSpacing);
}

const animatedItems = document.querySelectorAll(
  ".hero-copy, .stats article, .showcase-visual, .showcase-content, .location-card, .service-card, .room-card, .menu-grid article, .gallery-card, .atmosphere-card, .quote-card, .checklist, .cta-panel, .faq-item, .final-image-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.2 }
);

animatedItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${index * 60}ms`;
  observer.observe(item);
});
