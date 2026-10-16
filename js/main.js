/* ================================================
   MAIN.JS — Portfolio Interactivity & Rendering
   ================================================
   This file reads all data from SITE (defined in data.js)
   and renders it into the HTML containers.

   You should NOT need to edit this file.
   All content lives in js/data.js.
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderEducation();
  renderProjects();
  renderExperience();
  renderSkills();
  renderActivities();
  renderContact();
  renderFooter();

  initNavigation();
  initScrollAnimations();
  initProjectModals();
  initHeroCanvas();
  initSmoothScrollLinks();
});

/* ================================================
   HELPER: render bold **text** as <strong>
   ================================================ */
function md(text) {
  if (!text) return '';
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

/* ================================================
   RENDER: NAVIGATION
   ================================================ */
function renderNav() {
  const logo = document.getElementById('navLogo');
  const menu = document.getElementById('navMenu');

  // Logo
  logo.innerHTML = `<span class="nav__logo-bracket">&lt;</span>${SITE.personal.name}<span class="nav__logo-bracket">/&gt;</span>`;

  // Nav links — one per section
  const navItems = [
    { label: 'About',      href: '#about' },
    { label: 'Education',  href: '#education' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Activities', href: '#activities' },
    { label: 'Contact',    href: '#contact', cta: true },
  ];

  menu.innerHTML = navItems.map(item => `
    <li>
      <a href="${item.href}" class="nav__link${item.cta ? ' nav__link--cta' : ''}">${item.label}</a>
    </li>
  `).join('');
}

/* ================================================
   RENDER: HERO
   ================================================ */
function renderHero() {
  const el = document.getElementById('heroContent');
  el.innerHTML = `
    <p class="hero__label">${SITE.personal.heroTagline}</p>
    <h1 class="hero__title">
      <span class="hero__title-line">${SITE.personal.heroTitleLine1}</span>
      <span class="hero__title-line hero__title-line--accent">${SITE.personal.heroTitleLine2}</span>
      <span class="hero__title-line">${SITE.personal.heroTitleLine3}</span>
    </h1>
    <p class="hero__description">${SITE.personal.heroDescription}</p>
    <div class="hero__actions">
      <a href="#projects" class="btn btn--primary">
        View Projects
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="${SITE.personal.cvFile}" class="btn btn--secondary" download>
        Download CV
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </a>
    </div>
  `;
}

/* ================================================
   RENDER: ABOUT
   ================================================ */
function renderAbout() {
  const el = document.getElementById('aboutContent');

  // Profile photo — show image if it loads, otherwise a styled placeholder
  const photoSection = `
    <div class="about__photo-wrap">
      <img
        src="${SITE.about.photo}"
        alt="Profile photo"
        class="about__photo"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="about__photo-placeholder" style="display:none;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    </div>
  `;

  // Interests grid
  const interestsHTML = SITE.about.interests.map(interest => `
    <div class="interest-card" data-animate>
      <div class="interest-card__icon">${ICONS[interest.icon] || ''}</div>
      <span>${interest.label}</span>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="about__text">
      <p class="about__intro">${md(SITE.about.intro)}</p>
      ${SITE.about.paragraphs.map(p => `<p>${md(p)}</p>`).join('')}
      <h3 class="about__interests-title">Areas of Focus</h3>
      <div class="about__interests-grid">${interestsHTML}</div>
    </div>
    <div class="about__photo-side">
      ${photoSection}
    </div>
  `;
}

/* ================================================
   RENDER: EDUCATION
   ================================================ */
function renderEducation() {
  const el = document.getElementById('educationContent');
  el.innerHTML = SITE.education.map((edu, i) => `
    <div class="timeline__item" data-animate>
      <div class="timeline__marker"></div>
      <div class="timeline__header">
        <span class="timeline__date">${edu.date}</span>
        ${edu.current ? '<span class="timeline__status timeline__status--current">Current</span>' : ''}
      </div>
      <h3 class="timeline__title">${edu.title}</h3>
      <p class="timeline__institution">${edu.institution}</p>
      <p class="timeline__description">${md(edu.description)}</p>
      <div class="timeline__tags">
        ${edu.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ================================================
   RENDER: PROJECTS (tiered layout)
   ================================================ */
function renderProjects() {
  const el = document.getElementById('projectsContent');

  const tier1 = SITE.projects.filter(p => p.tier === 1);
  const tier2 = SITE.projects.filter(p => p.tier === 2);
  const tier3 = SITE.projects.filter(p => p.tier === 3);

  let html = '';

  // Tier 1: Featured — large cards
  if (tier1.length) {
    html += `<div class="projects__featured">${tier1.map(p => projectCard(p, 'featured')).join('')}</div>`;
  }

  // Tier 2: Important — standard cards
  if (tier2.length) {
    html += `<div class="projects__grid">${tier2.map(p => projectCard(p, 'standard')).join('')}</div>`;
  }

  // Tier 3: Compact
  if (tier3.length) {
    html += `<div class="projects__compact">${tier3.map(p => projectCard(p, 'compact')).join('')}</div>`;
  }

  el.innerHTML = html;
}

function projectCard(p, variant) {
  const hasDetails = p.details !== null && p.details !== undefined;
  const statusClass = p.status === 'completed' ? 'completed' : 'in-progress';
  const statusLabel = p.status === 'completed' ? 'Completed' : 'In Progress';

  if (variant === 'featured') {
    return `
      <div class="project-card project-card--featured" data-animate>
        <div class="project-card__inner">
          <div class="project-card__header">
            <div class="project-card__icon">${ICONS[p.icon] || ''}</div>
            <span class="project-card__status project-card__status--${statusClass}">${statusLabel}</span>
          </div>
          ${p.context ? `<p class="project-card__context">${p.context}</p>` : ''}
          <h3 class="project-card__title">${p.title}</h3>
          ${p.subtitle ? `<p class="project-card__subtitle">${p.subtitle}</p>` : ''}
          <p class="project-card__description">${md(p.description)}</p>
          <div class="project-card__tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          ${p.focus ? `<p class="project-card__focus"><span class="focus-label">Focus:</span> ${p.focus}</p>` : ''}
          ${hasDetails ? `
            <div class="project-card__metrics">
              ${p.details.metrics.map(m => `
                <div class="metric-card">
                  <span class="metric-card__value">${m.value}</span>
                  <span class="metric-card__label">${m.label}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
          <div class="project-card__footer">
            ${hasDetails ? `
              <button class="project-card__btn" data-open-project="${p.id}">
                View Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  if (variant === 'standard') {
    return `
      <div class="project-card" data-animate>
        <div class="project-card__header">
          <div class="project-card__icon">${ICONS[p.icon] || ''}</div>
          <span class="project-card__status project-card__status--${statusClass}">${statusLabel}</span>
        </div>
        ${p.context ? `<p class="project-card__context">${p.context}</p>` : ''}
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__description">${md(p.description)}</p>
        <div class="project-card__tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${p.focus ? `<p class="project-card__focus"><span class="focus-label">Focus:</span> ${p.focus}</p>` : ''}
        <div class="project-card__footer">
          ${hasDetails ? `
            <button class="project-card__btn" data-open-project="${p.id}">
              View Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Compact (tier 3)
  return `
    <div class="project-card project-card--compact" data-animate>
      <div class="project-card__header">
        <div class="project-card__icon">${ICONS[p.icon] || ''}</div>
        <span class="project-card__status project-card__status--${statusClass}">${statusLabel}</span>
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__description">${md(p.description)}</p>
      <div class="project-card__tech">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="project-card__footer">
        ${hasDetails ? `
          <button class="project-card__btn" data-open-project="${p.id}">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

/* ================================================
   RENDER: EXPERIENCE
   ================================================ */
function renderExperience() {
  const el = document.getElementById('experienceContent');
  el.innerHTML = SITE.experience.map(exp => `
    <div class="experience-card" data-animate>
      <div class="experience-card__header">
        <div class="experience-card__icon">${ICONS.briefcase}</div>
        <span class="experience-card__date">${exp.date}</span>
      </div>
      <h3 class="experience-card__title">${exp.title}</h3>
      <p class="experience-card__company">${exp.company}</p>
      <p class="experience-card__description">${md(exp.description)}</p>
      <div class="experience-card__tags">
        ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ================================================
   RENDER: SKILLS
   ================================================ */
function renderSkills() {
  const el = document.getElementById('skillsContent');
  el.innerHTML = SITE.skills.map(cat => `
    <div class="skill-category" data-animate>
      <div class="skill-category__header">
        <div class="skill-category__icon">${ICONS[cat.icon] || ''}</div>
        <h3>${cat.category}</h3>
      </div>
      <ul class="skill-category__list">
        ${cat.items.map(skill => `
          <li>
            <div>
              <span class="skill-name">${skill.name}</span>
              <span class="skill-detail">${skill.description}</span>
            </div>
            <div class="skill-level">
              <span class="skill-level__badge skill-level__badge--${(skill.level || '').replace(/\s+/g, '-').toLowerCase()}">${skill.level || ''}</span>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* ================================================
   RENDER: ACTIVITIES
   ================================================ */
function renderActivities() {
  const el = document.getElementById('activitiesContent');
  el.innerHTML = SITE.activities.map(act => `
    <div class="activity-card" data-animate>
      <div class="activity-card__icon">${ICONS.robot}</div>
      <div>
        <h3 class="activity-card__title">${act.title}</h3>
        <p class="activity-card__role">${act.role}</p>
        <p class="activity-card__description">${md(act.description)}</p>
      </div>
    </div>
  `).join('');
}

/* ================================================
   RENDER: CONTACT
   ================================================ */
function renderContact() {
  const subtitle = document.getElementById('contactSubtitle');
  const el = document.getElementById('contactContent');

  subtitle.textContent = SITE.contact.message;

  const items = [];

  if (SITE.contact.email && SITE.contact.email !== '[Available upon request]' && SITE.contact.email !== '[your-email@example.com]') {
    items.push(`
      <a href="mailto:${SITE.contact.email}" class="contact__item" data-animate>
        <div class="contact__item-icon">${ICONS.mail}</div>
        <div>
          <span class="contact__item-label">Email</span>
          <span class="contact__item-value">${SITE.contact.email}</span>
        </div>
      </a>
    `);
  } else {
    items.push(`
      <div class="contact__item" data-animate>
        <div class="contact__item-icon">${ICONS.mail}</div>
        <div>
          <span class="contact__item-label">Email</span>
          <span class="contact__item-value">${SITE.contact.email || '[Available upon request]'}</span>
        </div>
      </div>
    `);
  }

  if (SITE.contact.linkedin && SITE.contact.linkedin !== '[Available upon request]' && SITE.contact.linkedin !== '[YOUR-LINKEDIN-URL]') {
    items.push(`
      <a href="${SITE.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact__item" data-animate>
        <div class="contact__item-icon">${ICONS.linkedin}</div>
        <div>
          <span class="contact__item-label">LinkedIn</span>
          <span class="contact__item-value">${SITE.contact.linkedinLabel || SITE.contact.linkedin}</span>
        </div>
      </a>
    `);
  } else {
    items.push(`
      <div class="contact__item" data-animate>
        <div class="contact__item-icon">${ICONS.linkedin}</div>
        <div>
          <span class="contact__item-label">LinkedIn</span>
          <span class="contact__item-value">${SITE.contact.linkedinLabel || '[Available upon request]'}</span>
        </div>
      </div>
    `);
  }

  if (SITE.contact.cvFile) {
    items.push(`
      <a href="${SITE.contact.cvFile}" class="contact__item" download data-animate>
        <div class="contact__item-icon">${ICONS.file}</div>
        <div>
          <span class="contact__item-label">CV</span>
          <span class="contact__item-value">Download Resume (PDF)</span>
        </div>
      </a>
    `);
  }

  el.innerHTML = items.join('');
}

/* ================================================
   RENDER: FOOTER
   ================================================ */
function renderFooter() {
  const el = document.getElementById('footerContent');
  el.innerHTML = `
    <p class="footer__text">
      <span class="footer__bracket">&lt;</span>${SITE.personal.name}<span class="footer__bracket">/&gt;</span>
      &nbsp;·&nbsp; ${new Date().getFullYear()}
    </p>
    <p class="footer__subtext">Designed & built with precision engineering</p>
  `;
}

/* ================================================
   NAVIGATION
   ================================================ */
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = menu.querySelectorAll('.nav__link');

  // Scroll behavior — add background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('nav__toggle--active');
    menu.classList.toggle('nav__menu--open');
    document.body.style.overflow = menu.classList.contains('nav__menu--open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('nav__toggle--active');
      menu.classList.remove('nav__menu--open');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('nav__menu--open') &&
        !menu.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('nav__toggle--active');
      menu.classList.remove('nav__menu--open');
      document.body.style.overflow = '';
    }
  });

  // Active link tracking
  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(section => sectionObserver.observe(section));
}

/* ================================================
   SMOOTH SCROLL
   ================================================ */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ================================================ */
function initScrollAnimations() {
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger animation for siblings
        const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
        let delay = 0;
        siblings.forEach((sibling, i) => {
          if (sibling === entry.target) {
            delay = i * 80;
          }
        });

        setTimeout(() => {
          entry.target.classList.add('animated');
        }, delay);

        animObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));
}

/* ================================================
   PROJECT MODALS (using data from data.js)
   ================================================ */
function initProjectModals() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeElements = document.querySelectorAll('[data-close-modal]');

  // Delegate open clicks (works for dynamically created buttons)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-project]');
    if (!btn) return;

    const projectId = btn.dataset.openProject;
    const project = SITE.projects.find(p => p.id === projectId);
    if (!project || !project.details) return;

    modalContent.innerHTML = buildModalHTML(project);
    modal.classList.add('modal--active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  closeElements.forEach(el => {
    el.addEventListener('click', closeModal);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.classList.remove('modal--active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function buildModalHTML(project) {
  const d = project.details;
  let html = `
    <h2>${project.title}</h2>
    <p class="modal-subtitle">${project.subtitle || ''}</p>
  `;

  // Metrics cards
  if (d.metrics && d.metrics.length) {
    html += `
      <div class="modal-stats">
        ${d.metrics.map(s => `
          <div class="modal-stat">
            <span class="modal-stat-value">${s.value}</span>
            <span class="modal-stat-label">${s.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Status badge
  html += `<p class="modal-status">Status: <strong>${project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}</strong></p>`;

  // Context
  if (project.context) {
    html += `<p class="modal-context">Context: <strong>${project.context}</strong></p>`;
  }

  // Image
  if (d.image) {
    html += `<div class="modal-image"><img src="${d.image}" alt="${project.title}" /></div>`;
  }

  if (d.problem) {
    html += `<h3>Problem</h3><p>${md(d.problem)}</p>`;
  }

  if (d.objective) {
    html += `<h3>Objective</h3><p>${md(d.objective)}</p>`;
  }

  if (d.role) {
    html += `<h3>My Role</h3><p>${md(d.role)}</p>`;
  }

  if (d.architecture && d.architecture.length) {
    html += `<h3>Architecture</h3><ul>${d.architecture.map(a => `<li>${md(a)}</li>`).join('')}</ul>`;
  }

  // Technologies
  html += `<h3>Technologies</h3><div class="tech-list">${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>`;

  if (d.implementation && d.implementation.length) {
    html += `<h3>Implementation</h3><ul>${d.implementation.map(i => `<li>${md(i)}</li>`).join('')}</ul>`;
  }

  if (d.results && d.results.length) {
    html += `<h3>Results</h3><ul>${d.results.map(r => `<li>${md(r)}</li>`).join('')}</ul>`;
  }

  if (d.challenges && d.challenges.length) {
    html += `<h3>Challenges</h3><ul>${d.challenges.map(c => `<li>${md(c)}</li>`).join('')}</ul>`;
  }

  if (d.learnings && d.learnings.length) {
    html += `<h3>What I Learned</h3><ul>${d.learnings.map(l => `<li>${md(l)}</li>`).join('')}</ul>`;
  }

  return html;
}

/* ================================================
   HERO CANVAS — Subtle Circuit Grid Animation
   ================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  let animationId;
  const NODE_COUNT = 40;
  const CONNECTION_DISTANCE = 180;
  const NODE_SPEED = 0.3;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
        radius: Math.random() * 1.5 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 180, 216, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 180, 216, ${node.opacity})`;
      ctx.fill();
    });

    // Update positions
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    });

    animationId = requestAnimationFrame(draw);
  }

  // Visibility-based optimization
  const heroSection = document.getElementById('hero');
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!animationId) draw();
      } else {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }
    });
  });

  resize();
  createNodes();
  draw();
  visibilityObserver.observe(heroSection);

  window.addEventListener('resize', () => {
    resize();
    createNodes();
  });
}
