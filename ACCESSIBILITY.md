# Accessibility checklist (WCAG 2.2 AA)

Every change to this site gets checked against this list before it's pushed. Last full audit: 2026-11-09.

## Before every push
1. **Automated scan:** load the page and run axe-core (WCAG 2.0/2.1/2.2 A and AA + best practices). Zero violations.
   Review anything axe marks "incomplete" (usually contrast over gradients or pseudo-elements) by hand.
2. **Keyboard:** Tab through the whole page. Every link and button is reachable, in a sensible order, with a
   visible focus ring (navy on white, white on blue/gray sections). Nothing traps focus.
3. **Screen reader text:** check the accessibility tree (or VoiceOver: Cmd+F5 on Mac, triple-click side button on iPhone).
   - One `h1`, then `h2` per section, `h3` per work card. No skipped levels.
   - Every image has alt text that says what it shows; decorative graphics are `aria-hidden="true"`.
   - Every link and button has a name that makes sense out of context. Icon-only controls use `aria-label`
     or a `visually-hidden` label.
   - Links that open a new tab say so (`<span class="visually-hidden"> (opens in a new tab)</span>`).
   - All content sits inside a landmark (`main` or `footer`).
4. **Contrast:** text 4.5:1 (large text 3:1); buttons, borders and focus rings 3:1 against their background.
   Current palette: navy `#1d4e89`, sky `#2b78c2`, text `#272341`, footer `#333333` / `#b3b3b3`. White on sky is 4.6:1.
5. **Motion:** anything that moves on its own for more than 5 seconds has a pause control (WCAG 2.2.2).
   Respect `prefers-reduced-motion`: no sliding or tilting; fades are fine.
6. **Zoom and small screens:** works at 320px wide and at 200% zoom with no sideways scrolling or cut-off text.
7. **Targets:** buttons and icon links are at least 24×24px (aim for 44×44).

## How the tricky parts work
- **Rotating hero word:** the moving words are `aria-hidden`; screen readers get the full list as hidden text.
  A pause/play button (`.rotator-toggle`) stops it. With Reduce Motion on, words fade instead of slide.
- **Diagonal bands and ruler ticks:** decorative, so the tick SVG is `aria-hidden`.
- **Skewed hero text:** a visual transform only; screen readers and zoom are unaffected.
- **Focus ring:** set explicitly in `sass/base/_base.scss`, because the template's gradient text is transparent,
  which made the browser's default ring invisible.

## Known gap
- **Resume PDF** (`src/assets/resume.pdf`) is not a tagged PDF, so screen readers read it as plain text without
  headings or structure. An HTML or tagged version would fix this.
