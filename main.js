/* Angel Mebuge — portfolio */

(function () {
  'use strict';

  /* ============ PROJECT DATA ============ */
  var PROJECTS = {
    jaundice: {
      kind: 'Digital health concept · Child health',
      title: 'Newborn jaundice on darker skin',
      images: [
        { src: 'images/web/jaundice.jpg', alt: 'Prototype home screen of the jaundice screening app beside a sleeping newborn' }
      ],
      facts: [
        ['Role', 'Project lead and creator'],
        ['Stage', 'Concept, Figma prototype'],
        ['Focus', 'Neonatal and child health, responsible AI']
      ],
      sections: [
        ['The problem', [
          'Neonatal jaundice is common and usually treatable, but on darker skin the yellowing is harder to see. Caregivers and frontline workers can miss it until it is serious.'
        ]],
        ['The concept', [
          'A phone-based tool that helps caregivers and health workers recognise possible jaundice and know when to seek a clinical assessment. It is a risk-screening and care-seeking aid, not a replacement for diagnosis or a lab test.'
        ], [
          'Guided photographs of the newborn',
          'Several body areas used in each assessment',
          'Calibration against a white reference card',
          'A risk level with clear next steps',
          'Reminders to check again',
          'Answers to common myths about jaundice',
          'Help finding a nearby health facility'
        ]],
        ['Who it is for', null, [
          'Parents and caregivers',
          'Nurses and midwives',
          'Community health workers'
        ]],
        ['Where', ['Nigeria first, with likely relevance to other African settings.']],
        ['My role', [
          'I started and developed the concept: defining the problem, the users, the solution and its features, and setting the product direction, including how responsible AI could later support image-based assessment.'
        ]]
      ],
      note: 'Computer vision and deep learning are part of the longer-term plan. They are not built into the current prototype.',
      link: 'https://www.figma.com/proto/qrVv6ZsVkn3HINncL3Vu6h?node-id=127:3',
      linkText: 'Open the Figma prototype'
    },
    hopewell: {
      kind: 'Programme analytics · Community health',
      title: 'HopeWell outreach review',
      images: [
        { src: 'images/web/hopewell-5.jpg', alt: 'Charts of programme performance by volume, cost-effectiveness and impact' },
        { src: 'images/web/hopewell-1.jpg', alt: 'The outreach session dataset with budget, reach, attendance and completed cases' },
        { src: 'images/web/hopewell-2.jpg', alt: 'Data cleaning log with each issue, its location, the action taken and the reason' },
        { src: 'images/web/hopewell-3.jpg', alt: 'Pivot tables of attendees and completed cases by intervention type and month' },
        { src: 'images/web/hopewell-4.jpg', alt: 'Further analysis tables from the HopeWell workbook' }
      ],
      facts: [
        ['Role', 'Team lead and data analyst'],
        ['Tools', 'Excel, PowerPoint'],
        ['Context', 'Data for Impact Bootcamp, Cohort 4']
      ],
      sections: [
        ['Overview', [
          'HopeWell Health Initiative is a Nigerian NGO running community outreach: immunisation clinics, malaria spraying, antenatal care, nutrition screening, HIV testing and more, across several states.',
          'Our team analysed its programme records to understand outreach performance and recommend how to plan future programmes.'
        ]],
        ['Objective', [
          'Find out which programmes reach the most people, complete the most cases and cost least per completed case, then turn that into recommendations for planning and decision-making.'
        ]],
        ['What we did', null, [
          'Cleaned and prepared the programme data, logging every fix and the reason for it',
          'Analysed reach, attendance, completion and cost by intervention and month',
          'Built charts to compare performance',
          'Wrote insights and recommendations',
          'Prepared and gave the final presentation'
        ]],
        ['My role', [
          'As team lead I coordinated each stage and guided the team through cleaning and analysis. I built the visualisations myself, identified the key insights, wrote the recommendations, prepared the deck and presented our findings.'
        ]],
        ['Deliverables', null, [
          'Cleaned and analysed dataset',
          'Data visualisations',
          'Insights and recommendations',
          'Presentation'
        ]]
      ],
      link: 'https://docs.google.com/spreadsheets/d/1dbwV8XDvp3eEd5A-BOdSX-7mPAGMYO-3/edit?usp=sharing&ouid=110267573420317805113&rtpof=true&sd=true',
      linkText: 'Open the workbook'
    },
    supplier: {
      kind: 'Power BI · Operations',
      title: 'Supplier quality dashboard',
      images: [
        { src: 'images/web/supplier-1.jpg', alt: 'Power BI dashboard of supplier defects and downtime by vendor and plant' }
      ],
      facts: [
        ['Role', 'Sole analyst and dashboard developer'],
        ['Tools', 'Power BI'],
        ['Output', 'Interactive dashboard']
      ],
      sections: [
        ['Overview', [
          'A manufacturer wanted to understand supplier quality and what defective raw materials were costing it. The data combined several plants and covered materials, defect types, vendors, defective quantities and the downtime they caused.'
        ]],
        ['Objective', [
          'Visualise supplier quality across plants, materials and vendors, with particular attention to defects and the downtime linked to them.'
        ]],
        ['What I did', null, [
          'Reviewed and prepared the dataset',
          'Analysed supplier, material, defect and plant-level data',
          'Measured defective quantities and the downtime they caused',
          'Built the interactive Power BI report',
          'Interpreted the patterns for management'
        ]],
        ['My role', [
          'I completed the project alone, from data preparation and analysis to building the dashboard and explaining what it shows.'
        ]]
      ],
      link: 'https://drive.google.com/file/d/1FTqg-Q5NBRKprDIwdNkKblKZiSJ-f_fO/view?usp=sharing',
      linkText: 'Open the report'
    },
    superstore: {
      kind: 'Excel · Sales analytics',
      title: 'Superstore sales analysis',
      images: [
        { src: 'images/web/superstore-2.jpg', alt: 'Excel sales dashboard with a written business insight summary' },
        { src: 'images/web/superstore-1.jpg', alt: 'Business questions and KPI analysis for the superstore data' },
        { src: 'images/web/superstore-3.jpg', alt: 'Further sales analysis charts' }
      ],
      facts: [
        ['Role', 'Sole data analyst'],
        ['Tools', 'Excel'],
        ['Output', 'Dashboard, insights, recommendations']
      ],
      sections: [
        ['Overview', [
          'An analysis of a superstore’s sales data to understand performance, find patterns and turn them into recommendations the business could act on.'
        ]],
        ['What I did', null, [
          'Reviewed and prepared the sales dataset',
          'Analysed sales and profit by category, region and state',
          'Found the strongest and weakest areas of the business',
          'Built an Excel dashboard and wrote a plain-language summary',
          'Made recommendations from the findings'
        ]],
        ['What it showed', [
          'Technology products and the West region drive most of the profit. Machines, tables, bookcases and supplies earn close to nothing, and the South and the Dakotas are barely reached. The recommendations cover discounting, bundling slow items and growing quiet regions.'
        ]]
      ],
      link: 'https://docs.google.com/spreadsheets/d/1YjK-Ut2Ag7bNeoLdw8czRqn5UqW7lBOJ/edit?usp=sharing&ouid=110267573420317805113&rtpof=true&sd=true',
      linkText: 'Open the workbook'
    }
  };

  /* ============ HELPERS ============ */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function supportsDialog(dialog) {
    return typeof dialog.showModal === 'function';
  }

  function openDialog(dialog) {
    if (supportsDialog(dialog)) dialog.showModal();
    else dialog.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
  }

  function closeDialog(dialog) {
    if (supportsDialog(dialog)) dialog.close();
    else dialog.removeAttribute('open');
  }

  document.querySelectorAll('dialog').forEach(function (dialog) {
    dialog.addEventListener('close', function () {
      document.body.style.overflow = '';
      if (dialog.__onClose) dialog.__onClose();
    });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.closest('[data-close]')) closeDialog(dialog);
    });
  });

  /* ============ CASE STUDY DIALOG ============ */
  var caseDialog = document.getElementById('caseDialog');
  var caseBody = document.getElementById('caseDialogBody');
  var caseKind = document.getElementById('caseDialogKind');

  function buildGallery(images, startIndex) {
    var gallery = el('div', 'cd-gallery');
    var stage = el('div', 'cd-stage');
    images.forEach(function (image, i) {
      var slide = el('div', 'cd-slide');
      var img = el('img');
      img.src = image.src;
      img.alt = image.alt;
      slide.appendChild(img);
      stage.appendChild(slide);
    });
    gallery.appendChild(stage);

    var slides = stage.children;
    var current = 0;
    var count = el('p', 'cd-count');
    count.setAttribute('aria-live', 'polite');

    function show(index) {
      current = (index + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (s, i) { s.classList.toggle('is-active', i === current); });
      count.textContent = 'Image ' + (current + 1) + ' of ' + slides.length;
    }

    if (images.length > 1) {
      var controls = el('div', 'cd-controls');
      var nav = el('div', 'cd-nav');
      var prev = el('button', '', 'Previous');
      var next = el('button', '', 'Next');
      prev.type = next.type = 'button';
      prev.addEventListener('click', function () { show(current - 1); });
      next.addEventListener('click', function () { show(current + 1); });
      gallery.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
      });
      nav.appendChild(prev);
      nav.appendChild(next);
      controls.appendChild(count);
      controls.appendChild(nav);
      gallery.appendChild(controls);
    }
    show(startIndex || 0);
    return gallery;
  }

  function openProject(id, startIndex) {
    var p = PROJECTS[id];
    if (!p) return;
    caseKind.textContent = p.kind;
    caseBody.innerHTML = '';

    var inner = el('div', 'cd-inner');
    var title = el('h3', 'cd-title', p.title);
    title.id = 'caseDialogTitle';
    inner.appendChild(title);
    inner.appendChild(buildGallery(p.images, startIndex));

    var facts = el('dl', 'cd-facts');
    p.facts.forEach(function (f) {
      var row = el('div');
      row.appendChild(el('dt', '', f[0]));
      row.appendChild(el('dd', '', f[1]));
      facts.appendChild(row);
    });
    inner.appendChild(facts);

    p.sections.forEach(function (s) {
      var section = el('section', 'cd-section');
      section.appendChild(el('h4', '', s[0]));
      var content = el('div');
      (s[1] || []).forEach(function (text) { content.appendChild(el('p', '', text)); });
      if (s[2]) {
        var list = el('ul');
        s[2].forEach(function (text) { list.appendChild(el('li', '', text)); });
        content.appendChild(list);
      }
      section.appendChild(content);
      inner.appendChild(section);
    });

    if (p.note) {
      var noteSection = el('div', 'cd-section');
      noteSection.appendChild(el('h4', '', 'Note'));
      noteSection.appendChild(el('p', 'cd-note', p.note));
      inner.appendChild(noteSection);
    }

    var footer = el('div', 'cd-footer');
    var link = el('a', 'btn btn-primary', p.linkText);
    link.href = p.link;
    link.target = '_blank';
    link.rel = 'noopener';
    var close = el('button', 'btn btn-quiet', 'Back to the portfolio');
    close.type = 'button';
    close.setAttribute('data-close', '');
    footer.appendChild(link);
    footer.appendChild(close);
    inner.appendChild(footer);

    caseBody.appendChild(inner);
    openDialog(caseDialog);
    caseDialog.scrollTop = 0;
  }

  document.querySelectorAll('[data-project]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openProject(trigger.getAttribute('data-project'), Number(trigger.getAttribute('data-slide')) || 0);
    });
  });

  /* ============ CERTIFICATE DIALOG ============ */
  var certDialog = document.getElementById('certDialog');
  var certImg = document.getElementById('certDialogImg');
  var certTitle = document.getElementById('certDialogTitle');

  document.querySelectorAll('[data-cert]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var title = trigger.getAttribute('data-title');
      certImg.src = trigger.getAttribute('data-cert');
      certImg.alt = title + ' certificate';
      certTitle.textContent = title;
      openDialog(certDialog);
    });
  });

  /* ============ MOBILE NAV ============ */
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  function setMenu(open) {
    mobileNav.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Close' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', function () { setMenu(mobileNav.hidden); });
  mobileNav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileNav.hidden) setMenu(false);
  });

  /* ============ HEADER STATE + ACTIVE LINK ============ */
  var header = document.querySelector('.site-header');
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]:not(.nav-action)');

  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'about', 'credentials', 'contact'].forEach(function (id) {
      var section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  /* ============ REVEAL ON SCROLL ============ */
  var reveals = document.querySelectorAll('.reveal');
  var STAGGER_MS = 80;

  /* Stagger siblings that enter together */
  reveals.forEach(function (item) {
    var siblings = Array.prototype.filter.call(item.parentElement.children, function (c) {
      return c.classList.contains('reveal');
    });
    var index = siblings.indexOf(item);
    if (index > 0) item.style.setProperty('--d', Math.min(index, 6) * STAGGER_MS + 'ms');
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (item) { revealObserver.observe(item); });
  } else {
    reveals.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ============ LEGACY LINKS ============ */
  /* Old shared links used #catalogue, #atelier and #inquire */
  var LEGACY = { home: 'top', catalogue: 'work', atelier: 'about', inquire: 'contact' };
  var hash = location.hash.replace('#', '');
  if (LEGACY[hash]) {
    var target = document.getElementById(LEGACY[hash]);
    if (target) target.scrollIntoView();
  }

  /* ============ CONTACT FORM ============ */
  var form = document.getElementById('inquireForm');
  var note = document.getElementById('formNote');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var data = new FormData(form);
    var message = [
      'Hello Angel,',
      '',
      'My name is ' + data.get('name') + '.',
      'Email: ' + data.get('email'),
      'About: ' + data.get('interest'),
      '',
      data.get('message')
    ].join('\n');

    window.open('https://wa.me/2348151554271?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
    note.textContent = 'Your message is ready in WhatsApp. Press send there to reach me.';
    form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
