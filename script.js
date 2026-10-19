(function () {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const p = C.profile;

  // Header, hero, badge
  $('brand').textContent = p.shortName;
  document.title = `${p.firstName} ${p.middleName} ${p.lastName}`;
  const resume = $('nav-resume');
  if (p.resume) resume.href = p.resume; else resume.remove();

  $('hero-name').innerHTML =
    `<span>${esc(p.firstName)}</span><span>${esc(p.middleName)}</span><span class="last">${esc(p.lastName)}</span>`;
  $('hero-tagline').textContent = p.tagline;
  $('hero-intro').textContent = p.intro;
  const actions = [
    `<a class="btn btn-primary" href="#projects">See projects</a>`,
    p.github && `<a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub ↗</a>`,
    p.linkedin && `<a class="btn" href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>`,
    p.resume && `<a class="btn" href="${esc(p.resume)}" target="_blank" rel="noopener">Resume ↗</a>`,
    p.email && `<button class="btn" type="button" data-copy="${esc(p.email)}">Copy email</button>`
  ];
  $('hero-actions').innerHTML = actions.filter(Boolean).join('');

  const photo = $('photo');
  if (p.photo) { photo.src = p.photo; photo.alt = p.photoAlt || ''; } else photo.remove();
  $('badge-name').textContent = `${p.firstName} ${p.middleName} ${p.lastName}`;
  $('badge-sub').textContent = [p.role, p.location].filter(Boolean).join(' · ');
  $('glance').innerHTML = C.glance
    .map((g) => `<dt>${esc(g.label)}</dt><dd>${esc(g.value)}${g.sub ? `<small>${esc(g.sub)}</small>` : ''}</dd>`)
    .join('');
  $('status').textContent = p.status;

  // Stats with a short count-up
  $('stats').innerHTML = C.stats
    .map((s) => `<div class="card stat"><div class="stat-num">${esc(s.prefix)}<span data-n="${s.value}">${s.value}</span>${esc(s.suffix)}</div><div class="stat-label">${esc(s.label)}</div></div>`)
    .join('');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-n]').forEach((el) => {
      const target = +el.dataset.n;
      const start = performance.now();
      const dur = 900;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  // Experience
  $('jobs').innerHTML = C.experience
    .map((j, i) => `
      <div class="card job" data-open="true">
        <button class="job-head" type="button" aria-expanded="true" aria-controls="job-${i}">
          <span class="job-title"><span class="chev" aria-hidden="true">›</span><span class="job-role">${esc(j.role)}</span> <span class="job-org">· ${esc(j.org)}${j.place ? ', ' + esc(j.place) : ''}</span></span>
          <span class="job-dates">${esc(j.dates)}</span>
        </button>
        <div class="job-body" id="job-${i}">
          <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
          <div class="tags">${j.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        </div>
      </div>`)
    .join('');
  document.querySelectorAll('.job-head').forEach((btn) => {
    btn.addEventListener('click', () => {
      const job = btn.closest('.job');
      const open = job.dataset.open !== 'true';
      job.dataset.open = open;
      btn.setAttribute('aria-expanded', open);
    });
  });

  // Projects
  const LINKS = [['demo', 'Demo ▸'], ['github', 'GitHub ↗'], ['slides', 'Slides ↗'], ['report', 'Report ↗']];
  const linksHtml = (l) => LINKS
    .filter(([k]) => l && l[k])
    .map(([k, label]) => `<a class="link${k === 'demo' ? ' demo' : ''}" href="${esc(l[k])}" target="_blank" rel="noopener">${label}</a>`)
    .join('');
  const catColor = (c) => `var(--cat-${c})`;

  $('project-count').textContent = `${C.projects.length} projects · click a card for the case study`;
  $('chips').innerHTML = C.filters
    .map((f, i) => `<button class="chip" type="button" data-f="${esc(f.id)}" aria-pressed="${i === 0}">${esc(f.label)}</button>`)
    .join('');
  $('cards').innerHTML = C.projects
    .map((pr) => {
      const links = linksHtml(pr.links);
      return `
      <div class="card pcard" data-id="${esc(pr.id)}" data-cat="${esc(pr.category)}">
        <button class="pcard-open" type="button" aria-label="Show case study: ${esc(pr.title)}"></button>
        <span class="pcard-top">
          <span class="pcard-tag" style="color:${catColor(pr.category)}">${esc(pr.tag)}</span>
          ${pr.status ? `<span class="status-pill">${esc(pr.status)}</span>` : ''}
        </span>
        <span class="pcard-title">${esc(pr.title)}</span>
        <span class="pcard-stack">${esc(pr.stack)}</span>
        ${links ? `<div class="links">${links}</div>` : ''}
      </div>`;
    })
    .join('');

  function showCase(id, scroll) {
    const pr = C.projects.find((x) => x.id === id);
    if (!pr) return;
    const cs = pr.caseStudy;
    const links = linksHtml(pr.links);
    document.querySelectorAll('.pcard').forEach((c) => c.setAttribute('aria-current', c.dataset.id === id));
    $('case').innerHTML = `
      <div class="case-top">
        <span class="cap">Case study · ${esc(cs.meta)}</span>
        ${links ? `<div class="links">${links}</div>` : ''}
      </div>
      <h3>${esc(cs.heading)}${pr.status ? ` <span class="status-pill">${esc(pr.status)}</span>` : ''}</h3>
      <div class="metrics">${cs.metrics.filter((m) => m[0]).map((m) => `<div class="metric"><div class="metric-v">${esc(m[0])}</div><div class="metric-l">${esc(m[1])}</div></div>`).join('')}</div>
      <div class="pwr">
        <div><div class="cap label-accent">Problem</div><p>${esc(cs.problem)}</p></div>
        <div><div class="cap label-accent">What I did</div><p>${esc(cs.whatIDid)}</p></div>
        <div><div class="cap label-accent">${pr.status ? 'Status and next steps' : 'Result'}</div><p>${esc(cs.result)}</p></div>
      </div>`;
    if (scroll) {
      const r = $('case').getBoundingClientRect();
      if (r.top > window.innerHeight - 120 || r.top < 0) $('case').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  $('cards').addEventListener('click', (e) => {
    if (e.target.closest('.link')) return;
    const card = e.target.closest('.pcard');
    if (card) showCase(card.dataset.id, true);
  });
  $('chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === chip));
    const f = chip.dataset.f;
    document.querySelectorAll('.pcard').forEach((c) => c.classList.toggle('dim', f !== 'all' && c.dataset.cat !== f));
  });
  showCase(C.projects[0].id, false);

  // Leadership, skills, education
  $('lead').innerHTML = C.leadership.map((l) => `<dt>${esc(l.date)}</dt><dd>${esc(l.text)}</dd>`).join('');
  $('skills').innerHTML = C.skills
    .map((g) => `<div class="skill-group"><div class="cap label-accent">${esc(g.group)}</div><div class="tags">${g.items.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div></div>`)
    .join('');
  $('education').innerHTML = C.education
    .map((e) => `<div class="edu-row">${esc(e.degree)}, ${esc(e.school)} <span>· ${esc(e.year)}</span></div>`)
    .join('');

  // Contact
  const ct = C.contact;
  $('contact-title').innerHTML = `<span>${esc(ct.heading[0])}</span><span class="hl">${esc(ct.heading[1])}</span>`;
  $('contact-list').innerHTML = ct.rows
    .map((r) => `<dt>${esc(r.label)}</dt><dd><span>${esc(r.value)}</span>${r.value.includes('@') ? `<button class="copy" type="button" data-copy="${esc(r.value)}">Copy</button>` : ''}</dd>`)
    .join('');

  $('footer-text').textContent = `© ${new Date().getFullYear()} ${p.firstName} ${p.middleName} ${p.lastName}`;
  $('footer-links').innerHTML = [
    p.github && `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>`,
    p.linkedin && `<a href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    p.resume && `<a href="${esc(p.resume)}" target="_blank" rel="noopener">Resume</a>`
  ].filter(Boolean).join('');

  // Copy buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.dataset.copy;
    const label = btn.textContent;
    const done = (msg) => { btn.textContent = msg; setTimeout(() => { btn.textContent = label; }, 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => done('Copied'), () => done(text));
    } else done(text);
  });

  // Theme toggle
  const root = document.documentElement;
  const toggle = $('theme-toggle');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const syncToggle = () => toggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
  syncToggle();
  toggle.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
  });

  // Mobile menu
  const menuBtn = $('menu-btn');
  const nav = $('nav');
  menuBtn.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  // Highlight the current section in the nav
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  // Contact form (Web3Forms: emails each message to you without access to your inbox)
  const form = $('contact-form');
  const msg = $('form-msg');
  const submit = $('cf-submit');
  const accessKey = (ct.web3forms && ct.web3forms.accessKey) || '';
  const configured = !!accessKey;
  const val = (id) => $(id).value.trim();

  const setMsg = (text, kind) => { msg.textContent = text; msg.className = 'form-msg' + (kind ? ' ' + kind : ''); };
  form.addEventListener('input', (e) => {
    const f = e.target.closest('.field');
    if (f) f.classList.remove('invalid');
    if (msg.classList.contains('err')) setMsg('');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstBad = null;
    form.querySelectorAll('.field input, .field textarea').forEach((el) => {
      const bad = !el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
      el.closest('.field').classList.toggle('invalid', bad);
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) {
      setMsg(firstBad.type === 'email' && firstBad.value.trim() ? 'Enter a valid email address.' : 'Fill in every field before sending.', 'err');
      firstBad.focus();
      return;
    }
    if (!configured) {
      setMsg(`The form isn't connected yet. Email ${p.email} directly.`, 'err');
      return;
    }
    submit.disabled = true;
    setMsg('Sending…');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio: ${val('cf-subject')}`,
        from_name: `${val('cf-name')} via portfolio`,
        name: val('cf-name'),
        email: val('cf-email'),
        message: val('cf-message'),
        botcheck: form.elements.botcheck.checked
      })
    })
      .then((r) => r.json())
      .then((data) => {
        if (!data.success) throw new Error(data.message || 'Send failed');
        form.reset();
        setMsg('Message sent. I’ll get back to you soon.', 'ok');
      })
      .catch(() => setMsg(`Couldn't send right now. Email ${p.email} directly.`, 'err'))
      .finally(() => { submit.disabled = false; });
  });
})();
