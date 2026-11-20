import { siteData } from './content.js';

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const navigationEntry = performance.getEntriesByType('navigation')[0];
const isRefresh = navigationEntry?.type === 'reload';
if (isRefresh) {
  window.addEventListener('load', () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), { once: true });
}

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function hydrateSiteDetails() {
  const { contact } = siteData;
  qsa('[data-footer-director]').forEach((node) => { node.textContent = contact.director; });
  qsa('[data-contact-phone], [data-footer-phone]').forEach((node) => { node.textContent = contact.phone; });
  qsa('[data-contact-address], [data-footer-address]').forEach((node) => { node.textContent = contact.address; });
  qsa('[data-contact-email]').forEach((node) => { node.textContent = contact.email; node.href = `mailto:${contact.email}`; });
  qsa('[data-contact-whatsapp]').forEach((node) => {
    node.textContent = `WhatsApp ${contact.whatsapp}`;
    const digits = contact.whatsapp.replace(/\D/g, '');
    node.href = digits ? `https://wa.me/${digits}` : '#contact';
  });
  qsa('[data-contact-phone-link]').forEach((node) => { const digits = contact.phone.replace(/\D/g, ''); node.textContent = contact.phone; node.href = digits ? `https://wa.me/${digits}` : '#contact'; });
  qsa('[data-contact-instagram]').forEach((node) => { node.href = contact.instagram; });
  const story = qs('[data-about-story]'); if (story) story.textContent = siteData.about.story;
  const intro = qs('[data-about-intro]'); if (intro) intro.textContent = siteData.about.intro;
  const quote = qs('[data-about-quote]'); if (quote) quote.textContent = siteData.about.pullQuote;
  const highlights = qs('[data-about-highlights]'); if (highlights) highlights.innerHTML = siteData.about.highlights.map((item, index) => `<span><i>0${index + 1}</i>${item}</span>`).join('');
  const location = qs('[data-about-location]'); if (location) location.textContent = siteData.about.location;
  const experience = qs('[data-about-experience]'); if (experience) experience.textContent = siteData.about.experience;
  const capabilities = qs('[data-about-capabilities]'); if (capabilities) capabilities.textContent = siteData.about.capabilities;
}

