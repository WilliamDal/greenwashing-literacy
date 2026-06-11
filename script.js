/* Greenwashing Literacy — dependency-free interaction layer.
   All editable practice content lives in LAB_CASES and QUIZ_ITEMS below. */

/* ============ Claim lab content ============ */
const LAB_CASES = [
  {
    id: "product",
    tabTitle: "Card A",
    tabSub: "Product claim",
    label: "Card A / Product-level green claim",
    name: "EverKind Wash Tabs",
    quote: "“100% planet kind cleaning, now in a lighter refill.”",
    note: "Small-pack convenience. Refill available online.",
    summary: "The headline stretches one narrow packaging change into a total environmental virtue. <strong>Possible delay family: push non-transformative solutions</strong> — a small improvement stands in for the product's wider impact.",
    lenses: [
      {
        title: "01 · What is claimed?",
        prompt: "Which reading best captures the central claim?",
        options: [
          {
            text: "The whole product, in every respect, is good for the planet.",
            verdict: "strongest",
            feedback: "“100% planet kind” is an unbounded, product-wide promise, while the only concrete detail — a lighter refill — concerns packaging weight alone. The claim is far larger than the change."
          },
          {
            text: "The refill pack is lighter than the previous pack.",
            verdict: "partial",
            feedback: "That is the only measurable statement here — but it is not what the headline promises. The headline borrows credibility from the refill detail."
          },
          {
            text: "The tablets clean more effectively than other brands.",
            verdict: "weak",
            feedback: "Performance is never claimed. Be careful not to read benefits into a claim that the wording never actually commits to."
          }
        ]
      },
      {
        title: "02 · What evidence is offered?",
        prompt: "What substantiation does the communication actually provide?",
        options: [
          {
            text: "Only a selected packaging detail — nothing on ingredients, wash temperature, transport or end-of-life.",
            verdict: "strongest",
            feedback: "Exactly. For a claim of this scale, nothing is offered: no data, no comparison, no verification, no boundary."
          },
          {
            text: "An implied comparison with the earlier pack, though without figures.",
            verdict: "partial",
            feedback: "“Lighter” does imply a comparison — but with no numbers, dates or method, it cannot be checked. Implication is not substantiation."
          },
          {
            text: "The warm, caring tone itself suggests the company is sincere.",
            verdict: "weak",
            feedback: "Tone is persuasion, not evidence. A key greenwashing pattern is letting mood do the work that data should do."
          }
        ]
      },
      {
        title: "03 · What is omitted?",
        prompt: "Which omission would most change how the claim is understood?",
        options: [
          {
            text: "Which impact actually improved, by how much, and whether most buyers can really access the refill.",
            verdict: "strongest",
            feedback: "These are the omissions that matter: impact category, magnitude and real availability. Without them the claim cannot be assessed at all."
          },
          {
            text: "The refill's price compared with the original pack.",
            verdict: "partial",
            feedback: "Relevant to shoppers, but it does not change the environmental reading of the claim. Keep the lens on impact information."
          },
          {
            text: "The founders' personal story and company history.",
            verdict: "weak",
            feedback: "Background colour, not claim-relevant information. An omission only matters if knowing it would change your reading."
          }
        ]
      },
      {
        title: "04 · What future is normalised?",
        prompt: "What does this message quietly make feel normal?",
        options: [
          {
            text: "A future where buying slightly adjusted products counts as the main form of environmental action.",
            verdict: "strongest",
            feedback: "Yes — the message keeps consumption itself unquestioned and frames better shopping as the solution, a classic redirect towards individual choice."
          },
          {
            text: "A future with somewhat less packaging waste overall.",
            verdict: "partial",
            feedback: "Possibly — but the claim gives no evidence of system-level change, so this future is suggested rather than supported."
          },
          {
            text: "A future in which cleaning products are no longer needed.",
            verdict: "weak",
            feedback: "Nothing in the message points there. The futures worth noticing are the ones a claim makes feel ordinary, not fantastical ones."
          }
        ]
      }
    ]
  },
  {
    id: "transition",
    tabTitle: "Card B",
    tabSub: "Transition claim",
    label: "Card B / Both-and transition claim",
    name: "Northbridge Energy",
    quote: "“Powering today's needs while investing in tomorrow's clean technologies.”",
    note: "Future portfolio language. No spending split shown.",
    summary: "The both-and structure makes continuity and transition feel equally weighted without showing either. <strong>Possible delay family: push non-transformative solutions</strong> — especially if future investment talk substitutes for near-term reduction.",
    lenses: [
      {
        title: "01 · What is claimed?",
        prompt: "Which reading best captures the central claim?",
        options: [
          {
            text: "Present supply and future clean investment are one balanced, already-underway transition.",
            verdict: "strongest",
            feedback: "The power of the sentence is its both-and balance: it presents continuity and change as fully compatible, with the transition implicitly in hand."
          },
          {
            text: "The company puts some money into clean technologies.",
            verdict: "partial",
            feedback: "That is asserted — but the real claim is the equivalence the sentence draws between today's model and tomorrow's promise."
          },
          {
            text: "The company commits to ending high-emission activity soon.",
            verdict: "weak",
            feedback: "No such commitment appears. “Investing in tomorrow” names no end point for today."
          }
        ]
      },
      {
        title: "02 · What evidence is offered?",
        prompt: "What substantiation does the communication actually provide?",
        options: [
          {
            text: "None that can be checked — no spending split, no dates, no named projects, no emissions trajectory.",
            verdict: "strongest",
            feedback: "Right. “Investing” is doing all the work, and it is unquantified. One pound or one billion would both make the sentence true."
          },
          {
            text: "The word “investing” implies money is moving, even if the scale is unknown.",
            verdict: "partial",
            feedback: "True as far as it goes — but an unverifiable implication is precisely what the evidence lens is meant to catch."
          },
          {
            text: "The company's long operating history shows it can deliver.",
            verdict: "weak",
            feedback: "Operating history is not evidence about the transition claim. Past delivery of supply says nothing about future delivery of change."
          }
        ]
      },
      {
        title: "03 · What is omitted?",
        prompt: "Which omission would most change how the claim is understood?",
        options: [
          {
            text: "Whether high-emission activity is growing, flat or shrinking while the clean story is told.",
            verdict: "strongest",
            feedback: "This is the decisive omission. A both-and claim reads completely differently if the “today” side is actually expanding."
          },
          {
            text: "Which specific clean technologies are being funded.",
            verdict: "partial",
            feedback: "Worth knowing — but even a named technology would not settle the balance question between the two halves of the sentence."
          },
          {
            text: "The visual branding used in the campaign.",
            verdict: "weak",
            feedback: "Presentation may reinforce the frame, but it is not the missing information that changes the claim's meaning."
          }
        ]
      },
      {
        title: "04 · What future is normalised?",
        prompt: "What does this message quietly make feel normal?",
        options: [
          {
            text: "A future where today's model continues, with transformation always one investment cycle away.",
            verdict: "strongest",
            feedback: "Yes — the sentence makes indefinite continuity feel like transition. Tomorrow remains permanently tomorrow."
          },
          {
            text: "A future with more clean technology in the energy mix.",
            verdict: "partial",
            feedback: "That future is gestured at — but with no pathway or dates, it functions as reassurance rather than plan."
          },
          {
            text: "A future of immediate, complete fossil phase-out.",
            verdict: "weak",
            feedback: "The sentence is built to avoid exactly that reading — “today's needs” anchors continuity, not exit."
          }
        ]
      }
    ]
  },
  {
    id: "security",
    tabTitle: "Card C",
    tabSub: "Energy security",
    label: "Card C / Energy-security claim",
    name: "HarbourGrid Supply",
    quote: "“Reliable domestic energy to keep the lights on for decades to come.”",
    note: "Reliability frame. Alternatives not named.",
    summary: "The reliability frame makes long-term dependence feel like simple prudence. <strong>Possible delay family: emphasise the downsides of action</strong> — change is implicitly cast as a threat to keeping the lights on.",
    lenses: [
      {
        title: "01 · What is claimed?",
        prompt: "Which reading best captures the central claim?",
        options: [
          {
            text: "Long-term continuation of current supply is equated with safety and reliability itself.",
            verdict: "strongest",
            feedback: "The claim fuses the company's continuity with everyone's security — questioning one starts to feel like questioning the other."
          },
          {
            text: "The company intends to keep supplying energy for decades.",
            verdict: "partial",
            feedback: "Literally present — but the persuasive work is done by the equation of that continuity with reassurance and common sense."
          },
          {
            text: "Household energy bills will stay low.",
            verdict: "weak",
            feedback: "Price is never mentioned. Security frames often let readers infer affordability without claiming it."
          }
        ]
      },
      {
        title: "02 · What evidence is offered?",
        prompt: "What substantiation does the communication actually provide?",
        options: [
          {
            text: "None — no demand data, no resilience comparison, no compatibility with climate targets.",
            verdict: "strongest",
            feedback: "Correct. The sentence offers confidence, not evidence — nothing shown about demand, alternatives, price risk or emissions."
          },
          {
            text: "“Domestic” hints at supply-chain security, though nothing is demonstrated.",
            verdict: "partial",
            feedback: "The word does carry that suggestion — which is exactly why it needs evidence rather than atmosphere to support it."
          },
          {
            text: "The confident, steady tone of the sentence.",
            verdict: "weak",
            feedback: "Tone again — reassurance is a rhetorical resource, not a substantiation of anything."
          }
        ]
      },
      {
        title: "03 · What is omitted?",
        prompt: "Which omission would most change how the claim is understood?",
        options: [
          {
            text: "That security can also come from efficiency, storage, grid upgrades and lower demand.",
            verdict: "strongest",
            feedback: "Yes — the frame presents one route to security as the only route. Naming the alternatives breaks the spell."
          },
          {
            text: "The exact remaining lifetime of the company's facilities.",
            verdict: "partial",
            feedback: "Interesting detail, but the deeper omission is the existence of entirely different ways to keep the lights on."
          },
          {
            text: "The company's customer service ratings.",
            verdict: "weak",
            feedback: "Unrelated to the security claim. Keep the omission lens on information that would change the claim's meaning."
          }
        ]
      },
      {
        title: "04 · What future is normalised?",
        prompt: "What does this message quietly make feel normal?",
        options: [
          {
            text: "A future where questioning long-term dependence feels like risking the lights going out.",
            verdict: "strongest",
            feedback: "Exactly — “for decades to come” makes dependence feel prudent and change feel reckless. That is the delay mechanism."
          },
          {
            text: "A stable, reassuring future for ordinary households.",
            verdict: "partial",
            feedback: "That is the surface feeling — the lens asks what arrangement is being made to feel permanent underneath it."
          },
          {
            text: "A future powered entirely by renewables.",
            verdict: "weak",
            feedback: "The sentence points the other way: it anchors the current arrangement, not a transformed one."
          }
        ]
      }
    ]
  }
];

