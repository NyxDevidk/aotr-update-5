const P = {
  pumpkin: '<path d="M12 7c-5 0-9 2.5-9 6.5S7 20 12 20s9-2.5 9-6.5S17 7 12 7z"/><path d="M12 7c-2 2-2 11 0 13M12 7c2 2 2 11 0 13"/><path d="M12 7c0-2 1-3 3-4"/>',
  beast: '<circle cx="12" cy="12" r="8"/><path d="M8 9l3 2-2 3M15 8l-1 4 3 1M10 17l2-2 3 2"/>',
  flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
  ticket: '<path d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v2h18v-2a2 2 0 0 1 0-4v0a2 2 0 0 0 0-4V6H3z"/><path d="M9 6v12" stroke-dasharray="2 2"/>',
  tree: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><circle cx="12" cy="13" r="2"/><path d="M12 7v4M11 14.5L7 17.5M13 14.5l4 3"/>',
  hex: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 8l1.6 3.2 3.4.5-2.5 2.4.6 3.4-3.1-1.7-3.1 1.7.6-3.4L7 11.7l3.4-.5z"/>',
  scroll: '<path d="M6 4h11a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5"/><path d="M9 9h7M9 13h7"/>',
  wings: '<path d="M12 20c-1-6-4-10-9-12 1 5 3 8 6 9-3 0-5-1-6-1 3 3 6 4 9 4z"/><path d="M12 20c1-6 4-10 9-12-1 5-3 8-6 9 3 0 5-1 6-1-3 3-6 4-9 4z"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5C10 8.6 11 8 12 8s2.5.6 2.5 2-1.5 1.8-2.5 2-2.5.6-2.5 2S10.8 16 12 16c1.2 0 2.200-.6 2.500-1.500"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  scales: '<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-3 7a3 3 0 0 0 6 0zM19 8l-3 7a3 3 0 0 0 6 0z"/>',
  bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 14v4M8 20h8"/>',
  wrench: '<path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 0-2-2z"/>',
  bug: '<rect x="8" y="8" width="8" height="11" rx="4"/><path d="M9 8a3 3 0 0 1 6 0M4 12h4M16 12h4M5 18l3-2M19 18l-3-2M5 6l3 2M19 6l-3 2"/>',
  drop: '<path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8 15h8"/>',
  burst: '<path d="M12 2l2 5 5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z"/>',
  ghost: '<path d="M5 20V11a7 7 0 0 1 14 0v9l-3-2-2 2-2-2-2 2-2-2z"/><circle cx="9.500" cy="11" r="1"/><circle cx="14.500" cy="11" r="1"/>',
  sword: '<path d="M14 4h6v6L10 20l-3-3zM4 20l3-3M6 14l4 4"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/>',
  flare: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
  diamond: '<path d="M12 3l8 9-8 9-8-9z"/>',
  up: '<path d="M6 14l6-6 6 6"/>',
  moon: '<path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
  pause: '<rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="13.5" y="5" width="3.5" height="14" rx="1"/>',
  play: '<path d="M7 5l12 7-12 7z"/>',
  github: '<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.400-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.6-.6 1.200-.5 2V21"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>',
  moon: '<path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z"/>'
};
const media = (base, alt) => { const m = IMG[base]; if (!m) return '';
  const zoom = `tabindex="0" role="button" aria-haspopup="dialog" data-label="${alt}"`;
  if (m[2] === 'mp4') return `<button type="button" class="m mbtn" aria-haspopup="dialog" data-label="${alt}" aria-label="Ampliar vídeo: ${alt}"><video src="/${base}.mp4" poster="/${base}.jpg" width="${m[0]}" height="${m[1]}" muted loop playsinline preload="none" tabindex="-1" aria-hidden="true"></video></button>`;
  return `<img class="m" src="/${base}.webp" width="${m[0]}" height="${m[1]}" alt="${alt}" aria-label="Ampliar imagem: ${alt}" loading="lazy" decoding="async" ${zoom}>`; };
