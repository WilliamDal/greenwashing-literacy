// Dependency-free interaction layer for the public static site.
document.addEventListener("DOMContentLoaded", () => {
  initialiseLabTabs();
  initialiseRevealPanels();
  initialiseRewriteLab();
});

function initialiseLabTabs() {
  const tabs = Array.from(document.querySelectorAll("[data-case-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-case-panel]"));

  if (!tabs.length || !panels.length) {
    return;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.caseTab));
    tab.addEventListener("keydown", (event) => {
      const nextIndex = getNextTabIndex(event.key, index, tabs.length);

      if (nextIndex === null) {
        return;
      }

      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex].dataset.caseTab);
    });
  });

  function activateTab(caseId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.caseTab === caseId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.casePanel === caseId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  }
}

function getNextTabIndex(key, currentIndex, totalTabs) {
  if (key === "ArrowRight" || key === "ArrowDown") {
    return (currentIndex + 1) % totalTabs;
  }

  if (key === "ArrowLeft" || key === "ArrowUp") {
    return (currentIndex - 1 + totalTabs) % totalTabs;
  }

  return null;
}

function initialiseRevealPanels() {
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
      updateLabProgress(button.closest("[data-case-panel]"));
    });
  });
}

function updateLabProgress(panel) {
  if (!panel) {
    return;
  }

  const progress = panel.querySelector(".lab-progress");
  const panels = Array.from(panel.querySelectorAll(".analysis-panel"));

  if (!progress || !panels.length) {
    return;
  }

  const openedCount = panels.filter((item) => !item.hidden).length;
  progress.textContent = `${openedCount} of ${panels.length} lenses opened`;
}

function initialiseRewriteLab() {
  const output = document.getElementById("rewrite-output-text");
  const checkboxes = Array.from(document.querySelectorAll("[data-rewrite-part]"));

  if (!output || !checkboxes.length) {
    return;
  }

  const parts = {
    scope: "We aim to reduce operational emissions by 60% by 2035, covering owned facilities and purchased electricity.",
    baseline: "The target uses a 2022 baseline and will report interim progress every year.",
    exclusions: "Supply-chain emissions and product-use emissions are not yet included.",
    uncertainty: "Remaining emissions would require verified removals, and the pathway may change as methods improve."
  };

  const updateOutput = () => {
    const selectedParts = checkboxes
      .filter((box) => box.checked)
      .map((box) => parts[box.dataset.rewritePart])
      .filter(Boolean);

    output.textContent = selectedParts.length
      ? selectedParts.join(" ")
      : "A more transparent claim needs at least one clear boundary, source of evidence or stated uncertainty.";
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateOutput);
  });

  updateOutput();
}