/* ============ Delay-family quiz content ============ */
const QUIZ_FAMILIES = [
  { id: "redirect", label: "Redirect responsibility" },
  { id: "nontransformative", label: "Non-transformative solutions" },
  { id: "downsides", label: "Emphasise downsides" },
  { id: "surrender", label: "Surrender" }
];

const QUIZ_ITEMS = [
  {
    statement: "“Our footprint is ultimately driven by our customers' choices — calculate yours today.”",
    answer: "redirect",
    feedback: "The producer's decisions vanish and the individual's calculator appears. Classic redirection of responsibility."
  },
  {
    statement: "“We are exploring breakthrough capture technology that could transform our industry in the 2040s.”",
    answer: "nontransformative",
    feedback: "A distant technological promise stands in for near-term change — the current model continues while the breakthrough is awaited."
  },
  {
    statement: "“Rushing this transition would put thousands of jobs and household budgets at serious risk.”",
    answer: "downsides",
    feedback: "The costs of action are vivid and specific; the costs of delay are nowhere. That asymmetry is the tell."
  },
  {
    statement: "“Whatever we do here, global emissions will keep rising — no single country can change that.”",
    answer: "surrender",
    feedback: "If nothing anyone does matters, inaction becomes rational. Surrender often sounds like hard-headed realism."
  },
  {
    statement: "“Every small step counts — remember to recycle the pack after use.”",
    answer: "redirect",
    feedback: "The message hands the work to the end user's bin habits while the product system itself stays out of frame."
  },
  {
    statement: "“Our new fuel blend cuts emissions intensity per litre as we grow to meet rising demand.”",
    answer: "nontransformative",
    feedback: "An intensity improvement inside a growth story — totals can rise while every litre gets “cleaner”. The model itself is untouched."
  }
];

