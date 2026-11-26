// SCHERMATA DIMOSTRATIVA: questa password è solo un blocco visivo locale.
// Non protegge davvero i contenuti se il sito viene pubblicato online.
const DEMO_PASSWORD = "MS2026"; // Cambiala per la prova sul tuo computer.

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const input = document.getElementById("password");
const error = document.getElementById("gate-error");

function enterSite() {
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
document.getElementById("enter").addEventListener("click", enterSite);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") enterSite();
});
if (sessionStorage.getItem("ms-demo-unlocked") === "yes") {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
}
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("nav").classList.remove("open"));
});

// REGALO DI NATALE 2026
const christmasUnlockDate = new Date(2026, 11, 25, 0, 0, 0);

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


function openChristmasGift() {
  const section = document.getElementById("christmas-unlocked");
  const envelope = section.querySelector(".envelope-button");
  const reveal = document.getElementById("christmas-reveal");

  envelope.hidden = true;
  section.querySelector("p").hidden = true;

  reveal.hidden = false;
  reveal.classList.add("christmas-appear");
}

  envelope.classList.add("envelope-opening");

  setTimeout(() => {
    section.hidden = true;
    envelope.classList.remove("envelope-opening");
    reveal.hidden = false;
    reveal.classList.add("christmas-appear");
  }, 800);
}

function showChristmasGift(number) {
  const description = document.getElementById("gift-description");
  const detail = document.getElementById("gift-detail");

  if (number === 1) {
    description.innerHTML = `
      <h3>Un buono Sephora ♡</h3>
      <p>Anche se a te non serve truccarti perché sei già bellissima di tuo!.</p>
    `;
  } else if (number === 2) {
    description.innerHTML = `
      <h3>Una collana ♡</h3>
      <p>Spero che ti piaccia e che quando la indosserei penserai a me, ti amo💕.</p>
    `;
  } else {
    return;
  }

  document.getElementById("christmas-reveal").hidden = true;
  detail.hidden = false;
}

function backToChristmasGifts() {
  document.getElementById("gift-detail").hidden = true;
  document.getElementById("christmas-reveal").hidden = false;
}

updateChristmasLock();
setInterval(updateChristmasLock, 1000);
