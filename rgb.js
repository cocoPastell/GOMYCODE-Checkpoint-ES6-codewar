function rgb(r, g, b) {
  const hexR = Math.max(0, Math.min(255, r)).toString(16).padStart(2, "0");
  const hexG = Math.max(0, Math.min(255, g)).toString(16).padStart(2, "0");
  const hexB = Math.max(0, Math.min(255, b)).toString(16).padStart(2, "0");

  const R = hexR.toUpperCase();
  const G = hexG.toUpperCase();
  const B = hexB.toUpperCase();

  return `${R}${G}${B}`;
}
