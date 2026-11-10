// Flips through the words in .word-rotator, one at a time, sliding up.
// Without JavaScript only the first word shows. With Reduce Motion on, words fade instead of slide.
// The width is only pinned during a flip (so it can animate); otherwise it sizes to the
// active word naturally, which avoids clipping before the web font loads.
export default function initWordRotator() {
  const rotators = document.querySelectorAll(".word-rotator");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  rotators.forEach((rotator) => {
    const words = [...rotator.querySelectorAll(".word-rotator__word")];
    if (words.length < 2) return;

    let current = 0;
    rotator.classList.add("is-ready");
    if (reduceMotion) rotator.classList.add("is-fade");

    const flip = () => {
      const leaving = words[current];
      current = (current + 1) % words.length;
      const entering = words[current];

      rotator.style.width = `${leaving.offsetWidth}px`;
      rotator.offsetWidth; // apply the starting width before animating
      leaving.classList.remove("is-active");
      leaving.classList.add("is-leaving");
      entering.classList.add("is-active");
      rotator.style.width = `${entering.offsetWidth}px`;

      setTimeout(() => {
        leaving.classList.remove("is-leaving");
        rotator.style.width = "";
      }, 700);
    };

    // Pause/play button (WCAG 2.2.2): anything that moves on its own for more than 5 seconds
    // needs a way to stop it.
    const interval = Number(rotator.dataset.interval) || 2600;
    let timer = setInterval(flip, interval);
    const toggle = document.querySelector(".rotator-toggle");
    if (!toggle) return;
    const icon = toggle.querySelector(".fa");
    const label = toggle.querySelector(".rotator-toggle__label");
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const paused = toggle.getAttribute("aria-pressed") !== "true";
      toggle.setAttribute("aria-pressed", String(paused));
      label.textContent = paused ? "Play animation" : "Pause animation";
      toggle.title = label.textContent;
      icon.className = `fa ${paused ? "fa-play" : "fa-pause"}`;
      if (paused) {
        clearInterval(timer);
      } else {
        flip();
        timer = setInterval(flip, interval);
      }
    });
    toggle.title = label.textContent;
  });
}