function initHeader() {
  const header = qs('[data-header]');
  const menu = qs('[data-menu-toggle]');
  const nav = qs('[data-nav]');
  if (!header || !menu || !nav) return;
  nav.id = 'primary-navigation';
  let menuLastFocus = null;
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('b').textContent = 'Open menu';
    nav.classList.remove('is-open');
    menuLastFocus?.focus();
    menuLastFocus = null;
  };
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    if (open) closeMenu();
    else { menuLastFocus = document.activeElement; menu.setAttribute('aria-expanded', 'true'); menu.querySelector('b').textContent = 'Close menu'; nav.classList.add('is-open'); qs('a', nav)?.focus(); }
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(); });
  document.addEventListener('click', (event) => { if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
}

function initCarousel() {
  const root = qs('[data-carousel]'); if (!root) return;
  const stage = qs('[data-carousel-stage]', root); const indicators = qs('[data-carousel-indicators]', root);
  const slides = siteData.heroSlides; let active = 0; let paused = reducedMotion; let timer;
  stage.innerHTML = slides.map((slide, index) => `<div class="hero-slide ${index === 0 ? 'is-active' : ''}" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${slides.length}" aria-hidden="${index === 0 ? 'false' : 'true'}"><img src="${slide.image}" alt="${slide.alt}" loading="eager" decoding="async" fetchpriority="${index === 0 ? 'high' : 'auto'}" /></div>`).join('');
  indicators.innerHTML = slides.map((_, index) => `<button class="carousel-indicator" type="button" aria-label="Go to slide ${index + 1}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`).join('');
  const slideEls = qsa('.hero-slide', stage); const indicatorEls = qsa('.carousel-indicator', indicators);
  const render = (next) => {
    active = (next + slides.length) % slides.length;
    slideEls.forEach((el, i) => { el.classList.toggle('is-active', i === active); el.setAttribute('aria-hidden', String(i !== active)); });
    indicatorEls.forEach((el, i) => el.setAttribute('aria-current', String(i === active)));
  };
  const resetTimer = () => { clearInterval(timer); if (!paused) timer = setInterval(() => render(active + 1), 5000); };
  qs('[data-carousel-prev]', root).addEventListener('click', () => { render(active - 1); resetTimer(); });
  qs('[data-carousel-next]', root).addEventListener('click', () => { render(active + 1); resetTimer(); });
  indicatorEls.forEach((button, index) => button.addEventListener('click', () => { render(index); resetTimer(); }));
  const pause = qs('[data-carousel-pause]', root); const label = qs('[data-pause-label]', root);
  const setPaused = (value) => { paused = value; pause.setAttribute('aria-pressed', String(paused)); pause.setAttribute('aria-label', paused ? 'Play motion' : 'Pause motion'); label.textContent = paused ? 'Play motion' : 'Pause motion'; pause.querySelector('.pause-icon').textContent = paused ? '▶' : 'Ⅱ'; resetTimer(); };
  setPaused(paused);
  pause.addEventListener('click', () => setPaused(!paused));
  root.addEventListener('mouseenter', () => { if (!paused) clearInterval(timer); }); root.addEventListener('mouseleave', resetTimer);
  root.addEventListener('focusin', () => { if (!paused) clearInterval(timer); }); root.addEventListener('focusout', resetTimer);
  let startX = 0; stage.addEventListener('touchstart', (event) => { startX = event.changedTouches[0].screenX; }, { passive: true }); stage.addEventListener('touchend', (event) => { const delta = event.changedTouches[0].screenX - startX; if (Math.abs(delta) > 45) { render(active + (delta < 0 ? 1 : -1)); resetTimer(); } }, { passive: true });
  render(0);
}

function initServices() {
  const list = qs('[data-services]'); if (!list) return;
  list.innerHTML = siteData.services.map((service, index) => `<article class="service-item" data-service-item><span class="service-number">${service.number}</span><h3>${service.title}</h3><p class="service-summary">${service.summary}</p><button class="service-toggle" type="button" aria-expanded="false" aria-controls="service-detail-${index}" aria-label="Expand ${service.title}">+</button><div class="service-detail" id="service-detail-${index}" aria-hidden="true"><div><p>${service.detail}</p></div></div></article>`).join('');
  qsa('[data-service-item]', list).forEach((item) => { const button = qs('.service-toggle', item); button.addEventListener('click', () => { const open = item.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', `${open ? 'Collapse' : 'Expand'} ${qs('h3', item).textContent}`); qs('.service-detail', item).setAttribute('aria-hidden', String(!open)); }); });
}

function renderGalleryPreview() {
  const root = qs('[data-gallery-preview]'); if (!root) return;
  root.innerHTML = siteData.gallery.slice(0, 5).map((item) => `<a class="preview-card" href="/gallery.html"><img src="${item.image}" alt="${item.alt}" loading="lazy" /><figcaption><span>${item.category}</span><strong>${item.title}</strong></figcaption></a>`).join('');
}

function renderOfferings() {
  const root = qs('[data-offerings]'); if (!root) return;
  root.innerHTML = siteData.offerings.map((title, index) => `<article class="into-card" data-reveal tabindex="0" role="button" aria-label="Explore ${title}" style="--card-index:${index}"><span class="into-index">${String(index + 1).padStart(2, '0')}</span><span class="into-signal" aria-hidden="true"></span><h3>${title}</h3><span class="into-arrow" aria-hidden="true">↗</span></article>`).join('');
  qsa('.into-card', root).forEach((card) => {
    const toggle = () => card.classList.toggle('is-active');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); } });
  });
}

function initImmersiveSections() {
  const revealItems = qsa('[data-reveal]');
  if (!revealItems.length) return;
  revealItems.forEach((item) => item.classList.add('is-visible'));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .14, rootMargin: '0px 0px -8% 0px' });
  revealItems.forEach((item) => observer.observe(item));
  window.setTimeout(() => revealItems.forEach((item) => item.classList.add('is-visible')), 1200);
  qsa('[data-immersive-section]').forEach((section) => section.addEventListener('pointermove', (event) => {
    const rect = section.getBoundingClientRect();
    section.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    section.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }));
}

