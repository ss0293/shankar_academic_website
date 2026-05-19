/* Shankar Sharma — academic website
   Small enhancements: theme toggle (persisted), active nav highlight.
   No external dependencies. */

(function () {
  const STORAGE_KEY = "ss-theme";
  const root = document.documentElement;

  // ----- Theme: apply early to avoid flash -----
  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  function preferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  applyTheme(preferredTheme());

  // ----- Bind UI after DOM is ready -----
  document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      const setIcon = () => {
        const t = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
        btn.innerHTML = t === "dark"
          ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
          : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      };
      setIcon();
      btn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        setIcon();
      });
    }

    // Active nav highlight
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === here || (here === "" && href === "index.html")) a.classList.add("active");
    });
  });
})();
