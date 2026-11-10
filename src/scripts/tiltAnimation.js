import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  // Skip the hover tilt for people who ask their device to reduce motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