/* ============ Boot ============ */
document.addEventListener("DOMContentLoaded", () => {
  initialiseHeroSpecimen();
  initialiseClaimLab();
  initialiseDelayQuiz();
  initialiseRewriteLab();
  initialiseScrollReveal();
  initialiseNavHighlight();
  initialiseWorksheetPrint();
});

/* ============ Hero: interactive specimen ============ */
function initialiseHeroSpecimen() {
  const chips = Array.from(document.querySelectorAll(".chip[data-lens]"));
  const parts = Array.from(document.querySelectorAll(".spec-part"));
  const hint = document.getElementById("tray-hint");

  if (!chips.length || !parts.length) {
    return;
  }

  const hints = {
    claim: "Claim — “100% planet kind” promises everything and specifies nothing.",
    evidence: "Evidence — the only concrete detail is packaging weight.",
    omission: "Omission — no boundary: which impact, compared with what?",
    future: "Future — “a cleaner future” arrives by buying, not by changing."
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const lens = chip.dataset.lens;
      const wasActive = chip.getAttribute("aria-pressed") === "true";

      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      parts.forEach((p) => p.classList.remove("is-lit"));

      if (!wasActive) {
        chip.setAttribute("aria-pressed", "true");
        parts
          .filter((p) => p.dataset.part === lens)
          .forEach((p) => p.classList.add("is-lit"));
        if (hint) {
          hint.textContent = hints[lens] || "";
        }
      } else if (hint) {
        hint.textContent = "Tap a lens to inspect the claim.";
      }
    });
  });
}