const ico = (n) => P[n] ? `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>` : '';
const SEC_ICON = { halloween: 'pumpkin', beast: 'beast', status: 'flame', battlepass: 'ticket', skilltree: 'tree', perks: 'hex', memories: 'scroll', freedom: 'wings', market: 'coin', modifiers: 'sliders', balance: 'scales', shifters: 'bolt', rewards: 'trophy', qol: 'wrench', bugs: 'bug' };
const CAT_ICON = { Evento: 'pumpkin', Combate: 'sword', 'Progressão': 'tree', Economia: 'coin', Balanceamento: 'scales', 'Qualidade de vida': 'wrench' };
const ROW_ICON = { BURN: 'flame', BLEED: 'drop', CORROSION: 'flask', 'EXPLOSION DAMAGE REDUCTION': 'burst', FEAR: 'ghost', SHOCK: 'bolt' };
const tagIcon = (tag) => { const k = String(tag).toLowerCase();
  if (k.includes('offense')) return 'sword'; if (k.includes('defense')) return 'shield'; if (k.includes('support')) return 'flare';
  if (k.includes('core')) return 'diamond'; if (k.includes('event') || k.includes('rotativo')) return 'pumpkin'; return ''; };

/* ---------- Renderização ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const arrow = (s) => String(s).replace(/ → /g, '<span class="arr"> → </span>').replace(/→/g, '<span class="arr">→</span>');

const pillColor = (t) => {
  const k = String(t).toLowerCase();
  if (k.includes('divine')) return 'var(--c-divine)';
  if (k.includes('mythic')) return 'var(--c-mythic)';
  if (k.includes('legendary')) return 'var(--c-legendary)';
  if (k.includes('exclusive')) return 'var(--c-exclusive)';
  if (k.includes('premium')) return 'var(--c-premium)';
  if (k.includes('free')) return 'var(--c-free)';
  return 'var(--accent)';
};

function renderList(items) {
  let html = '<ul class="plain">';
  items.forEach((it) => {
    if (Array.isArray(it)) {
      html = html.replace(/<\/li>$/, '') + '<ul>' + it.map((s) => `<li class="item">${arrow(s)}</li>`).join('') + '</ul></li>';
    } else {
      html += `<li class="item">${arrow(it)}</li>`;
    }
  });
  return html + '</ul>';
}
function renderCards(items, sub) {
  const H = sub ? 'h4' : 'h3';
  return '<div class="cards">' + items.map((c) => {
    const lines = c.lines.length ? '<ul>' + c.lines.map((l) => `<li>${arrow(l)}</li>`).join('') + '</ul>' : '';
    const thumb = c.img ? `<div class="thumb">${media(c.img, c.n)}</div>` : '';
    return `<article class="card item" style="--tc:${c.tc}">${thumb}<${H}>${ico(tagIcon(c.tag))}${c.n}<span class="pill">${c.tag}</span></${H}>${lines}</article>`;
  }).join('') + '</div>';
}
function renderTable(head, rows, title) {
  const th = head.map((h) => `<th scope="col">${h}</th>`).join('');
  const body = rows.map((r) => '<tr class="item">' + r.map((c, i) => {
    const cell = (i === 0 && ROW_ICON[c] ? ico(ROW_ICON[c]) : '') + arrow(c);
    const cls = i === r.length - 1 && r.length > 1 && String(c).length > 28 ? ' class="wrap"' : '';
    return `<td${cls}>${cell}</td>`;
  }).join('') + '</tr>').join('');
  return `<div class="tablewrap" tabindex="0" role="region" aria-label="${title ? title + ': ' : ''}${head.join(', ')}"><table><caption class="sr-only">${title || head.join(', ')}</caption><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function renderGallery(items) {
  return '<div class="gallery">' + items.map(([b, cap]) => {
    const m = IMG[b] || [1, 1];
    const wide = m[0] / m[1] > 2.2 ? ' wide' : '';
    return `<figure class="item fig${wide}"><div class="mw">${media(b, cap)}</div><figcaption>${cap}</figcaption></figure>`;
  }).join('') + '</div>';
}
function renderBlock(b) {
  let inner = '';
  if (b.title) inner += `<h3>${b.title}</h3>`;
  if (b.t === 'list') inner += renderList(b.items);
  if (b.t === 'cards') inner += renderCards(b.items, !!b.title);
  if (b.t === 'table') inner += renderTable(b.head, b.rows, b.title);
  if (b.t === 'gallery') inner += renderGallery(b.items);
  if (b.t === 'note') inner += `<p class="note item">${b.text}</p>`;
  return `<div class="block">${inner}</div>`;
}

const content = $('#content');
const nav = $('#nav');
content.innerHTML = SECTIONS.map((s) => `
  <section class="sec" id="${s.id}" data-cat="${s.cat}">
    <header><h2><span class="ico-badge">${ico(SEC_ICON[s.id])}</span>${s.title}</h2><span class="cat">${s.cat}</span><a class="anchor" href="#${s.id}" aria-label="Link direto para ${s.title}">#</a></header>
    <p class="intro">${s.intro}</p>
    ${s.blocks.map(renderBlock).join('')}
  </section>`).join('');
nav.innerHTML = SECTIONS.map((s) => `<li data-for="${s.id}"><a href="#${s.id}">${ico(SEC_ICON[s.id])}<span>${s.title}</span></a></li>`).join('');

/* ---------- Filtros ---------- */
const cats = ['Todos', ...Array.from(new Set(SECTIONS.map((s) => s.cat)))];
let activeCat = 'Todos';
const chips = $('#chips');
chips.innerHTML = cats.map((c) => `<button type="button" class="chip" aria-pressed="${c === 'Todos'}" data-cat="${c}">${ico(CAT_ICON[c])}${c}</button>`).join('');
chips.addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  activeCat = b.dataset.cat;
  $$('.chip').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  applyFilters();
});

