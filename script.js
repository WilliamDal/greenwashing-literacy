// Small, dependency-free interaction layer for the fictional claim cards.
document.addEventListener("DOMContentLoaded", () => {
  const revealButtons = document.querySelectorAll("[data-reveal]");

  revealButtons.forEach((button) => {
    const panel = document.getElementById(button.dataset.reveal);

    if (!panel) {
      return;
    }

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });
});
