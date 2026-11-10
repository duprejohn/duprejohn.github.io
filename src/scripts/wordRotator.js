// Flips through the words in .word-rotator, one at a time, sliding up.
// Without JavaScript (or with reduced motion) only the first word shows.
export default function initWordRotator() {
  const rotators = document.querySelectorAll(".word-rotator");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  rotators.forEach((rotator) => {
    const words = [...rotator.querySelectorAll(".word-rotator__word")];
    if (words.length < 2 || reduceMotion) return;

    let current = 0;
    const fitTo = (word) => {
      rotator.style.width = `${word.offsetWidth}px`;
    };

    rotator.classList.add("is-ready");
    fitTo(words[current]);
    window.addEventListener("resize", () => fitTo(words[current]));
    // Re-measure once the web font loads; the first measurement uses the fallback font
    if (document.fonts) document.fonts.ready.then(() => fitTo(words[current]));

    setInterval(() => {
      const leaving = words[current];
      current = (current + 1) % words.length;
      const entering = words[current];

      leaving.classList.remove("is-active");
      leaving.classList.add("is-leaving");
      entering.classList.add("is-active");
      fitTo(entering);

      setTimeout(() => leaving.classList.remove("is-leaving"), 700);
    }, Number(rotator.dataset.interval) || 2600);
  });
}