/* ============ Claim lab ============ */
function initialiseClaimLab() {
  const tabsHost = document.querySelector("[data-lab-tabs]");
  const panelsHost = document.querySelector("[data-lab-panels]");

  if (!tabsHost || !panelsHost) {
    return;
  }

  LAB_CASES.forEach((labCase, caseIndex) => {
    tabsHost.appendChild(buildLabTab(labCase, caseIndex));
    panelsHost.appendChild(buildLabPanel(labCase, caseIndex));
  });

  const tabs = Array.from(tabsHost.querySelectorAll("[role=tab]"));

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateLabTab(index));
    tab.addEventListener("keydown", (event) => {
      const next = nextIndexForKey(event.key, index, tabs.length);
      if (next === null) {
        return;
      }
      event.preventDefault();
      tabs[next].focus();
      activateLabTab(next);
    });
  });

  function activateLabTab(activeIndex) {
    tabs.forEach((tab, index) => {
      const isActive = index === activeIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      if (panel) {
        panel.hidden = !isActive;
      }
    });
  }
}

function buildLabTab(labCase, index) {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "lab-tab" + (index === 0 ? " is-active" : "");
  tab.id = "tab-" + labCase.id;
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-selected", String(index === 0));
  tab.setAttribute("aria-controls", "panel-" + labCase.id);
  tab.innerHTML = escapeHtml(labCase.tabTitle) + "<span>" + escapeHtml(labCase.tabSub) + "</span>";
  return tab;
}

