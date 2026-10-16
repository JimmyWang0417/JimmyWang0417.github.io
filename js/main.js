(function () {
  const STORAGE_KEY = "homepage-lang";
  const supported = ["en", "zh"];
  const titleEn = "Junrui Wang \u00b7 \u738b\u541b\u777f";
  const titleZh = "\u738b\u541b\u777f \u00b7 Junrui Wang";

  function resolveLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    if (fromQuery && supported.includes(fromQuery)) {
      return fromQuery;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && supported.includes(stored)) {
        return stored;
      }
    } catch (_) {
      /* ignore */
    }
    return "en";
  }

  function applyLang(lang, { fade } = { fade: false }) {
    const dict = window.SITE_I18N[lang] || window.SITE_I18N.en;
    const run = () => {
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key || !(key in dict)) return;
        el.innerHTML = dict[key];
      });
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        const active = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
      document.title = lang === "zh" ? titleZh : titleEn;
    };

    if (fade) {
      document.body.classList.add("is-fading");
      window.setTimeout(() => {
        run();
        document.body.classList.remove("is-fading");
      }, 120);
    } else {
      run();
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }

    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url);
  }

  function setupLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!supported.includes(lang)) return;
        applyLang(lang, { fade: true });
      });
    });
  }

  function setupActiveSection() {
    const links = Array.from(document.querySelectorAll(".nav a"));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const id = visible[0].target.id;
        links.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${id}`
          );
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(resolveLang());
    setupLangSwitch();
    setupActiveSection();
  });
})();
