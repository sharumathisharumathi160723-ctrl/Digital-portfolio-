// Smooth Scroll for Navigation

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    const target = document.getElementById(targetId);

    if (target) {

      window.scrollTo({

        top: target.offsetTop - 20,

        behavior: "smooth"

      });

    }

  });

});

// Back-to-Top Button

const backToTop = document.createElement("button");

backToTop.innerText = "⬆";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";

backToTop.style.bottom = "20px";

backToTop.style.right = "20px";

backToTop.style.padding = "10px 15px";

backToTop.style.fontSize = "18px";

backToTop.style.borderRadius = "50%";

backToTop.style.border = "none";

backToTop.style.background = "#e74c3c";

backToTop.style.color = "white";

backToTop.style.cursor = "pointer";

backToTop.style.display = "none";

// Show button when scrolling

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

// Scroll to top

backToTop.addEventListener("click", () => {

  window.scrollTo({ top: 0, behavior: "smooth" });

});

// Dark/Light Theme Toggle

const themeToggle = document.createElement("button");

themeToggle.innerText = "🌙";

themeToggle.id = "themeToggle";

document.body.appendChild(themeToggle);

themeToggle.style.position = "fixed";

themeToggle.style.bottom = "20px";

themeToggle.style.left = "20px";

themeToggle.style.padding = "8px 12px";

themeToggle.style.borderRadius = "8px";

themeToggle.style.border = "none";

themeToggle.style.background = "#2c3e50";

themeToggle.style.color = "white";

themeToggle.style.cursor = "pointer";

function applyTheme(theme) {

  if (theme === "dark") {

    document.body.style.backgroundColor = "#1a1a1a";

    document.body.style.color = "white";

    themeToggle.innerText = "☀️";

  } else {

    document.body.style.backgroundColor = "red";

    document.body.style.color = "#222";

    themeToggle.innerText = "🌙";

  }

  localStorage.setItem("theme", theme);

}

// Load saved theme

const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

// Toggle theme

themeToggle.addEventListener("click", () => {

  const currentTheme = localStorage.getItem("theme") || "light";

  const newTheme = currentTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);

});