function buildLabPanel(labCase, index) {
  const panel = document.createElement("article");
  panel.className = "lab-panel";
  panel.id = "panel-" + labCase.id;
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", "tab-" + labCase.id);
  panel.hidden = index !== 0;

  const specimen = document.createElement("div");
  specimen.className = "lab-specimen";
  specimen.innerHTML =
    '<p class="mono-label">' + escapeHtml(labCase.label) + "</p>" +
    "<h3>" + escapeHtml(labCase.name) + "</h3>" +
    "<blockquote>" + escapeHtml(labCase.quote) + "</blockquote>" +
    '<p class="lab-note">' + escapeHtml(labCase.note) + "</p>";

  const analysis = document.createElement("div");
  analysis.className = "lab-analysis";

  const progress = document.createElement("p");
  progress.className = "lab-progress";
  progress.setAttribute("aria-live", "polite");
  progress.innerHTML =
    "<span data-progress-text>0 of " + labCase.lenses.length + " lenses used</span>" +
    '<span class="lab-progress-track"><span class="lab-progress-bar" data-progress-bar></span></span>';
  analysis.appendChild(progress);

  const answered = new Set();

  labCase.lenses.forEach((lens, lensIndex) => {
    analysis.appendChild(buildLensBlock(labCase, lens, lensIndex, () => {
      answered.add(lensIndex);
      updateLabProgress(panel, answered.size, labCase.lenses.length);
    }));
  });

  const summary = document.createElement("div");
  summary.className = "lab-summary";
  summary.hidden = true;
  summary.setAttribute("data-lab-summary", "");
  summary.innerHTML = labCase.summary;
  analysis.appendChild(summary);

  panel.appendChild(specimen);
  panel.appendChild(analysis);
  return panel;
}

function buildLensBlock(labCase, lens, lensIndex, onAnswered) {
  const block = document.createElement("div");
  block.className = "lens-block";

  const title = document.createElement("p");
  title.className = "lens-title";
  title.textContent = lens.title;

  const prompt = document.createElement("p");
  prompt.className = "lens-prompt";
  prompt.textContent = lens.prompt;

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "lens-options";
  optionsWrap.setAttribute("role", "group");
  optionsWrap.setAttribute("aria-label", lens.title + " options");

  const verdictTag = document.createElement("span");
  verdictTag.className = "lens-verdict";
  verdictTag.hidden = true;

  const feedback = document.createElement("p");
  feedback.className = "lens-feedback";
  feedback.setAttribute("aria-live", "polite");

  const verdictLabels = {
    strongest: "Strongest reading",
    partial: "Partly there",
    weak: "Look again"
  };

  const shuffled = shuffle(lens.options.map((option, i) => ({ option, i })));

  shuffled.forEach(({ option }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lens-option";
    button.innerHTML = '<span class="marker" aria-hidden="true">✓</span><span>' + escapeHtml(option.text) + "</span>";

    button.addEventListener("click", () => {
      optionsWrap.querySelectorAll(".lens-option").forEach((b) => b.classList.remove("is-chosen"));
      button.classList.add("is-chosen");

      verdictTag.hidden = false;
      verdictTag.className = "lens-verdict v-" + option.verdict;
      verdictTag.textContent = verdictLabels[option.verdict] || option.verdict;
      feedback.textContent = option.feedback;

      onAnswered();
    });

    optionsWrap.appendChild(button);
  });

  block.appendChild(title);
  block.appendChild(prompt);
  block.appendChild(optionsWrap);
  block.appendChild(verdictTag);
  block.appendChild(feedback);
  return block;
}

function updateLabProgress(panel, used, total) {
  const text = panel.querySelector("[data-progress-text]");
  const bar = panel.querySelector("[data-progress-bar]");
  const summary = panel.querySelector("[data-lab-summary]");

  if (text) {
    text.textContent = used + " of " + total + " lenses used";
  }
  if (bar) {
    bar.style.width = (used / total) * 100 + "%";
  }
  if (summary && used === total) {
    summary.hidden = false;
  }
}

