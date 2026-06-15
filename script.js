/* ============================================================
   LuxeWash — Premium Interactions
   Parallax · Glass micro-interactions · Counters · Slider
   ============================================================ */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Header scroll state ──────────────────────────────── */
  const header = $('.site-header');

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ── 2. Active nav link ──────────────────────────────────── */
  const sections = $$('section[id]');
  const navLinks = $$('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ── 3. Mobile nav ───────────────────────────────────────── */
  const burger     = $('.nav-burger');
  const mobileMenu = $('#mobile-menu');

  function openMenu() {
    mobileMenu.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close navigation menu');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
    setTimeout(() => { mobileMenu.hidden = true; }, 380);
  }

  burger.addEventListener('click', () =>
    burger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu()
  );

  $$('a', mobileMenu).forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });

  /* ── 4. Smooth scroll ────────────────────────────────────── */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ── 5. Hero parallax ────────────────────────────────────── */
  const heroImg = $('#hero-img');
  const hero    = $('.hero');

  if (heroImg) {
    // Fade-in on load
    const onLoad = () => heroImg.classList.add('loaded');
    if (heroImg.complete) onLoad();
    else heroImg.addEventListener('load', onLoad);
  }

  if (hero && heroImg && !prefersReducedMotion()) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        // Shift the image upward as user scrolls — creates depth
        heroImg.style.transform = `scale(1.02) translateY(${y * 0.28}px)`;
      }
    }, { passive: true });
  }

  /* ── 6. Ambient orb parallax ─────────────────────────────── */
  if (!prefersReducedMotion()) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      // Shift the CSS body::before gradient very subtly
      document.documentElement.style.setProperty('--scroll-y', `${y * 0.25}px`);
    }, { passive: true });
  }

  /* ── 7. Intersection Observer — reveal animations ────────── */
  if (!prefersReducedMotion()) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );
    $$('.fade-up, .fade-in').forEach((el) => io.observe(el));
  } else {
    $$('.fade-up, .fade-in').forEach((el) => el.classList.add('in-view'));
  }

  /* ── 8. Counter animation ────────────────────────────────── */
  const statEls = $$('.stat-number[data-target]');

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const start    = performance.now();

    function tick(now) {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased   = 1 - Math.pow(1 - elapsed, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (elapsed < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (statEls.length) {
    const statsIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!prefersReducedMotion()) animateCounter(entry.target);
            else entry.target.textContent =
              Number(entry.target.dataset.target).toLocaleString() +
              (entry.target.dataset.suffix || '');
            statsIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => statsIo.observe(el));
  }

  /* ── 9. Before / After slider ────────────────────────────── */
  const sliderWrap = $('#ba-slider');
  const afterEl    = $('#slider-after-el');
  const divider    = $('#slider-divider');
  const handle     = $('#slider-handle');

  if (sliderWrap && afterEl) {
    let pos      = 50;
    let dragging = false;
    let animId   = null;
    let targetPos = 50;

    function setPos(clientX) {
      const rect = sliderWrap.getBoundingClientRect();
      targetPos = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    }

    function applyPos() {
      afterEl.style.clipPath = `inset(0 0 0 ${pos}%)`;
      divider.style.left     = `${pos}%`;
      handle.style.left      = `${pos}%`;
    }

    // Smooth spring interpolation
    function loop() {
      pos += (targetPos - pos) * 0.14;
      if (Math.abs(targetPos - pos) > 0.05) {
        applyPos();
        animId = requestAnimationFrame(loop);
      } else {
        pos = targetPos;
        applyPos();
        animId = null;
      }
    }

    function startLoop() {
      if (!animId) animId = requestAnimationFrame(loop);
    }

    sliderWrap.addEventListener('mousedown', (e) => {
      dragging = true;
      setPos(e.clientX);
      startLoop();
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      setPos(e.clientX);
      startLoop();
    });

    window.addEventListener('mouseup', () => { dragging = false; });

    sliderWrap.addEventListener('touchstart', (e) => {
      dragging = true;
      setPos(e.touches[0].clientX);
      startLoop();
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      setPos(e.touches[0].clientX);
      startLoop();
    }, { passive: true });

    window.addEventListener('touchend', () => { dragging = false; });

    // Keyboard
    sliderWrap.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 10 : 5;
      if (e.key === 'ArrowLeft')  targetPos = Math.max(2,  targetPos - step);
      if (e.key === 'ArrowRight') targetPos = Math.min(98, targetPos + step);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        startLoop();
        e.preventDefault();
      }
    });

    // Initialise visual state
    divider.style.left = '50%';
    handle.style.left  = '50%';
  }

  /* ── 10. Card 3-D tilt micro-interaction ─────────────────── */
  if (!prefersReducedMotion() && window.innerWidth >= 1024) {
    $$('.service-card, .review-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
        const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
        card.style.transition = 'box-shadow 0.38s, background 0.38s, border-color 0.38s';
        card.style.transform  =
          `translateY(-7px) perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.38s, background 0.38s, border-color 0.38s';
        card.style.transform  = '';
      });
    });
  }

  /* ── 11. Button ripple on click ──────────────────────────── */
  $$('.btn-primary, .form-submit').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size   = Math.max(rect.width, rect.height) * 2;
      Object.assign(ripple.style, {
        position:     'absolute',
        borderRadius: '50%',
        width:  `${size}px`,
        height: `${size}px`,
        top:    `${e.clientY - rect.top  - size / 2}px`,
        left:   `${e.clientX - rect.left - size / 2}px`,
        background:   'rgba(255, 255, 255, 0.22)',
        transform:    'scale(0)',
        animation:    'btnRipple 0.55s ease-out forwards',
        pointerEvents:'none',
      });
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject ripple keyframes once
  if (!$('#luxe-ripple-style')) {
    const style = document.createElement('style');
    style.id = 'luxe-ripple-style';
    style.textContent = `
      @keyframes btnRipple {
        to { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 12. Reviews nav ─────────────────────────────────────── */
  const prevBtn = $('#review-prev');
  const nextBtn = $('#review-next');
  const cards   = $$('.review-card');
  let   currentCard = 0;

  function scrollToCard(index) {
    if (!cards.length) return;
    cards[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    currentCard = index;
  }

  prevBtn?.addEventListener('click', () => scrollToCard(Math.max(0, currentCard - 1)));
  nextBtn?.addEventListener('click', () => scrollToCard(Math.min(cards.length - 1, currentCard + 1)));

  /* ── 13. Contact form ────────────────────────────────────── */
  const form        = $('#contact-form');
  const formSuccess = $('#form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = $('#f-name',    form).value.trim();
      const email   = $('#f-email',   form).value.trim();
      const service = $('#f-service', form).value;

      // Visual error state
      [{ id: 'f-name', val: name }, { id: 'f-email', val: email }, { id: 'f-service', val: service }]
        .forEach(({ id, val }) => {
          const el = $(`#${id}`, form);
          if (!val) {
            el.style.borderColor = 'var(--c-error)';
            el.style.boxShadow   = '0 0 0 3px rgba(255,112,112,0.12)';
            el.addEventListener('input', () => {
              el.style.borderColor = '';
              el.style.boxShadow   = '';
            }, { once: true });
          }
        });

      if (!name || !email || !service) return;

      const btn = $('.form-submit', form);
      btn.textContent = 'Sending…';
      btn.disabled    = true;
      btn.style.opacity = '0.75';

      // Replace with real fetch/FormData when backend is ready
      setTimeout(() => {
        form.style.display = 'none';
        formSuccess.classList.add('visible');
        form.reset();
        btn.textContent  = 'Send Quote Request';
        btn.disabled     = false;
        btn.style.opacity = '';
      }, 1400);
    });
  }

  /* ── 14. Newsletter ──────────────────────────────────────── */
  const newsletter = $('.newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = $('.newsletter-btn', newsletter);
      btn.textContent = '✓';
      setTimeout(() => { btn.textContent = 'Join'; newsletter.reset(); }, 3000);
    });
  }

  /* ── 15. Sticky mobile CTA ───────────────────────────────── */
  const mobileCta = $('#mobile-cta-bar');
  if (mobileCta) {
    const ctaIo = new IntersectionObserver(
      ([entry]) => {
        const show = !entry.isIntersecting;
        mobileCta.classList.toggle('visible', show);
        mobileCta.setAttribute('aria-hidden', String(!show));
      },
      { threshold: 0 }
    );
    const heroSection = $('.hero');
    if (heroSection) ctaIo.observe(heroSection);
  }

  /* ── 16. Lazy-load fallback ──────────────────────────────── */
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          lazyIo.unobserve(img);
        }
      });
    });
    $$('img[loading="lazy"]').forEach((img) => lazyIo.observe(img));
  }

})();
