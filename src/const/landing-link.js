// Text of the outbound link at the end of the landing copy.
//
// Plain JS (not .ts) so `scripts/prerender.js` can import it directly under
// plain Node. The prerender waits for this string to appear in the DOM before
// snapshotting — the landing paragraphs are typed out character by character,
// and this link is the last thing typed. Defining it once keeps the copy and
// the prerender's ready-signal from drifting apart.
export const LANDING_LINK_TEXT = "Check it out";