/* ============ Delay-family quiz ============ */
function initialiseDelayQuiz() {
  const host = document.querySelector("[data-quiz-body]");
  const scoreEl = document.querySelector("[data-quiz-score]");

  if (!host) {
    return;
  }

  let firstTryCorrect = 0;
  let answeredCount = 0;

  QUIZ_ITEMS.forEach((item, index) => {
    const wrap = document.createElement("div");
    wrap.className = "quiz-item";

    const statement = document.createElement("p");
    statement.className = "quiz-statement";
    statement.innerHTML = '<span class="qnum">' + String(index + 1).padStart(2, "0") + "</span>" + escapeHtml(item.statement);

    const options = document.createElement("div");
    options.className = "quiz-options";

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    feedback.hidden = true;
    feedback.setAttribute("aria-live", "polite");

    let answered = false;

    QUIZ_FAMILIES.forEach((family) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = family.label;

      button.addEventListener("click", () => {
        if (answered) {
          return;
        }
        answered = true;
        answeredCount += 1;

        const isCorrect = family.id === item.answer;
        if (isCorrect) {
          firstTryCorrect += 1;
        }

        options.querySelectorAll(".quiz-option").forEach((b) => {
          b.disabled = true;
          const matches = b.textContent === labelFor(item.answer);
          b.classList.toggle("is-correct", matches);
        });
        if (!isCorrect) {
          button.classList.add("is-wrong");
        }

        feedback.hidden = false;
        feedback.classList.toggle("is-wrong", !isCorrect);
        feedback.textContent = (isCorrect ? "Yes. " : "Closest family: " + labelFor(item.answer) + ". ") + item.feedback;

        if (scoreEl) {
          scoreEl.textContent = firstTryCorrect + " / " + answeredCount + " first try";
        }
      });

      options.appendChild(button);
    });

    wrap.appendChild(statement);
    wrap.appendChild(options);
    wrap.appendChild(feedback);
    host.appendChild(wrap);
  });

  function labelFor(id) {
    const family = QUIZ_FAMILIES.find((f) => f.id === id);
    return family ? family.label : id;
  }
}

/* ============ Rewrite lab ============ */
function initialiseRewriteLab() {
  const output = document.getElementById("rewrite-output-text");
  const checkboxes = Array.from(document.querySelectorAll("[data-rewrite-part]"));
  const meterSegments = Array.from(document.querySelectorAll("[data-meter-seg]"));
  const strengthLabel = document.querySelector("[data-strength-label]");

  if (!output || !checkboxes.length) {
    return;
  }

  const parts = {
    scope: "We aim to reduce operational emissions by 60% by 2035, covering owned facilities and purchased electricity.",
    baseline: "The target uses a 2022 baseline and we will report interim progress every year.",
    exclusions: "Supply-chain emissions and product-use emissions are not yet included.",
    uncertainty: "Remaining emissions would require verified removals, and the pathway may change as methods improve."
  };

  const strengthLabels = [
    "Vague slogan — nothing to test",
    "Still mostly mood",
    "Getting inspectable",
    "Substantially clearer",
    "Transparent and testable"
  ];

  const update = () => {
    const selected = checkboxes.filter((box) => box.checked);

    output.textContent = selected.length
      ? selected.map((box) => parts[box.dataset.rewritePart]).filter(Boolean).join(" ")
      : "A more transparent claim needs at least one clear boundary, source of evidence or stated uncertainty.";

    meterSegments.forEach((segment, index) => {
      segment.classList.toggle("is-on", index < selected.length);
    });

    if (strengthLabel) {
      strengthLabel.textContent = strengthLabels[selected.length] || "";
    }
  };

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", update));
  update();
}

/* ============ Scroll reveal ============ */
function initialiseScrollReveal() {
  const targets = Array.from(document.querySelectorAll(".reveal"));

  if (!targets.length) {
    return;
  }

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach((el) => observer.observe(el));
}

/* ============ Nav highlight ============ */
function initialiseNavHighlight() {
  const links = Array.from(document.querySelectorAll("[data-nav]"));

  if (!links.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sections = links
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      links.forEach((link) => {
        link.classList.toggle("is-current", link.dataset.nav === entry.target.id);
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach((section) => observer.observe(section));
}

/* ============ Worksheet printing ============ */
function initialiseWorksheetPrint() {
  const button = document.querySelector("[data-print-worksheet]");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    document.body.classList.add("print-worksheet");
    window.print();
  });

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-worksheet");
  });
}

/* ============ Utilities ============ */
function nextIndexForKey(key, currentIndex, total) {
  if (key === "ArrowRight" || key === "ArrowDown") {
    return (currentIndex + 1) % total;
  }
  if (key === "ArrowLeft" || key === "ArrowUp") {
    return (currentIndex - 1 + total) % total;
  }
  return null;
}

function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
