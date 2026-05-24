// script.js PREMIUM VERSION

// ===============================
// CUSTOM CURSOR
// ===============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});


// ===============================
// BACKGROUND FOLLOW MOUSE
// ===============================

const bgGlow = document.createElement("div");
bgGlow.classList.add("bg-glow");
document.body.appendChild(bgGlow);

document.addEventListener("mousemove", (e) => {

  bgGlow.style.left = e.clientX + "px";
  bgGlow.style.top = e.clientY + "px";

});


// ===============================
// HERO POP IN ANIMATION
// ===============================

window.addEventListener("load", () => {

  const animated = document.querySelectorAll(
    ".mini-title, .hero h1, .hero-desc, .hero-buttons, .stats, .glass-card"
  );

  animated.forEach((el, index) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(80px) scale(0.9)";

    setTimeout(() => {

      el.style.transition =
        "all 1s cubic-bezier(0.22, 1, 0.36, 1)";

      el.style.opacity = "1";
      el.style.transform = "translateY(0px) scale(1)";

    }, 250 * index);

  });

});


// ===============================
// PARALLAX HERO CIRCLE
// ===============================

document.addEventListener("mousemove", (e) => {

  const circle = document.querySelector(".circle");

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  circle.style.transform =
    `translate(${x}px, ${y}px)`;

});


// ===============================
// NAVBAR EFFECT
// ===============================

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {

    nav.style.background = "rgba(5,8,22,0.75)";
    nav.style.borderBottom =
      "1px solid rgba(255,255,255,0.08)";
    nav.style.backdropFilter = "blur(15px)";

  } else {

    nav.style.background = "transparent";
    nav.style.borderBottom = "none";

  }

});


// ===============================
// ADVANCED SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    } else {

      entry.target.classList.remove("show");

    }

  });

}, {
  threshold: 0.15
});


// ALL ELEMENTS

const hiddenElements = document.querySelectorAll(
  `
  .about-card,
  .work-card,
  .contact-card,
  .section-title,
  .stat-box,
  .glass-card
  `
);


// RANDOM DIRECTION EFFECT

hiddenElements.forEach((el, index) => {

  if(index % 3 === 0){

    el.classList.add("hidden-left");

  } else if(index % 3 === 1){

    el.classList.add("hidden-bottom");

  } else {

    el.classList.add("hidden-right");

  }

  observer.observe(el);

});


// ===============================
// FLOATING PARTICLES
// ===============================

const particlesContainer =
  document.querySelector(".particles");

for (let i = 0; i < 40; i++) {

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "%";

  particle.style.animationDuration =
    (Math.random() * 10 + 5) + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  particle.style.width =
    particle.style.height =
    Math.random() * 6 + 2 + "px";

  particlesContainer.appendChild(particle);

}


// ===============================
// WORK CARD HOVER 3D
// ===============================

const cards = document.querySelectorAll(".work-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 18;

    const rotateX =
      ((y / rect.height) - 0.5) * -18;

    card.style.transform =
      `rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.03)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";

  });

});


// ===============================
// SMOOTH SCROLL EFFECT
// ===============================

document.querySelectorAll("a[href^='#']")
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});// ===============================
// ABOUT TOGGLE
// ===============================

const aboutCards =
  document.querySelectorAll(".about-toggle");

aboutCards.forEach((card)=>{

  card.addEventListener("click",()=>{

    card.classList.toggle("active");

  });

});


// ===============================
// PROJECT DETAIL POPUP
// ===============================

const workCards =
  document.querySelectorAll(".work-card");

workCards.forEach((card)=>{

  const btn =
    card.querySelector(".detail-btn");

  btn.addEventListener("click",(e)=>{

    e.stopPropagation();

    card.classList.toggle("active");

  });

});