function trapFocus(container, event) {
  if (event.key !== 'Tab') return;
  const focusable = qsa('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])', container).filter((el) => !el.disabled && !el.hidden && el.getClientRects().length > 0);
  if (!focusable.length) return;
  const first = focusable[0]; const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

let lightboxLastFocus;
function initLightbox() {
  const root = qs('[data-gallery-grid]'); const modal = qs('[data-lightbox]'); if (!root || !modal) return;
  const items = siteData.gallery; let active = 0; let visibleIndices = items.map((_, index) => index);
  root.classList.toggle('original-gallery', items.some((item) => item.preserveOriginal));
  root.classList.add('compact-gallery');
  root.innerHTML = items.map((item, index) => `<button class="gallery-card ${item.preserveOriginal ? 'is-original' : ''}" type="button" data-gallery-index="${index}" aria-label="Open ${item.title}"><img src="${item.image}" alt="${item.alt}" ${item.width && item.height ? `width="${item.width}" height="${item.height}"` : ''} loading="lazy" /><figcaption><span>${item.category}</span><strong>${item.title}</strong></figcaption></button>`).join('');
  const galleryCards = qsa('[data-gallery-index]', root);
  const cardsByIndex = new Map(galleryCards.map((card) => [Number(card.dataset.galleryIndex), card]));
  const showGalleryCards = (indices) => {
    const included = new Set(indices);
    const orderedCards = indices.map((index) => cardsByIndex.get(index));
    galleryCards.forEach((card) => {
      card.hidden = !included.has(Number(card.dataset.galleryIndex));
      if (card.hidden) orderedCards.push(card);
    });
    // Move the existing nodes rather than rebuilding images or their listeners.
    root.append(...orderedCards);
  };
  const emptyState = document.createElement('p');
  emptyState.className = 'gallery-empty-state'; emptyState.hidden = true; emptyState.setAttribute('role', 'status'); emptyState.setAttribute('aria-live', 'polite');
  root.after(emptyState);
  const updateEmptyState = (categoryName) => {
    const empty = visibleIndices.length === 0;
    root.hidden = empty; emptyState.hidden = !empty;
    emptyState.textContent = empty ? `${categoryName} — Images coming soon. Select Pendant Sets under Display, or choose All to view available images.` : '';
  };
  const image = qs('[data-lightbox-image]', modal); const category = qs('[data-lightbox-category]', modal); const title = qs('[data-lightbox-title]', modal); const caption = qs('[data-lightbox-caption]', modal); const emailLink = qs('[data-lightbox-email]', modal); const whatsappLink = qs('[data-lightbox-whatsapp]', modal);
  const originalLink = document.createElement('a');
  originalLink.className = 'lightbox-original'; originalLink.textContent = 'View original full-resolution image ↗'; originalLink.target = '_blank'; originalLink.rel = 'noopener noreferrer'; originalLink.hidden = true;
  qs('figcaption', modal).append(originalLink);
  const render = (index) => { if (!visibleIndices.length || !visibleIndices.includes(index) || !items[index]) return; active = visibleIndices[(visibleIndices.indexOf(index) + visibleIndices.length) % visibleIndices.length]; const item = items[active]; const subject = encodeURIComponent(`Enquiry about ${item.title}`); const digits = siteData.contact.whatsapp.replace(/\D/g, ''); image.src = item.image; image.alt = item.alt; modal.classList.toggle('is-original', Boolean(item.preserveOriginal)); originalLink.href = item.image; originalLink.hidden = !item.preserveOriginal; category.textContent = item.category; title.textContent = item.title; caption.textContent = item.caption; emailLink.href = `mailto:${siteData.contact.email}?subject=${subject}`; emailLink.setAttribute('aria-label', `Email about ${item.title}`); whatsappLink.href = `https://wa.me/${digits}?text=${encodeURIComponent(`Hello Angels Display Solutions, I would like to enquire about ${item.title}.`)}`; whatsappLink.setAttribute('aria-label', `WhatsApp about ${item.title}`); };
  const open = (index) => { if (!visibleIndices.includes(index) || !items[index]) return; lightboxLastFocus = document.activeElement; render(index); modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); qs('.lightbox-close', modal).focus(); };
  const close = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); lightboxLastFocus?.focus(); };
  qsa('[data-gallery-index]', root).forEach((button) => button.addEventListener('click', () => open(Number(button.dataset.galleryIndex))));
  qsa('[data-lightbox-close]', modal).forEach((el) => el.addEventListener('click', close));
  qs('[data-lightbox-prev]', modal).addEventListener('click', () => render(visibleIndices[(visibleIndices.indexOf(active) - 1 + visibleIndices.length) % visibleIndices.length])); qs('[data-lightbox-next]', modal).addEventListener('click', () => render(visibleIndices[(visibleIndices.indexOf(active) + 1) % visibleIndices.length]));
  document.addEventListener('keydown', (event) => { if (!modal.classList.contains('is-open')) return; trapFocus(modal, event); if (event.key === 'Escape') close(); if (event.key === 'ArrowLeft') render(visibleIndices[(visibleIndices.indexOf(active) - 1 + visibleIndices.length) % visibleIndices.length]); if (event.key === 'ArrowRight') render(visibleIndices[(visibleIndices.indexOf(active) + 1) % visibleIndices.length]); });
  const filterRoot = qs('[data-gallery-filters]'); const categories = ['All', 'Showroom', 'Display', 'Packaging', 'Furniture']; const filterNote = qs('[data-gallery-filter-note]');
  filterRoot.innerHTML = categories.map((categoryName, index) => `<button class="filter-button ${index === 0 ? 'is-active' : ''}" type="button" data-gallery-filter="${categoryName}" aria-pressed="${index === 0}">${categoryName === 'All' ? 'All ' : categoryName}</button>`).join('');
  const typeRoot = qs('[data-display-types]'); const furnitureRoot = qs('[data-furniture-types]');
  // New, explicitly named sets must not inherit orphaned legacy numeric references.
  const getTypeIndices = (type) => type.items.filter((index) => items[index]?.category === 'Display' && (!items[index].displayType || items[index].displayType === type.name));
  const renderDisplayShelf = () => {
    if (!typeRoot) return;
    typeRoot.innerHTML = siteData.displayTypes.map((type, index) => {
      const typeIndices = getTypeIndices(type);
      const cover = typeIndices.includes(type.cover) ? items[type.cover] : null;
      const coverImage = cover ? `<img src="${cover.image}" alt="" loading="lazy" />` : '';
      return `<button class="display-type-chip ${type.preserveOriginal ? 'is-original' : ''}" type="button" data-display-type-index="${index}" ${typeIndices.length || type.showWhenEmpty ? '' : 'hidden disabled'} aria-pressed="false" aria-label="Open ${type.name} display gallery">${coverImage}<span><strong>${type.number ? `${type.number}. ` : ''}${type.name}</strong><small>${type.note}</small></span></button>`;
    }).join('');
    qsa('[data-display-type-index]', typeRoot).forEach((card) => card.addEventListener('click', () => {
      const type = siteData.displayTypes[Number(card.dataset.displayTypeIndex)];
      const typeIndices = getTypeIndices(type);
      if (!typeIndices.length && !type.showWhenEmpty) return;
      visibleIndices = typeIndices;
      updateEmptyState(type.name);
      showGalleryCards(visibleIndices);
      qsa('[data-display-type-index]', typeRoot).forEach((item) => { item.classList.toggle('is-active', item === card); item.setAttribute('aria-pressed', String(item === card)); });
      if (filterNote) filterNote.textContent = visibleIndices.length ? `${visibleIndices.length} views in ${type.name} · tap an image to enlarge` : `${type.name} · Images coming soon`;
    }));
  };
  renderDisplayShelf();
  if (furnitureRoot) { furnitureRoot.innerHTML = siteData.furnitureTypes.map((type, index) => `<button class="furniture-type-chip" type="button" data-furniture-type-index="${index}" aria-label="Open ${type.name} furniture gallery"><span><strong>${type.name}</strong><small>${type.note} · 0 images added</small></span></button>`).join(''); qsa('[data-furniture-type-index]', furnitureRoot).forEach((card) => card.addEventListener('click', () => { if (filterNote) filterNote.textContent = `${siteData.furnitureTypes[Number(card.dataset.furnitureTypeIndex)].name} · images coming soon`; })); }
  const applyFilter = (filter, sourceButton = null) => {
    visibleIndices = filter === 'All' ? items.map((_, index) => index) : items.map((item, index) => item.category === filter ? index : -1).filter((index) => index >= 0);
    root.classList.toggle('compact-gallery', filter === 'All' || filter === 'Display');
    root.classList.toggle('furniture-gallery', filter === 'Furniture');
    updateEmptyState(filter);
    showGalleryCards(visibleIndices);
    qsa('[data-gallery-filter]', filterRoot).forEach((el) => {
      const active = el === sourceButton || (!sourceButton && el.dataset.galleryFilter === 'All');
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-pressed', String(active));
    });
    if (typeRoot) {
      typeRoot.hidden = filter !== 'Display';
      qsa('[data-display-type-index]', typeRoot).forEach((card) => { card.classList.remove('is-active'); card.setAttribute('aria-pressed', 'false'); });
    }
    if (furnitureRoot) furnitureRoot.hidden = filter !== 'Furniture';
    if (filterNote) filterNote.textContent = `${visibleIndices.length} ${filter.toLowerCase()} pieces · tap an image to enlarge`;
  };
  qsa('[data-gallery-filter]', filterRoot).forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.galleryFilter, button)));
}

