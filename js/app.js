let state = {
  lang: (typeof LANGS !== "undefined" && LANGS.some(l => l.code === localStorage.getItem("lrg_lang"))) ? localStorage.getItem("lrg_lang") : "es",
  filter: "all",      // categoria
  editionLang: "all", // idioma de la edicion
  query: "",          // busqueda por titulo
  route: "home"
};

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.es[key] || key;
}

function L(obj) {
  if (!obj) return "";
  return obj[state.lang] || obj.es || Object.values(obj)[0] || "";
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function langInfo(code) {
  return LANGS.find(l => l.code === code) || LANGS[0];
}

function storeFor(code) {
  return STORES.find(s => s.lang === code) || STORES[0];
}

function amazonUrl(book, store) {
  if (book.asin) return `https://www.${store.domain}/dp/${book.asin}`;
  return `https://www.${store.domain}/s?k=${encodeURIComponent(`Luis Risueño Gómez ${book.titulo}`)}`;
}

/* ---------- Cabecera ---------- */

function renderLangSwitch() {
  const wrap = document.getElementById("langSwitch");
  wrap.innerHTML = LANGS.map(lang =>
    `<button class="${lang.code === state.lang ? "active" : ""}" data-lang="${lang.code}" title="${esc(lang.name)}" aria-label="${esc(lang.name)}" aria-pressed="${lang.code === state.lang}">${lang.code.toUpperCase()}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(button => {
    button.onclick = () => setLang(button.dataset.lang);
  });
}

function setLang(code) {
  state.lang = code;
  localStorage.setItem("lrg_lang", code);
  document.documentElement.lang = code;
  renderAll();
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (I18N[state.lang] && I18N[state.lang][key]) element.textContent = I18N[state.lang][key];
  });
  const titles = {
    es: "Luis Risueño Gómez · Libros de Trading",
    en: "Luis Risueño Gómez · Trading Books",
    fr: "Luis Risueño Gómez · Livres de Trading",
    de: "Luis Risueño Gómez · Trading-Bücher",
    it: "Luis Risueño Gómez · Libri di Trading"
  };
  document.title = titles[state.lang] || titles.es;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("hero_sub"));
}

/* ---------- Tarjeta de libro ---------- */

function bookCard(book) {
  const edition = langInfo(book.lang);
  const categories = (book.categorias || []).map(category => {
    const name = L(CATS[category]) || category;
    return `<span class="chip">${esc(name)}</span>`;
  }).join("");

  // Tienda principal: la del idioma de la interfaz. Resto como banderas pequenyas.
  const mainStore = storeFor(state.lang);
  const others = STORES.filter(s => s.lang !== state.lang).map(store =>
    `<a class="store-flag" href="${amazonUrl(book, store)}" target="_blank" rel="noopener noreferrer sponsored" title="Amazon ${esc(L(store.label))}" aria-label="Amazon ${esc(L(store.label))}">${store.code}</a>`
  ).join("");

  const cover = book.portada
    ? `<img class="cover-bg" src="${esc(book.portada)}" alt="" aria-hidden="true" loading="lazy">
       <img class="cover-img" src="${esc(book.portada)}" alt="${esc(book.titulo)}" loading="lazy">`
    : `<span class="cover-letter">${esc(book.titulo.trim().charAt(0).toUpperCase())}</span>`;

  return `<article class="card reveal">
    <div class="cover">
      ${cover}
      <span class="lang-badge" title="${esc(t("edition_in"))} ${esc(edition.name)}">${edition.code.toUpperCase()}</span>
    </div>
    <div class="card-body">
      <h3>${esc(book.titulo)}</h3>
      <p class="description">${esc(book.descripcion)}</p>
      <div class="cat">${categories}</div>
      <div class="stores">
        <a class="btn-amazon" href="${amazonUrl(book, mainStore)}" target="_blank" rel="noopener noreferrer sponsored">
          ${esc(t("view_on"))} ${esc(mainStore.domain.replace("www.", ""))} →
        </a>
        <div class="store-alt"><span>${esc(t("other_stores"))}</span>${others}</div>
      </div>
    </div>
  </article>`;
}

/* ---------- Vistas ---------- */

function viewHome() {
  const featured = BOOKS.filter(book => book.destacado);
  const catCount = Object.keys(CATS).length;
  return `<section class="hero" id="home">
    <div class="container">
      <p class="kicker">${esc(t("hero_kicker"))}</p>
      <h1><span class="grad">${esc(t("hero_title"))}</span></h1>
      <p class="hero-sub">${esc(t("hero_sub"))}</p>
      <div class="hero-actions">
        <a class="btn" href="#books">${esc(t("hero_cta"))}</a>
        <a class="btn ghost" href="#author">${esc(t("hero_cta2"))}</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>${BOOKS.length}</strong><span>${esc(t("stat_books"))}</span></div>
        <div class="stat"><strong>${LANGS.length}</strong><span>${esc(t("stat_langs"))}</span></div>
        <div class="stat"><strong>${catCount}</strong><span>${esc(t("stat_cats"))}</span></div>
      </div>
    </div>
  </section>
  <section id="featured"><div class="container">
    <h2 class="section-title">${esc(t("featured"))}</h2>
    <p class="section-sub">${esc(t("featured_sub"))}</p>
    <div class="grid">${featured.map(bookCard).join("")}</div>
    <div class="center"><a class="btn ghost" href="#books">${esc(t("view_all"))} →</a></div>
  </div></section>`;
}

function filteredBooks() {
  const q = state.query.trim().toLowerCase();
  return BOOKS.filter(book => {
    if (state.filter !== "all" && !(book.categorias || []).includes(state.filter)) return false;
    if (state.editionLang !== "all" && book.lang !== state.editionLang) return false;
    if (q && !book.titulo.toLowerCase().includes(q)) return false;
    return true;
  });
}

function booksGridHtml() {
  const list = filteredBooks();
  if (!list.length) {
    return `<div class="empty">
      <p>${esc(t("no_results"))}</p>
      <button class="btn ghost" id="clearFilters">${esc(t("clear_filters"))}</button>
    </div>`;
  }
  return `<div class="grid">${list.map(bookCard).join("")}</div>`;
}

function resultsText() {
  const n = filteredBooks().length;
  return `${n} ${n === 1 ? t("results_one") : t("results_many")}`;
}

function viewBooks() {
  const catButtons = `<button class="${state.filter === "all" ? "active" : ""}" data-cat="all">${esc(t("all"))}</button>` +
    Object.keys(CATS).map(category =>
      `<button class="${state.filter === category ? "active" : ""}" data-cat="${category}">${esc(L(CATS[category]))}</button>`
    ).join("");
  const langButtons = `<button class="${state.editionLang === "all" ? "active" : ""}" data-elang="all">${esc(t("all"))}</button>` +
    LANGS.map(lang =>
      `<button class="${state.editionLang === lang.code ? "active" : ""}" data-elang="${lang.code}">${esc(lang.name)}</button>`
    ).join("");

  return `<section id="books"><div class="container">
    <h2 class="section-title">${esc(t("all_books"))}</h2>
    <p class="section-sub">${esc(t("books_sub"))}</p>
    <div class="toolbar">
      <input type="search" id="bookSearch" placeholder="${esc(t("search_placeholder"))}" value="${esc(state.query)}" aria-label="${esc(t("search_placeholder"))}">
      <div class="filter-group"><span class="filter-label">${esc(t("category"))}</span><div class="filters" id="catFilters">${catButtons}</div></div>
      <div class="filter-group"><span class="filter-label">${esc(t("edition_lang"))}</span><div class="filters" id="langFilters">${langButtons}</div></div>
      <div class="results-count" id="resultsCount">${esc(resultsText())}</div>
    </div>
    <div id="booksGrid">${booksGridHtml()}</div>
  </div></section>`;
}

function viewAuthor() {
  const paras = ((I18N[state.lang] && I18N[state.lang].about_paras) || I18N.es.about_paras)
    .map(p => `<p>${esc(p)}</p>`).join("");
  return `<section id="author"><div class="container">
    <h2 class="section-title">${esc(t("about_title"))}</h2>
    <div class="author-layout">
      <figure class="author-photo reveal">
        <img src="img/autor.jpg" alt="Luis Risueño Gómez" loading="lazy">
        <figcaption>Luis Risueño Gómez</figcaption>
      </figure>
      <div class="prose reveal">
        ${paras}
        <p class="disclaimer-box">${esc(t("about_disclaimer"))}</p>
      </div>
    </div>
  </div></section>`;
}

function viewContact() {
  return `<section id="contact"><div class="container prose">
    <h2 class="section-title">${esc(t("contact_title"))}</h2>
    <p>${esc(t("contact_text"))}</p>
    <div class="contact-box"><a class="mail" href="mailto:${esc(t("email"))}">${esc(t("email"))}</a></div>
  </div></section>`;
}

/* ---------- Interaccion de la vista de libros ---------- */

function refreshBooksGrid() {
  const grid = document.getElementById("booksGrid");
  const count = document.getElementById("resultsCount");
  if (!grid) return;
  grid.innerHTML = booksGridHtml();
  if (count) count.textContent = resultsText();
  bindClearFilters();
}

function bindClearFilters() {
  const clear = document.getElementById("clearFilters");
  if (clear) clear.onclick = () => {
    state.filter = "all";
    state.editionLang = "all";
    state.query = "";
    router();
  };
}

function bindBooksToolbar() {
  const search = document.getElementById("bookSearch");
  if (search) {
    search.oninput = () => {
      state.query = search.value;
      refreshBooksGrid();
    };
  }
  document.querySelectorAll("#catFilters button").forEach(button => {
    button.onclick = () => {
      state.filter = button.dataset.cat;
      document.querySelectorAll("#catFilters button").forEach(b => b.classList.toggle("active", b === button));
      refreshBooksGrid();
    };
  });
  document.querySelectorAll("#langFilters button").forEach(button => {
    button.onclick = () => {
      state.editionLang = button.dataset.elang;
      document.querySelectorAll("#langFilters button").forEach(b => b.classList.toggle("active", b === button));
      refreshBooksGrid();
    };
  });
  bindClearFilters();
}

/* ---------- Datos estructurados (SEO) ---------- */

function injectStructuredData() {
  const old = document.getElementById("catalog-schema");
  if (old) old.remove();
  const langNames = { es: "es", en: "en", fr: "fr", de: "de", it: "it" };
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luis Risueño Gómez",
    jobTitle: "Autor de libros educativos sobre trading",
    email: "mailto:academiafx7@gmail.com",
    knowsAbout: ["Forex", "Smart Money Concepts", "ICT", "Price Action", "Scalping", "Trading Psychology", "Wyckoff"],
    mainEntity: BOOKS.map(book => ({
      "@type": "Book",
      name: book.titulo,
      author: { "@type": "Person", name: "Luis Risueño Gómez" },
      inLanguage: langNames[book.lang] || "es",
      description: book.descripcion,
      url: `https://www.amazon.es/dp/${book.asin}`
    }))
  };
  const script = document.createElement("script");
  script.id = "catalog-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/* ---------- Router ---------- */

function router() {
  const hash = (location.hash || "#home").replace("#", "");
  state.route = ["home", "books", "author", "contact", "featured"].includes(hash) ? hash : "home";
  const routeView = state.route === "featured" ? "home" : state.route;
  const view = document.getElementById("view");
  view.innerHTML = routeView === "home" ? viewHome()
    : routeView === "books" ? viewBooks()
    : routeView === "author" ? viewAuthor()
    : viewContact();
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${routeView}`);
  });
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.remove("open");
  if (routeView === "books") bindBooksToolbar();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderAll() {
  applyStaticI18n();
  renderLangSwitch();
  router();
  injectStructuredData();
}

/* ---------- Arranque ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle) toggle.onclick = () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  };
  const backTop = document.getElementById("backTop");
  if (backTop) {
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.addEventListener("hashchange", router);
  document.documentElement.lang = state.lang;
  renderAll();
});
