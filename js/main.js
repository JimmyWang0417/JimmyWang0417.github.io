(function () {
  var STORAGE_KEY = "jw-homepage-lang";
  var dict = window.SITE_I18N || {};

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = params.get("lang");
    if (fromQuery === "en" || fromQuery === "zh") return fromQuery;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch (_) {
      /* ignore */
    }
    return "en";
  }

  function applyLang(lang) {
    var strings = dict[lang] || dict.en;
    if (!strings) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(strings, key)) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && Object.prototype.hasOwnProperty.call(strings, key)) {
        el.innerHTML = strings[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "zh") return;
    document.body.classList.add("is-fading");
    window.setTimeout(function () {
      applyLang(lang);
      document.body.classList.remove("is-fading");
    }, 120);
  }

  function setupLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function setupActiveNav() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("main [data-section]")
    );
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav a[href^='#']")
    );
    if (!sections.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          links.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + id
            );
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  applyLang(resolveLang());
  setupLangSwitch();
  setupActiveNav();
})();
