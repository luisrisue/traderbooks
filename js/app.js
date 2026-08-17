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

  // Tienda principal: la del idioma real de esta edicion del libro (no la interfaz). Resto como banderas pequenyas.
  const mainStore = storeFor(book.lang);
  const others = STORES.filter(s => s.lang !== book.lang).map(store =>
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

function featuredForLang(lang) {
  const inLang = BOOKS.filter(book => book.lang === lang);
  const destacados = inLang.filter(book => book.destacado);
  if (destacados.length >= 4) return destacados;
  const resto = inLang.filter(book => !book.destacado);
  return [...destacados, ...resto].slice(0, 6);
}

function viewHome() {
  const featured = featuredForLang(state.lang);
  const catCount = Object.keys(CATS).length;
  const faqItems = (I18N[state.lang] && I18N[state.lang].faq) || I18N.es.faq;
  const faqHtml = faqItems.map((item, i) => `
    <details class="faq-item reveal"${i === 0 ? " open" : ""}>
      <summary>${esc(item.q)}</summary>
      <p>${esc(item.a)}</p>
    </details>`).join("");
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
  <section id="notice"><div class="container">
    <div class="notice-box reveal">
      <span class="notice-icon">🎁</span>
      <div>
        <p>${esc(t("notice_p1"))}</p>
        <p>${esc(t("notice_p2"))}</p>
      </div>
    </div>
  </div></section>
  <section id="featured"><div class="container">
    <h2 class="section-title">${esc(t("featured"))}</h2>
    <p class="section-sub">${esc(t("featured_sub"))}</p>
    <div class="grid">${featured.map(bookCard).join("")}</div>
    <div class="center"><a class="btn ghost" href="#books">${esc(t("view_all"))} →</a></div>
  </div></section>
  <section id="faq"><div class="container">
    <h2 class="section-title">${esc(t("faq_title"))}</h2>
    <p class="section-sub">${esc(t("faq_sub"))}</p>
    <div class="faq-list">${faqHtml}</div>
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

/* ---------- Glosario ---------- */

let glossaryQuery = "";

function filteredGlossary() {
  const q = glossaryQuery.trim().toLowerCase();
  const list = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
  if (!q) return list;
  return list.filter(item =>
    item.term.toLowerCase().includes(q) || L(item.def).toLowerCase().includes(q)
  );
}

function glossaryListHtml() {
  const list = filteredGlossary();
  if (!list.length) {
    return `<p class="empty-inline">${esc(t("glossary_no_results"))}</p>`;
  }
  return list.map(item => `
    <div class="glossary-item reveal">
      <h3>${esc(item.term)}</h3>
      <p>${esc(L(item.def))}</p>
      <a class="glossary-tag" href="#books" data-cat="${esc(item.cat)}">${esc(t("glossary_related"))} ${esc(L(CATS[item.cat]) || item.cat)} →</a>
    </div>`).join("");
}

function refreshGlossaryList() {
  const list = document.getElementById("glossaryList");
  if (!list) return;
  list.innerHTML = glossaryListHtml();
  bindGlossaryTags();
}

function bindGlossaryTags() {
  document.querySelectorAll(".glossary-tag").forEach(tag => {
    tag.onclick = () => { state.filter = tag.dataset.cat; };
  });
}

function viewGlossary() {
  return `<section id="glossary"><div class="container">
    <h2 class="section-title">${esc(t("glossary_title"))}</h2>
    <p class="section-sub">${esc(t("glossary_sub"))}</p>
    <div class="toolbar">
      <input type="search" id="glossarySearch" placeholder="${esc(t("glossary_search_placeholder"))}" value="${esc(glossaryQuery)}" aria-label="${esc(t("glossary_search_placeholder"))}">
    </div>
    <div class="glossary-list" id="glossaryList">${glossaryListHtml()}</div>
  </div></section>`;
}

function bindGlossaryToolbar() {
  const search = document.getElementById("glossarySearch");
  if (search) {
    search.oninput = () => {
      glossaryQuery = search.value;
      refreshGlossaryList();
    };
  }
  bindGlossaryTags();
}

/* ---------- Articulos ---------- */

function renderArticleBlock(b) {
  switch (b.tipo) {
    case "h3": return `<h3>${esc(L(b.t))}</h3>`;
    case "h4": return `<h4>${esc(L(b.t))}</h4>`;
    case "p": return `<p>${esc(L(b.t))}</p>`;
    case "lista": return `<ul>${b.items.map(item => `<li>${esc(L(item))}</li>`).join("")}</ul>`;
    case "imagen": return `<figure class="article-figure reveal">
        <img src="${esc(b.src)}" alt="${esc(L(b.alt))}" loading="lazy">
        ${b.leyenda ? `<figcaption>${esc(L(b.leyenda))}</figcaption>` : ""}
      </figure>`;
    default: return "";
  }
}

function estimateReadMinutes(article) {
  let words = 0;
  article.bloques.forEach(b => {
    if (b.t) words += L(b.t).trim().split(/\s+/).length;
    if (b.items) words += b.items.reduce((sum, item) => sum + L(item).trim().split(/\s+/).length, 0);
  });
  return Math.max(3, Math.round(words / 200));
}

function articleFullHtml(article, index) {
  const readMin = estimateReadMinutes(article);
  return `<article class="article-full reveal" id="${esc(article.id)}">
    <div class="article-header">
      <span class="article-num">${String(index + 1).padStart(2, "0")}</span>
      <h2>${esc(L(article.titulo))}</h2>
      <p class="article-meta">${readMin} ${esc(t("articles_read_time"))}</p>
    </div>
    ${article.imagenPortada ? `<div class="article-cover"><img src="${esc(article.imagenPortada)}" alt="${esc(L(article.titulo))}" loading="lazy"></div>` : ""}
    <div class="article-body">
      ${article.bloques.map(renderArticleBlock).join("")}
      <p class="disclaimer-box">${esc(L(article.aviso))}</p>
    </div>
    <a class="back-index-link" href="#articles" data-scroll-to="articlesIndex">↑ ${esc(t("articles_back_index"))}</a>
  </article>`;
}

function viewArticles() {
  const items = ARTICULOS.map(a =>
    `<li><a href="#articles" data-scroll-to="${esc(a.id)}">${esc(L(a.titulo))}</a></li>`
  ).join("");
  return `<section id="articles"><div class="container">
    <h2 class="section-title">${esc(t("articles_title"))}</h2>
    <p class="section-sub">${esc(t("articles_sub"))}</p>
    <nav class="articles-index reveal" id="articlesIndex" aria-label="${esc(t("articles_index_title"))}">
      <h3>${esc(t("articles_index_title"))}</h3>
      <ol>${items}</ol>
    </nav>
    <div class="articles-list">
      ${ARTICULOS.map((a, i) => articleFullHtml(a, i)).join("")}
    </div>
  </div></section>`;
}

function bindArticlesToolbar() {
  document.querySelectorAll("[data-scroll-to]").forEach(link => {
    link.onclick = (ev) => {
      ev.preventDefault();
      const target = document.getElementById(link.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  });
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

  const oldGlossary = document.getElementById("glossary-schema");
  if (oldGlossary) oldGlossary.remove();
  if (state.route === "glossary") {
    const glossaryData = {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: t("glossary_title"),
      description: t("glossary_sub"),
      inDefinedTermSet: "https://traderbooks.net/#glossary",
      hasDefinedTerm: GLOSSARY.map(item => ({
        "@type": "DefinedTerm",
        name: item.term,
        description: L(item.def)
      }))
    };
    const glossaryScript = document.createElement("script");
    glossaryScript.id = "glossary-schema";
    glossaryScript.type = "application/ld+json";
    glossaryScript.textContent = JSON.stringify(glossaryData);
    document.head.appendChild(glossaryScript);
  }

  const oldArticles = document.getElementById("articles-schema");
  if (oldArticles) oldArticles.remove();
  if (state.route === "articles") {
    const langNames = { es: "es", en: "en", fr: "fr", de: "de", it: "it" };
    const articlesData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: t("articles_title"),
      description: t("articles_sub"),
      blogPost: ARTICULOS.map(a => ({
        "@type": "BlogPosting",
        "@id": `https://traderbooks.net/#${a.id}`,
        headline: L(a.titulo),
        description: L(a.resumen),
        inLanguage: langNames[state.lang] || "es",
        image: `https://traderbooks.net/${a.imagenPortada}`,
        author: { "@type": "Person", name: "Luis Risueño Gómez" }
      }))
    };
    const articlesScript = document.createElement("script");
    articlesScript.id = "articles-schema";
    articlesScript.type = "application/ld+json";
    articlesScript.textContent = JSON.stringify(articlesData);
    document.head.appendChild(articlesScript);
  }

  const oldFaq = document.getElementById("faq-schema");
  if (oldFaq) oldFaq.remove();
  if (state.route === "home" || state.route === "featured") {
    const faqItems = (I18N[state.lang] && I18N[state.lang].faq) || I18N.es.faq;
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    };
    const faqScript = document.createElement("script");
    faqScript.id = "faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);
  }
}

/* ---------- Router ---------- */

function router() {
  const hash = (location.hash || "#home").replace("#", "");
  state.route = ["home", "articles", "books", "glossary", "author", "contact", "featured"].includes(hash) ? hash : "home";
  const routeView = state.route === "featured" ? "home" : state.route;
  const view = document.getElementById("view");
  view.innerHTML = routeView === "home" ? viewHome()
    : routeView === "articles" ? viewArticles()
    : routeView === "books" ? viewBooks()
    : routeView === "glossary" ? viewGlossary()
    : routeView === "author" ? viewAuthor()
    : viewContact();
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${routeView}`);
  });
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.remove("open");
  if (routeView === "books") bindBooksToolbar();
  if (routeView === "glossary") bindGlossaryToolbar();
  if (routeView === "articles") bindArticlesToolbar();
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
