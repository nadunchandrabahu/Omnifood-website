"use strict";

const menuButton = document.querySelector(
  ".btn-mobile-nav ion-icon[name='menu']"
);

const closeButton = document.querySelector(
  ".btn-mobile-nav ion-icon[name='close']"
);

const navLinks = document.querySelectorAll(".main-nav-link");

const header = document.querySelector(".header");

const yearEl = document.querySelector(".year");

const allLinks = document.querySelectorAll("a:link");

yearEl.textContent = new Date().getFullYear();

menuButton.addEventListener("click", function () {
  //opens menu
  header.classList.add("nav-open");
});

closeButton.addEventListener("click", function () {
  //closes menu
  header.classList.remove("nav-open");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
}

for (let i = 0; i < allLinks.length; i++) {
  if (allLinks[i].classList.contains("footer-contact-link")) {
    continue;
  }
  allLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const href = allLinks[i].getAttribute("href");

    //scroll to top

    if (href === "#") {
      document.body.classList.remove("sticky");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      document.body.classList.add("sticky");
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-72px",
  }
);

observer.observe(sectionHeroEl);
document.bod;

// safari flexbox gap

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