const RARS = ['Todas', 'Divine', 'Mythic', 'Legendary', 'Exclusive'];
let activeRar = 'Todas';
const rar = $('#rar');
rar.innerHTML = '<span class="lbl">Raridade</span>' + RARS.map((r) => `<button type="button" class="chip" aria-pressed="${r === 'Todas'}" data-rar="${r}">${r}</button>`).join('');
rar.addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  activeRar = b.dataset.rar;
  $$('.chip', rar).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  applyFilters();
});
const q = $('#q');
q.addEventListener('input', applyFilters);

function applyFilters() {
  const term = q.value.trim().toLowerCase();
  let shown = 0;
  $$('section.sec').forEach((sec) => {
    const catOk = activeCat === 'Todos' || sec.dataset.cat === activeCat;
    let secVisible = 0;
    $$('.block', sec).forEach((blk) => {
      const items = $$('.item', blk);
      let vis = 0;
      items.forEach((it) => {
        const ra = activeRar.toLowerCase();
        const pill = it.querySelector('.pill');
        const rarOk = activeRar === 'Todas' || (pill ? pill.textContent.toLowerCase().includes(ra) : $$('td', it).some((td) => td.textContent.trim().toLowerCase() === ra));
        const match = rarOk && (!term || it.textContent.toLowerCase().includes(term) ||
          (blk.querySelector('h3') && blk.querySelector('h3').textContent.toLowerCase().includes(term)) ||
          false);
        it.hidden = !match;
        if (match) vis++;
      });
      /* subitens sem pai visível ficam escondidos junto do pai */
      $$('ul.plain ul', blk).forEach((u) => { const any = $$('.item', u).some((x) => !x.hidden); u.hidden = !any; if (any) { const p = u.closest('li.item'); if (p && p.hidden) { p.hidden = false; vis++; } } });
      blk.hidden = vis === 0;
      secVisible += vis;
    });
    const titleMatch = term && sec.querySelector('h2').textContent.toLowerCase().includes(term);
    if (titleMatch && secVisible === 0) {
      $$('.item', sec).forEach((it) => { it.hidden = false; });
      $$('.block', sec).forEach((b) => { b.hidden = false; });
      $$('ul.plain ul', sec).forEach((u) => { u.hidden = false; });
      secVisible = $$('.item', sec).length;
    }
    const visible = catOk && secVisible > 0;
    sec.hidden = !visible;
    const li = nav.querySelector(`[data-for="${sec.id}"]`);
    if (li) li.hidden = !visible;
    if (visible) shown += secVisible;
  });
  $('#empty').style.display = shown === 0 ? 'block' : 'none';
  $('#count').textContent = (term || activeRar !== 'Todas') ?  (shown === 0 ? '' : `${shown} resultado${shown > 1 ? 's' : ''}${term ? ' para “' + q.value.trim() + '”' : ''}${activeRar !== 'Todas' ? ' · ' + activeRar : ''}`) : '';
}

