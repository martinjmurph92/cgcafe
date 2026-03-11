/**
 * Utility to check if the code is running in a browser environment.
 */
export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
