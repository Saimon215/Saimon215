document.addEventListener("DOMContentLoaded", () => {
  console.log("document successfully loaded, baby");

  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // fun button
  const btn = document.getElementById("btnClicky");
  if (btn) {
    btn.addEventListener("click", () => {
      btn.style.transform = "rotate(15deg)";
      btn.style.transition = "transform 200ms";
      console.log("btnClicky rotated");
      setTimeout(() => (btn.style.transform = "rotate(0deg)"), 250);
    });
  }
});