function formatPrice(value) { return `₹${value.toLocaleString('en-IN')}`; }

function initCart() {
  const drawer = qs('[data-cart-drawer]'); if (!drawer) return;
  const products = siteData.products; let cart = {};
  try {
    const saved = JSON.parse(localStorage.getItem('angels-cart') || '{}');
    if (saved && typeof saved === 'object') cart = Object.fromEntries(Object.entries(saved).filter(([id, qty]) => products.some((item) => item.id === id) && Number.isFinite(Number(qty)) && Number(qty) > 0).map(([id, qty]) => [id, Math.floor(Number(qty))]));
  } catch { cart = {}; }
  let cartLastFocus = null;
  const saveCart = () => localStorage.setItem('angels-cart', JSON.stringify(cart));
  const updateCount = () => { const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0); qsa('[data-cart-count]').forEach((node) => node.textContent = count); };
  const renderCart = () => {
    const itemsRoot = qs('[data-cart-items]', drawer); const totalRoot = qs('[data-cart-total]', drawer); const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
    itemsRoot.innerHTML = entries.length ? entries.map(([id, qty]) => { const item = products.find((product) => product.id === id); return `<article class="cart-item"><img src="${item.image}" alt="" /><div><h3>${item.name}</h3><small>${formatPrice(item.price)} / ${item.unit.replace('sample price / ', '')}</small><div class="cart-item-actions"><button class="quantity-button" type="button" data-cart-minus="${id}" aria-label="Decrease ${item.name} quantity">−</button><span>${qty}</span><button class="quantity-button" type="button" data-cart-plus="${id}" aria-label="Increase ${item.name} quantity">+</button><button class="remove-item" type="button" data-cart-remove="${id}">Remove</button></div></div><span class="cart-item-price">${formatPrice(item.price * qty)}</span></article>`; }).join('') : '<p class="empty-cart">Your cart is quiet for now.</p>';
    const total = entries.reduce((sum, [id, qty]) => sum + (products.find((product) => product.id === id).price * qty), 0); totalRoot.textContent = formatPrice(total);
    qsa('[data-cart-plus]', itemsRoot).forEach((button) => button.addEventListener('click', () => { cart[button.dataset.cartPlus]++; saveCart(); updateCount(); renderCart(); }));
    qsa('[data-cart-minus]', itemsRoot).forEach((button) => button.addEventListener('click', () => { cart[button.dataset.cartMinus]--; if (cart[button.dataset.cartMinus] <= 0) delete cart[button.dataset.cartMinus]; saveCart(); updateCount(); renderCart(); }));
    qsa('[data-cart-remove]', itemsRoot).forEach((button) => button.addEventListener('click', () => { delete cart[button.dataset.cartRemove]; saveCart(); updateCount(); renderCart(); }));
  };
  const openCart = () => { cartLastFocus = document.activeElement; drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); qs('.cart-panel [data-cart-close]', drawer).focus(); };
  const closeCart = () => { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); cartLastFocus?.focus(); cartLastFocus = null; };
  window.AngelsCart = { add(id) { cart[id] = (cart[id] || 0) + 1; saveCart(); updateCount(); renderCart(); openCart(); } };
  qsa('[data-cart-count]').forEach((node) => { const trigger = node.closest('a, button'); trigger?.addEventListener('click', (event) => { event.preventDefault(); openCart(); }); });
  qsa('[data-cart-close]', drawer).forEach((el) => el.addEventListener('click', closeCart));
  qs('[data-checkout]', drawer).addEventListener('click', () => { alert('Checkout prototype only — connect a secure payment and order system before launch.'); });
  document.addEventListener('keydown', (event) => { if (!drawer.classList.contains('is-open')) return; trapFocus(qs('.cart-panel', drawer), event); if (event.key === 'Escape') closeCart(); });
  updateCount(); renderCart();
}

