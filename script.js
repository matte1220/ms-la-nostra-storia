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
