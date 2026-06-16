/* ================================================================
   SITE CONFIGURATION — Edit ONLY this file for client setup
   ================================================================
   All text, colors, images, and content live here.
   Save the file and reload the browser to see changes instantly.
   ================================================================ */

const SITE_CONFIG = {

  /* ──────────────────────────────────────────────────────────
     BUSINESS IDENTITY
     ────────────────────────────────────────────────────────── */
  business: {
    name:         'LuxeWash Estate Care',
    phone:        '(555) 123-4567',          // displayed to visitors
    phoneRaw:     '+15551234567',            // used in tel: links (no spaces/dashes)
    email:        'concierge@luxewash.com',
    url:          'https://luxewash.com',    // no trailing slash
    foundingYear: '2014',
    priceRange:   '$$$',                     // $ | $$ | $$$ | $$$$
  },

  /* ──────────────────────────────────────────────────────────
     COLORS
     All site accent colors derive from these three values.
     Use any valid CSS hex/rgb/hsl color.
     ────────────────────────────────────────────────────────── */
  colors: {
    accent:       '#4A7FA7',   // steel blue — used for CTAs, highlights, icon glow
    accentLight:  '#7BAFD0',   // lighter blue — hover states, gradients
    accentBright: '#B3CFE5',   // sky blue — stat numbers, shimmer peaks
  },

  /* ──────────────────────────────────────────────────────────
     IMAGES
     Paste full URLs or relative paths (e.g. "assets/hero.jpg")
     ────────────────────────────────────────────────────────── */
  images: {
    // Hero full-screen image (also used as the blurred page background)
    hero: 'stitch_elite_pressure_washing_website (1)/screen.png',

    // Before/After slider — BEFORE image (dirty/uncleaned)
    before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD01ao0Z-LkIzcr7Wq70kTQz_xdtdP4chWHMCQEdwFaEmnAQUx8auQ_woA9rGfWU0TojMuYhUSSYQ_E9yfGeqrhh869UCWbx6e4p7U8O6j804_uv7U0yISeu7vAY7o0AqvqRfantXIVsRAvMnAMhFhLPH9UzasA6ieEhIPnZjzh5d0CxgECnK5nTsm77kxWyco5YC8m14ZttSuXHzUpr6PyX3tkJJ84asCTQMsxJesbwj4ZwahC9mxr0TLSJqfpqrDUn8bXBP6AxX4',

    // Before/After slider — AFTER image (clean result)
    after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDocOPcWGcDFk3WfbRAS3UVoVzVXqweeO8HbRCLDUt5mEWKhncTS7PCxoIl3ruvXZfw3BKoOrXzzpJytwfDhaLLfwP6asv9L5dQd6qXHwcRpi9XvUwYNyR6rZ00NdujfBh9lHaj5LFP0b1ZGLXWJ8cqsW8K2KK59vnTuHaY0ZvvWI0bmx-RxJ6s6FhkFq7b2igdSMhBPYxHBgmA5SPAu5kH7Kchj9TBxlBVuR15hN-05YGZJ8Anx96SJH7Nzxyz3R0UWrrNl4l0DKU',

    // About section team/work photo
    about: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWYeVZrGJX0j51qpsCr7DJE-xsjH1MMzSqedjTc37HSCw_hCDY6_mvWRLIu06wBiuR4PrHGE_4tGjdQxwWtod6mGQih4nnCgr7Wq04uEvtHkin6mQ0FVado2bmidY2VGV37VaNXbEYiVOtnUB4a644iP76n7XOBKXHriFzvfBP0ao7o8ewvO7paO_HqM3oNsJRTd03BjrgyccFSmoJRR0LgQMhZsAjlwEnS1D6GMq__9sGNWAgdmNE5jUMg79G6qthprukHmvLS6I',

    // Social share / Open Graph image (recommended: 1200×630px)
    ogImage: 'https://luxewash.com/assets/og-image.jpg',
  },

  /* ──────────────────────────────────────────────────────────
     SEO
     ────────────────────────────────────────────────────────── */
  seo: {
    pageTitle:   'LuxeWash Estate Care | Premium Pressure Washing & Exterior Cleaning',
    description: 'LuxeWash Estate Care delivers premium pressure washing and soft wash services for luxury homes and commercial properties. Serving Greenwich, Stamford, Darien, and surrounding Connecticut communities. 500+ five-star reviews. Get a free quote today.',
    ogTitle:     'LuxeWash Estate Care | Premium Pressure Washing',
    ogDesc:      'Expert soft-wash and pressure washing for estates and commercial properties. Eco-friendly, fully insured, 100% satisfaction guaranteed.',
  },

  /* ──────────────────────────────────────────────────────────
     HERO SECTION
     titleLine1 + titleLine2 appear on separate lines.
     titleAccent is the last word(s) shown in gold.
     ────────────────────────────────────────────────────────── */
  hero: {
    titleLine1:   'Restore Your',
    titleLine2:   "Property's",          // text BEFORE the gold accent
    titleAccent:  'Curb Appeal',         // shown in gold gradient
    subtitle:     "Experience the ultimate in residential and commercial exterior restoration. Our low-pressure soft wash techniques protect your investment while delivering immaculate results.",
    ctaPrimary:   { text: 'Get Free Quote', href: '#contact' },
    ctaGhost:     { text: 'Call Now' },  // href auto-set from business.phoneRaw
    socialProof:  '500+ Verified 5-Star Reviews',
    heroImageAlt: 'A grand stone driveway of a luxury estate, freshly pressure washed to reveal pristine cream stonework. Sunlight filters through oak trees.',
  },

  /* ──────────────────────────────────────────────────────────
     SERVICES SECTION (6 cards)
     Icons are fixed SVGs — only title and description change here.
     ────────────────────────────────────────────────────────── */
  services: {
    eyebrow: 'What We Do',
    heading: 'Precision Cleaning Solutions',
    sub:     'Tailored maintenance for luxury estates and commercial properties using industry-leading equipment and eco-friendly chemistry.',
    items: [
      {
        title: 'House Washing',
        desc:  "Gentle soft wash technique to remove mold, mildew, and dirt without damaging delicate siding, stucco, or masonry on your home's exterior.",
      },
      {
        title: 'Driveway Cleaning',
        desc:  'High-pressure surface cleaning for concrete, pavers, brick, and asphalt. Removes years of oil stains, tire marks, and embedded grime.',
      },
      {
        title: 'Roof Soft Wash',
        desc:  "Safe chemical cleaning for asphalt shingles, clay tiles, and slate. Eliminates black algae streaks and extends your roof's lifespan by years.",
      },
      {
        title: 'Deck & Patio',
        desc:  'Restoration for wood, composite, stone, and concrete outdoor living spaces. We prepare surfaces for sealing and staining too.',
      },
      {
        title: 'Commercial Wash',
        desc:  'Fleet and facility maintenance for storefronts, warehouses, and multi-unit properties. Keep your business exterior professional and welcoming.',
      },
      {
        title: 'Surface Sealing',
        desc:  'Protect newly cleaned surfaces with premium penetrating sealants engineered to resist water intrusion, oil, and UV fading for years.',
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     WHY CHOOSE US (4 pillars)
     ────────────────────────────────────────────────────────── */
  whyUs: {
    eyebrow: 'Why LuxeWash',
    heading: 'Built for Estates.\nNot Ordinary Homes.',  // \n = line break
    sub:     "Most pressure washing companies use one-size-fits-all methods. We don't. Every property gets a calibrated approach that protects its materials while achieving the deepest clean possible.",
    items: [
      {
        title: 'Licensed & Insured',
        desc:  'Full commercial liability coverage and state licensing so your property and investment are always protected.',
      },
      {
        title: 'Eco-Friendly',
        desc:  'Biodegradable, plant-safe cleaning solutions that comply with local stormwater regulations and protect your landscaping.',
      },
      {
        title: 'Low-Pressure Tech',
        desc:  'Proprietary soft-wash systems that clean at 40–80 PSI — protecting shingles, wood, and painted surfaces from damage.',
      },
      {
        title: '100% Guaranteed',
        desc:  "We don't leave until you're completely satisfied. If something isn't right, we return and make it right — no questions asked.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     BEFORE / AFTER GALLERY
     ────────────────────────────────────────────────────────── */
  gallery: {
    eyebrow:     'See the Difference',
    heading:     'Visible Transformation',
    sub:         "Don't just take our word for it. Our before-and-after results speak volumes about the depth of our cleaning process. We reach the layers of grime that standard equipment leaves behind.",
    checklistItems: [
      'Eco-friendly biodegradable cleaners',
      'Damage-free low-pressure technology',
      'Fully insured and licensed technicians',
      'Satisfaction guaranteed on every job',
    ],
    beforeLabel:  'BEFORE',
    afterLabel:   'AFTER',
    beforeAlt:    'Before: weathered driveway covered in moss, oil stains, and years of grime',
    afterAlt:     'After: the same driveway now pristinely clean, revealing original cream stone texture',
  },

  /* ──────────────────────────────────────────────────────────
     PROCESS (4 steps)
     ────────────────────────────────────────────────────────── */
  process: {
    eyebrow: 'How It Works',
    heading: 'Seamless Service Delivery',
    sub:     'Four simple steps from first contact to a property you\'re proud of.',
    steps: [
      {
        title: 'Request a Quote',
        desc:  "Submit your details online or call us. We'll build a tailored proposal for your specific property.",
      },
      {
        title: 'Schedule',
        desc:  'Pick a time that works for you. We arrive on time, every time, and respect your property throughout.',
      },
      {
        title: 'Professional Cleaning',
        desc:  "Our certified technicians use elite equipment calibrated specifically for your property's materials.",
      },
      {
        title: 'Enjoy the Results',
        desc:  'Stunning curb appeal, protected surfaces, and a 100% satisfaction guarantee on every job.',
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     STATS (3 counters)
     value: the number to count up to
     suffix: character appended after the number ('+', '%', 'k', etc.)
     label: text below the number
     ────────────────────────────────────────────────────────── */
  stats: [
    { value: 1500, suffix: '+', label: 'Projects Completed' },
    { value: 500,  suffix: '+', label: 'Verified 5-Star Reviews' },
    { value: 10,   suffix: '+', label: 'Years of Experience' },
  ],

  /* ──────────────────────────────────────────────────────────
     REVIEWS (3 cards)
     avatar: URL to a square profile photo (displayed 48×48px)
     ────────────────────────────────────────────────────────── */
  reviews: {
    eyebrow: 'Client Stories',
    heading: 'Trusted by Estate Owners',
    sub:     'Hear from clients about the LuxeWash difference.',
    items: [
      {
        quote:  '"LuxeWash transformed our 20-year-old driveway. It looks brand new. The team was professional, punctual, and extremely careful with our landscaping. Couldn\'t be more pleased."',
        name:   'James Wilson',
        role:   'Estate Owner, Greenwich',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADywFNSl8YuQHviTKSrY9Euctgx96IH40qkeXb6Zvv5iBxDLgmO9Sxq9LryYEcytKYVj_AFBGl0jUVRp0LVubwLdHmQtqHwQwOcJOsSSJ-T4Hg_ecLDpgOgxwiX82VK6aWg18NIFhe8I1xzxEtkp6rsqFbRTQrmO3klrMmTEulsHrxnmZk66ourRb0vFPM-x9dRV0CKqkoPsXU-5I94H3Zg1MyT2nv_EjvyrgCmh2wyJ32H6aRuIJI_vT0JQkwPjTaX_-qpknBshI',
      },
      {
        quote:  '"The soft wash on our roof removed all those ugly black streaks without any damage whatsoever. Worth every penny for the curb appeal alone — our neighbors keep asking who did it!"',
        name:   'Sarah Jenkins',
        role:   'Residential Client, Darien',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrqmVDjKmcjl8zLa7eBwE-vb5Anx0Y6omeL4atVCkbsiBtrqtAUgrbirA_Sqd-_Jf3b8a5AxFb-eK1uh4-IvS-R9BHUvkOJqZqyKB4lMUSh_3joDL5NNkTzv6qJ4qzjqBXjfrrUp6THE9BZi-aouZvJZJn86KDe9ayYkmuK6KAYOrbym9XrE4LMslkUAmNAxJ6DVdIQQXH3o5qp4dNfrjGMsD2iMZdfjbCT3t86ko7YL7jld0qeU26DJLg547Q97ZzZNDXx5nATXc',
      },
      {
        quote:  '"We use LuxeWash for all twelve of our commercial properties. Their consistency and attention to detail is simply unmatched. Tenants have noticed and commented on the difference."',
        name:   'Robert Chen',
        role:   'Property Manager, Stamford',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjONelaJzof9c0jpZl4Befh-GR7rQ1FZgw2E7tP9huo3CnxwohzUD1sEPD-tjpwks6XkPNMVOaWLERT9z1GUFt4-3BCp-fNpktzIZKMNNvS487UNYirjS0dVGTIkMd6CoEFNMl7wKb0_0XgSSlzMMAe2mq5ClVJRzWNNR46z-tZ8m4nXPuohM7rjOTbBTyTPMn0NvzzdRycRB_JlCsAZfhbxBa-PFGLTiqYflXz0rUeL5OA06G3o2ihp7TqJwyqb3E_Muu6UTsXl4',
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     ABOUT SECTION
     ────────────────────────────────────────────────────────── */
  about: {
    eyebrow:    'Our Story',
    heading:    'The LuxeWash Philosophy',
    body1:      'Founded on the principle that property maintenance should be an art form, LuxeWash was built to serve homeowners who demand the best. We view every driveway, roof, and siding as a canvas for restoration.',
    body2:      'Our technicians are not just laborers — they are certified specialists trained in the chemistry of cleaning and the mechanics of preservation. We use proprietary blends and specialized low-pressure systems designed specifically for high-value estate materials.',
    pillars: [
      { title: 'Sustainable', desc: 'Biodegradable products that are safe for your pets, plants, and local watershed.' },
      { title: 'Technical',   desc: 'State-of-the-art equipment that manages pressure with surgical precision.' },
      { title: 'Certified',   desc: 'PWNA-certified technicians with ongoing training in new materials and methods.' },
      { title: 'Insured',     desc: "Full commercial liability and workers' comp so you're always protected." },
    ],
    badgeTitle: 'Guaranteed Results',
    badgeText:  "We don't leave until you're absolutely delighted with the work.",
    imageAlt:   'LuxeWash technicians in branded uniforms operating professional soft-wash equipment on a luxury estate property with manicured lawns',
  },

  /* ──────────────────────────────────────────────────────────
     SERVICE AREAS
     Add or remove cities. Each becomes a clickable chip.
     stateCode is appended to each city in the schema markup.
     ────────────────────────────────────────────────────────── */
  areas: {
    eyebrow:   'Where We Work',
    heading:   "Serving Connecticut's Finest Communities",
    sub:       'We proudly serve homeowners and property managers across Fairfield and Westchester County. Not sure if we cover your area? Just ask.',
    areasNote: "Not on the list? Contact us — we may still cover your area.",
    stateCode: 'CT',
    cities: [
      'Greenwich',
      'Stamford',
      'Darien',
      'New Canaan',
      'Westport',
      'Fairfield',
      'Wilton',
      'Ridgefield',
    ],
  },

  /* ──────────────────────────────────────────────────────────
     CONTACT SECTION
     ────────────────────────────────────────────────────────── */
  contact: {
    heading:      'Get Your Estate Restored',
    sub:          'Ready to see your property transform? Fill out the form for a comprehensive, no-obligation quote within 24 hours.',
    emailLabel:   'Email us at',
    phoneLabel:   'Call directly',
    successMsg:   "Thank you! We've received your request and will be in touch within 24 hours.",
    submitBtnText: 'Send Quote Request',
  },

  /* ──────────────────────────────────────────────────────────
     FOOTER
     ────────────────────────────────────────────────────────── */
  footer: {
    brandDesc:       'Defining the standard of excellence for estate property restoration and exterior maintenance since 2014.',
    newsletterHead:  'Seasonal Tips',
    newsletterDesc:  'Get expert exterior maintenance tips for your estate, delivered seasonally.',
    copyright:       '© 2025 LuxeWash Estate Care. All rights reserved.',
    tagline:         'Premium exterior care for discerning homeowners.',
    // Social links — set to '#' to hide or paste real profile URLs
    socials: {
      facebook:  '#',
      instagram: '#',
      google:    '#',
    },
  },

};

/* ================================================================
   CONFIG APPLIER — do not edit below this line
   ================================================================ */
(function applyConfig() {
  const C = SITE_CONFIG;

  function q(sel)  { return document.querySelector(sel); }
  function qa(sel) { return document.querySelectorAll(sel); }
  function setText(sel, val) {
    const el = q(sel);
    if (el && val !== undefined) el.textContent = val;
  }
  function setSrc(sel, val) {
    const el = q(sel);
    if (el && val) el.src = val;
  }
  function setAttr(sel, attr, val) {
    const el = q(sel);
    if (el && val) el.setAttribute(attr, val);
  }

  /* ── Colors ─────────────────────────────────────────────── */
  const root = document.documentElement;
  root.style.setProperty('--gold',         C.colors.accent);
  root.style.setProperty('--gold-light',   C.colors.accentLight);
  root.style.setProperty('--gold-bright',  C.colors.accentBright);

  /* ── SEO / Meta ─────────────────────────────────────────── */
  document.title = C.seo.pageTitle;
  setAttr('meta[name="description"]',       'content', C.seo.description);
  setAttr('link[rel="canonical"]',          'href',    C.business.url + '/');
  setAttr('meta[property="og:url"]',        'content', C.business.url + '/');
  setAttr('meta[property="og:title"]',      'content', C.seo.ogTitle);
  setAttr('meta[property="og:description"]','content', C.seo.ogDesc);
  setAttr('meta[property="og:image"]',      'content', C.images.ogImage);

  /* ── JSON-LD Schema ─────────────────────────────────────── */
  const schema = q('script[type="application/ld+json"]');
  if (schema) {
    try {
      const data = JSON.parse(schema.textContent);
      data.name                          = C.business.name;
      data.telephone                     = C.business.phone;
      data.email                         = C.business.email;
      data.url                           = C.business.url;
      data.foundingDate                  = C.business.foundingYear;
      data.priceRange                    = C.business.priceRange;
      data.aggregateRating.reviewCount   = String(C.stats[1].value);
      data.areaServed = C.areas.cities.map(city => city + ', ' + C.areas.stateCode);
      schema.textContent = JSON.stringify(data, null, 2);
    } catch (e) { /* schema parse error — skip */ }
  }

  /* ── Images ─────────────────────────────────────────────── */
  setSrc('#hero-img', C.images.hero);
  if (q('#hero-img')) q('#hero-img').alt = C.hero.heroImageAlt;
  // Sync blurred background with hero image
  const pageBg = q('.page-bg-blur');
  if (pageBg) pageBg.style.backgroundImage = `url("${C.images.hero}")`;
  // Before/After slider
  setSrc('.slider-before img', C.images.before);
  setSrc('.slider-after img',  C.images.after);
  if (q('.slider-before img')) q('.slider-before img').alt = C.gallery.beforeAlt;
  if (q('.slider-after img'))  q('.slider-after img').alt  = C.gallery.afterAlt;
  // About
  setSrc('.about-image-wrap img', C.images.about);
  if (q('.about-image-wrap img')) q('.about-image-wrap img').alt = C.about.imageAlt;

  /* ── Phone & Email links (all occurrences) ──────────────── */
  qa('a[href^="tel:"]').forEach(el => {
    el.href = 'tel:' + C.business.phoneRaw;
    // Update visible text only if it looks like a phone number
    if (/^\(?\d|\+/.test(el.textContent.trim())) el.textContent = C.business.phone;
  });
  qa('a[href^="mailto:"]').forEach(el => {
    el.href = 'mailto:' + C.business.email;
    if (el.textContent.includes('@')) el.textContent = C.business.email;
  });

  /* ── Nav ────────────────────────────────────────────────── */
  setText('.nav-logo', C.business.name);

  /* ── Hero ───────────────────────────────────────────────── */
  setText('.title-l1', C.hero.titleLine1);
  const l2 = q('.title-l2');
  if (l2) l2.innerHTML = C.hero.titleLine2 + ' <mark class="title-mark">' + C.hero.titleAccent + '</mark>';
  setText('.hero-sub', C.hero.subtitle);
  const heroPrimary = q('.hero-actions .btn-primary');
  if (heroPrimary) { heroPrimary.textContent = C.hero.ctaPrimary.text; heroPrimary.href = C.hero.ctaPrimary.href; }
  const heroGhost = q('.hero-actions .btn-ghost');
  if (heroGhost) {
    // Preserve the SVG icon, only update the text node
    const svg = heroGhost.querySelector('svg');
    heroGhost.innerHTML = '';
    if (svg) heroGhost.appendChild(svg);
    heroGhost.appendChild(document.createTextNode(' ' + C.hero.ctaGhost.text));
    heroGhost.href = 'tel:' + C.business.phoneRaw;
  }
  setText('.hero-review-text', C.hero.socialProof);

  /* ── Services ───────────────────────────────────────────── */
  setText('.services-intro .eyebrow',        C.services.eyebrow);
  setText('#services-title',                 C.services.heading);
  setText('.services-intro .section-sub',    C.services.sub);
  const serviceCards = qa('.service-card');
  C.services.items.forEach((item, i) => {
    if (!serviceCards[i]) return;
    setText(`.service-card:nth-child(${i+1}) h3`, item.title);
    setText(`.service-card:nth-child(${i+1}) p`,  item.desc);
    const link = serviceCards[i].querySelector('.service-link');
    if (link) link.setAttribute('aria-label', 'Learn more about ' + item.title.toLowerCase());
  });

  /* ── Why Us ─────────────────────────────────────────────── */
  setText('.why-us-intro .eyebrow', C.whyUs.eyebrow);
  const whyHeading = q('#why-title');
  if (whyHeading) whyHeading.innerHTML = C.whyUs.heading.replace('\n', '<br>');
  setText('.why-us-intro .section-sub', C.whyUs.sub);
  const whyCards = qa('.why-card');
  C.whyUs.items.forEach((item, i) => {
    if (!whyCards[i]) return;
    setText(`.why-card:nth-child(${i+1}) h3`, item.title);
    setText(`.why-card:nth-child(${i+1}) p`,  item.desc);
  });

  /* ── Gallery ────────────────────────────────────────────── */
  setText('.gallery-copy .eyebrow',    C.gallery.eyebrow);
  setText('#gallery-title',            C.gallery.heading);
  setText('.gallery-copy .section-sub', C.gallery.sub);
  const checkItems = qa('.gallery-checklist li');
  C.gallery.checklistItems.forEach((text, i) => {
    if (!checkItems[i]) return;
    const svg = checkItems[i].querySelector('svg');
    checkItems[i].innerHTML = '';
    if (svg) checkItems[i].appendChild(svg);
    checkItems[i].appendChild(document.createTextNode('\n              ' + text + '\n            '));
  });
  setText('.slider-label-before', C.gallery.beforeLabel);
  setText('.slider-label-after',  C.gallery.afterLabel);

  /* ── Process ────────────────────────────────────────────── */
  setText('.process-intro .eyebrow',   C.process.eyebrow);
  setText('#process-title',            C.process.heading);
  setText('.process-intro .section-sub', C.process.sub);
  const processSteps = qa('.process-step');
  C.process.steps.forEach((step, i) => {
    if (!processSteps[i]) return;
    setText(`.process-step:nth-child(${i+1}) h4`, step.title);
    setText(`.process-step:nth-child(${i+1}) p`,  step.desc);
  });

  /* ── Stats ──────────────────────────────────────────────── */
  const statNumbers = qa('.stat-number[data-target]');
  const statLabels  = qa('.stat-label');
  C.stats.forEach((stat, i) => {
    if (statNumbers[i]) {
      statNumbers[i].dataset.target = String(stat.value);
      statNumbers[i].dataset.suffix = stat.suffix;
    }
    if (statLabels[i]) statLabels[i].textContent = stat.label;
  });

  /* ── Reviews ────────────────────────────────────────────── */
  setText('.reviews-header .eyebrow', C.reviews.eyebrow);
  setText('#reviews-title',           C.reviews.heading);
  const reviewCards = qa('.review-card');
  C.reviews.items.forEach((item, i) => {
    if (!reviewCards[i]) return;
    setText(`.review-card:nth-child(${i+1}) .review-text`, item.quote);
    setText(`.review-card:nth-child(${i+1}) .review-name`, item.name);
    setText(`.review-card:nth-child(${i+1}) .review-role`, item.role);
    const avatar = reviewCards[i].querySelector('.review-avatar');
    if (avatar) { avatar.src = item.avatar; avatar.alt = item.name; }
  });

  /* ── About ──────────────────────────────────────────────── */
  setText('.about-copy .eyebrow', C.about.eyebrow);
  setText('#about-title',         C.about.heading);
  const aboutParas = qa('.about-copy > p');
  if (aboutParas[0]) aboutParas[0].textContent = C.about.body1;
  if (aboutParas[1]) aboutParas[1].textContent = C.about.body2;
  const abPillars = qa('.about-pillar');
  C.about.pillars.forEach((p, i) => {
    if (!abPillars[i]) return;
    setText(`.about-pillar:nth-child(${i+1}) h4`, p.title);
    setText(`.about-pillar:nth-child(${i+1}) p`,  p.desc);
  });
  setText('.about-badge-title', C.about.badgeTitle);
  setText('.about-badge-text',  C.about.badgeText);

  /* ── Service Areas ──────────────────────────────────────── */
  setText('.areas-intro .eyebrow',     C.areas.eyebrow);
  setText('#areas-title',              C.areas.heading);
  setText('.areas-intro .section-sub', C.areas.sub);
  const areaChips = qa('.area-chip');
  C.areas.cities.forEach((city, i) => {
    if (!areaChips[i]) return;
    const svg = areaChips[i].querySelector('svg');
    areaChips[i].innerHTML = '';
    if (svg) areaChips[i].appendChild(svg);
    areaChips[i].appendChild(document.createTextNode('\n          ' + city + '\n        '));
    areaChips[i].setAttribute('aria-label', 'We serve ' + city);
  });
  const areasNote = q('.areas-note');
  if (areasNote) areasNote.innerHTML = C.areas.areasNote.replace('Contact us', '<a href="#contact">Contact us</a>');

  /* ── Contact ────────────────────────────────────────────── */
  setText('#contact-title',                  C.contact.heading);
  setText('.contact-info > p',               C.contact.sub);
  const detailLabels = qa('.contact-detail-label');
  if (detailLabels[0]) detailLabels[0].textContent = C.contact.emailLabel;
  if (detailLabels[1]) detailLabels[1].textContent = C.contact.phoneLabel;
  setText('.form-submit', C.contact.submitBtnText);
  const successEl = q('#form-success');
  if (successEl) successEl.innerHTML = '<strong>Thank you!</strong> ' + C.contact.successMsg;

  /* ── Footer ─────────────────────────────────────────────── */
  setText('.footer-brand-name', C.business.name);
  setText('.footer-brand-desc', C.footer.brandDesc);
  const footerBottom = qa('.footer-bottom p');
  if (footerBottom[0]) footerBottom[0].textContent = C.footer.copyright;
  if (footerBottom[1]) footerBottom[1].textContent = C.footer.tagline;
  const footerColHeadings = qa('.footer-col h4');
  // Newsletter column
  const newsletterCol = q('.footer-col:last-child');
  if (newsletterCol) {
    const h4 = newsletterCol.querySelector('h4');
    const desc = newsletterCol.querySelector('.newsletter-desc');
    if (h4)   h4.textContent   = C.footer.newsletterHead;
    if (desc) desc.textContent = C.footer.newsletterDesc;
  }
  // Social links
  const socialLinks = qa('.footer-social');
  const socialKeys = ['facebook', 'instagram', 'google'];
  socialLinks.forEach((el, i) => {
    if (C.footer.socials[socialKeys[i]]) el.href = C.footer.socials[socialKeys[i]];
  });

})();
