
// PASSWORD
const DEMO_PASSWORD = "MS12426";

// ELEMENTI DEL SITO
const gate = document.getElementById("gate");
const site = document.getElementById("site");
const input = document.getElementById("password");
const error = document.getElementById("gate-error");

// DATA DI APERTURA DEL SITO
const openingDate = new Date(2026, 10, 26, 0, 0, 0);

// INGRESSO NEL SITO
function enterSite() {
  if (new Date() < openingDate) {
    error.textContent = "M+S si aprirà il 12 dicembre 2026. Ancora un po' di pazienza! ♡";
    return;
  }

  if (input.value === DEMO_PASSWORD) {
    gate.classList.add("hidden");
    site.classList.remove("hidden");
    sessionStorage.setItem("ms-demo-unlocked", "yes");
    window.scrollTo(0, 0);
  } else {
    error.textContent = "La password non è corretta. Riprova.";
    input.value = "";
    input.focus();
  }
}

// PULSANTE E TASTO INVIO
document.getElementById("enter").addEventListener("click", enterSite);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enterSite();
  }
});

// CONTROLLO DELLA SESSIONE
if (
  sessionStorage.getItem("ms-demo-unlocked") === "yes" &&
  new Date() >= openingDate
) {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
}

// MENU MOBILE
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

// REGALO DI NATALE 2026
const christmasUnlockDate = new Date(2026, 10, 26, 0, 0, 0);

function updateChristmasLock() {
  const locked = document.getElementById("christmas-locked");
  const unlocked = document.getElementById("christmas-unlocked");
  const countdown = document.getElementById("christmas-countdown");

  if (!locked || !unlocked) return;

  const now = new Date();

  if (now >= christmasUnlockDate) {
    locked.hidden = true;
    unlocked.hidden = false;
  } else {
    locked.hidden = false;
    unlocked.hidden = true;

    if (countdown) {
      const days = Math.ceil((christmasUnlockDate - now) / 86400000);
      countdown.textContent = `Mancano ${days} giorni a Natale. ♡`;
    }
  }
}

// APERTURA DEL REGALO
function openChristmasGift() {
  const section = document.getElementById("christmas-unlocked");
  const envelope = section.querySelector(".envelope-button");
  const reveal = document.getElementById("christmas-reveal");

  envelope.hidden = true;
  section.querySelector("p").hidden = true;

  reveal.hidden = false;
  reveal.classList.add("show");
}

// MOSTRA LE SORPRESE
function showChristmasGift(number) {
  const description = document.getElementById("gift-description");
  const detail = document.getElementById("gift-detail");

  if (number === 1) {
    description.innerHTML = `
      <h3>Un buono Sephora ♡</h3>
      <p>Anche se a te non serve truccarti perché sei già bellissima di tuo!</p>
    `;
  } else if (number === 2) {
    description.innerHTML = `
      <h3>Una collana ♡</h3>
      <p>Spero che ti piaccia e che quando la indosserai penserai a me. Ti amo 💕</p>
    `;
  } else {
    return;
  }

  document.getElementById("christmas-reveal").hidden = true;
  detail.hidden = false;
}

// TORNA ALLE SORPRESE
function backToChristmasGifts() {
  document.getElementById("gift-detail").hidden = true;
  document.getElementById("christmas-reveal").hidden = false;
}

// AGGIORNAMENTO DEL REGALO
updateChristmasLock();
setInterval(updateChristmasLock, 1000);
// APERTURA FOTO INGRANDITE
const lightbox = document.getElementById("photo-lightbox");
const lightboxImage = document.getElementById("lightbox-image");

document.querySelectorAll(".gallery-card img").forEach(photo => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
    lightbox.hidden = false;
  });
});

lightbox.addEventListener("click", (event) => {
  if (
    event.target === lightbox ||
    event.target.classList.contains("lightbox-close")
  ) {
    lightbox.hidden = true;
    lightboxImage.src = "";
  }
});
// PICCOLE STELLINE DORATE M+S
function createGoldenStars() {
  const container = document.createElement("div");
  container.className = "golden-stars";
  container.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 24; i++) {
    const star = document.createElement("span");
    star.className = "golden-star";
    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = (4 + Math.random() * 4) + "s";

    container.appendChild(star);
  }

  document.body.appendChild(container);
}

createGoldenStars();
