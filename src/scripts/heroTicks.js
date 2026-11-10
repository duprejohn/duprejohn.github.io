// Draws ruler ticks along the slanted inner edges of the hero bands (see _hero.scss),
// sets --hero-angle so the hero text can be skewed to match the edges, and --hero-text-shift
// so the text sits centered between the slanted bands.
// Each tick is perpendicular to its edge. The band sizes come from the same CSS variables
// the bands use (--hero-band, --hero-slope), read through probe elements so they always match.
const SPACING = 12; // px between ticks, measured along the edge
const LENGTHS = { major: 18, mid: 12, minor: 7 }; // every 10th / every 5th / the rest
const SVG_NS = "http://www.w3.org/2000/svg";

function cssLength(hero, varName) {
  const probe = document.createElement("div");
  probe.style.cssText = `position:absolute;visibility:hidden;height:var(${varName})`;
  hero.appendChild(probe);
  const px = probe.offsetHeight;
  probe.remove();
  return px;
}

function draw(hero, svg) {
  const w = hero.clientWidth;
  const h = hero.clientHeight;
  const band = cssLength(hero, "--hero-band");
  const slope = cssLength(hero, "--hero-slope");
  const theta = Math.atan2(slope, w); // edges rise to the right by `slope` over the full width
  const ux = Math.cos(theta), uy = -Math.sin(theta); // along the edge
  const nx = Math.sin(theta), ny = Math.cos(theta); // perpendicular to it (down-right)
  const edgeLength = Math.hypot(w, slope);
  // The hero text is skewed to this same angle (see .container in _hero.scss)
  hero.style.setProperty("--hero-angle", `${-theta}rad`);
  centerText(hero, w, h, band, slope);

  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  let lines = "";
  const edges = [
    { x: 0, y: band + slope, inward: -1 }, // top band: ticks point up into the navy
    { x: 0, y: h - band, inward: 1 }, // bottom band: ticks point down into the sky
  ];
  edges.forEach(({ x, y, inward }) => {
    for (let i = 1, d = SPACING; d < edgeLength; i++, d += SPACING) {
      const len = i % 10 === 0 ? LENGTHS.major : i % 5 === 0 ? LENGTHS.mid : LENGTHS.minor;
      const x1 = x + ux * d, y1 = y + uy * d;
      const x2 = x1 + nx * len * inward, y2 = y1 + ny * len * inward;
      const cls = i % 5 === 0 ? "hero-ticks__major" : "hero-ticks__minor";
      lines += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    }
  });
  svg.innerHTML = lines;
}

// Flex centering assumes flat edges, but at the left (where the text starts) the top band is
// thickest and the bottom band thinnest, so the text rides high. Measure both gaps at the text's
// left edge and shift the text so the space above and below it is equal.
function centerText(hero, w, h, band, slope) {
  const container = hero.querySelector(".container");
  const title = hero.querySelector(".hero-title");
  const cta = hero.querySelector(".hero-cta");
  if (!container || !title || !cta) return;
  const saved = container.style.transform;
  container.style.transform = "none"; // measure the unskewed layout
  const hr = hero.getBoundingClientRect();
  const cr = container.getBoundingClientRect();
  const top = title.getBoundingClientRect().top - hr.top;
  const bottom = cta.getBoundingClientRect().bottom - hr.top;
  const x0 = title.getBoundingClientRect().left - hr.left;
  container.style.transform = saved;
  const lift = (x0 - (cr.left - hr.left)) * (slope / w); // the skew raises the text this much at x0
  const gapAbove = top - lift - (band + slope * (1 - x0 / w));
  const gapBelow = h - band - slope * (x0 / w) - (bottom - lift);
  hero.style.setProperty("--hero-text-shift", `${((gapBelow - gapAbove) / 2).toFixed(1)}px`);
}

export default function initHeroTicks() {
  const hero = document.getElementById("hero");
  if (!hero) return;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "hero-ticks");
  svg.setAttribute("aria-hidden", "true");
  hero.prepend(svg);

  let frame;
  const redraw = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => draw(hero, svg));
  };
  redraw();
  window.addEventListener("resize", redraw);
  // Text height changes when the web font arrives, so center again then
  if (document.fonts) document.fonts.ready.then(redraw);
}