function initStorefront() {
  const grid = qs('[data-product-grid]'); const filterRoot = qs('[data-product-filters]'); if (!grid || !filterRoot) return;
  const products = siteData.products; const categories = ['All', ...new Set(products.map((product) => product.category))]; let filter = 'All'; let search = '';
  const filterLabels = { 'Display Stands': '', 'Fixtures': '', 'Showroom Furniture': '', 'Packaging': '' };
  filterRoot.innerHTML = categories.map((category, index) => `<button class="filter-button ${index === 0 ? 'is-active' : ''}" type="button" data-product-filter="${category}" aria-label="${category}" aria-pressed="${index === 0}">${filterLabels[category] ?? category}</button>`).join('');
  const renderProducts = () => { const visible = products.filter((product) => (filter === 'All' || product.category === filter) && `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase())); const whatsappDigits = siteData.contact.whatsapp.replace(/\D/g, ''); const whatsappHref = whatsappDigits ? `https://wa.me/${whatsappDigits}` : '#contact'; grid.innerHTML = visible.length ? visible.map((product) => `<article class="product-card"><figure><img src="${product.image}" alt="${product.alt}" loading="lazy" /></figure><span class="product-category">${product.category}</span><h3>${product.name}</h3><p>${product.description}</p><div class="product-bottom product-enquiry"><span class="enquiry-note">Contact for details</span><div class="enquiry-actions"><a class="button button-dark" href="mailto:${siteData.contact.email}?subject=Enquiry%20about%20${encodeURIComponent(product.name)}">Email <span>↗</span></a><a class="button button-outline-dark" href="${whatsappHref}" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div></div></article>`).join('') : '<p class="empty-cart">No pieces found. Try another search.</p>'; };
  qsa('[data-product-filter]', filterRoot).forEach((button) => button.addEventListener('click', () => { filter = button.dataset.productFilter; qsa('[data-product-filter]', filterRoot).forEach((el) => { el.classList.toggle('is-active', el === button); el.setAttribute('aria-pressed', String(el === button)); }); renderProducts(); }));
  qs('[data-product-search]')?.addEventListener('input', (event) => { search = event.target.value; renderProducts(); });
  renderProducts();
}

function initForm() { const form = qs('[data-quote-form]'); if (!form) return; form.addEventListener('submit', (event) => { event.preventDefault(); qs('[data-form-status]', form).textContent = 'Prototype only: no message was sent. Connect a secure form destination to enable enquiries.'; }); }

hydrateSiteDetails(); initHeader(); initCarousel(); initServices(); renderGalleryPreview(); renderOfferings(); initImmersiveSections(); initLightbox(); initCart(); initStorefront(); initForm();