/* ---------- Preferências (tema e animações) ---------- */
const root = document.documentElement;
const store = { get: (k) => { try { return localStorage.getItem(k); } catch (_) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} } };
const themeBtn = $('#theme');
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
function syncTheme() {
  const d = isDark();
  themeBtn.setAttribute('aria-pressed', String(d));
  themeBtn.innerHTML = `${ico(d ? 'sun' : 'moon')}<span>${d ? 'Tema claro' : 'Tema escuro'}</span>`;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = d ? '#12150e' : '#3d5a38';
}
const savedTheme = store.get('aotr-theme');
if (savedTheme) root.dataset.theme = savedTheme;
syncTheme();
themeBtn.addEventListener('click', () => { root.dataset.theme = isDark() ? 'light' : 'dark'; store.set('aotr-theme', root.dataset.theme); syncTheme(); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncTheme);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let paused = store.get('aotr-motion') ? store.get('aotr-motion') === 'off' : reduce;
const motionBtn = $('#motion');
function syncMotion() {
  motionBtn.setAttribute('aria-pressed', String(paused));
  motionBtn.innerHTML = `${ico(paused ? 'play' : 'pause')}<span>${paused ? 'Tocar animações' : 'Pausar animações'}</span>`;
  root.classList.toggle('still', paused);
  $$('.mbtn video', content).forEach((v) => { if (paused) v.pause(); else if (v.dataset.visible === '1') v.play().catch(() => {}); });
}
motionBtn.addEventListener('click', () => { paused = !paused; store.set('aotr-motion', paused ? 'off' : 'on'); syncMotion(); });

/* ---------- Busca: atalhos ---------- */
const clearBtn = $('#clear');
const syncClear = () => { clearBtn.hidden = !q.value; };
q.addEventListener('input', syncClear);
clearBtn.addEventListener('click', () => { q.value = ''; syncClear(); applyFilters(); q.focus(); });
q.addEventListener('keydown', (e) => { if (e.key === 'Escape' && q.value) { e.preventDefault(); q.value = ''; syncClear(); applyFilters(); } });
addEventListener('keydown', (e) => {
  if (e.key === '/' && !e.ctrlKey && !e.metaKey && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !document.querySelector('dialog[open]')) { e.preventDefault(); q.focus(); q.select(); }
});

/* ---------- Navegação ativa ---------- */
nav.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  e.preventDefault();
  const target = document.getElementById(a.getAttribute('href').slice(1));
  if (!target) return;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  const h = target.querySelector('h2');
  if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  try { history.replaceState(null, '', a.getAttribute('href')); } catch (_) {}
});
const header = $('header.top');
function onScroll() {
  let current = null;
  const off = header.getBoundingClientRect().bottom + 24;
  $$('section.sec').forEach((s) => { if (!s.hidden && s.getBoundingClientRect().top - off <= 0) current = s.id; });
  $$('a', nav).forEach((a) => {
    const on = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
  header.classList.toggle('scrolled', scrollY > 8);
  totop.classList.toggle('show', scrollY > 600);
}
const totop = $('#totop');
totop.innerHTML = ico('up');
totop.addEventListener('click', () => { scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); $('#conteudo').focus({ preventScroll: true }); });
addEventListener('scroll', onScroll, { passive: true });
onScroll();
if (location.hash && document.getElementById(location.hash.slice(1))) document.getElementById(location.hash.slice(1)).scrollIntoView();

/* ---------- Vídeos: tocam só quando visíveis ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  const v = e.target;
  v.dataset.visible = e.isIntersecting ? '1' : '0';
  if (e.isIntersecting && !paused) v.play().catch(() => {}); else v.pause();
}), { rootMargin: '120px' });
$$('.mbtn video', content).forEach((v) => io.observe(v));
syncMotion();

/* ---------- Lightbox acessível ---------- */
const lb = document.createElement('dialog');
lb.id = 'lb';
lb.setAttribute('aria-labelledby', 'lb-cap');
lb.innerHTML = '<button type="button" class="lb-x" aria-label="Fechar imagem ampliada">' + '✕' + '</button><div class="lb-body"></div><p class="lb-cap" id="lb-cap"></p>';
document.body.appendChild(lb);
const lbBody = $('.lb-body', lb);
let lastTrigger = null;
function openLb(el) {
  lastTrigger = el;
  lbBody.innerHTML = '';
  const src = el.tagName === 'BUTTON' ? el.querySelector('video') : el;
  const c = src.cloneNode(true);
  ['tabindex', 'role', 'aria-haspopup', 'loading', 'aria-label', 'aria-hidden'].forEach((k) => c.removeAttribute(k));
  c.classList.remove('m'); c.classList.add('lb-media');
  if (c.tagName === 'VIDEO') { c.controls = true; c.autoplay = !paused; c.preload = 'auto'; c.setAttribute('aria-label', el.dataset.label); }
  lbBody.appendChild(c);
  $('.lb-cap', lb).textContent = el.dataset.label || '';
  lb.showModal();
  $('.lb-x', lb).focus();
}
content.addEventListener('click', (e) => { const m = e.target.closest('.m'); if (m) openLb(m); });
content.addEventListener('keydown', (e) => {
  const m = e.target.closest && e.target.closest('.m');
  if (m && m.tagName !== 'BUTTON' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openLb(m); }
});
lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lb-x')) lb.close(); });
lb.addEventListener('close', () => { lbBody.innerHTML = ''; if (lastTrigger) lastTrigger.focus(); });
