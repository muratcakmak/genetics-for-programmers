/* ============================================================
   scripts.js — shared interactive engine for the genetics ebook
   ============================================================ */

/* ---------- 1. Reading progress bar ---------- */
(function () {
  function updateProgress() {
    var bar = document.getElementById('reading-progress');
    if (!bar) return;
    var scrolled = window.scrollY || window.pageYOffset;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) { bar.style.width = '100%'; return; }
    bar.style.width = Math.min(100, (scrolled / total) * 100) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  document.addEventListener('DOMContentLoaded', updateProgress);
})();

/* ---------- 2. Chapter completion (localStorage) ---------- */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var slug = (window.location.pathname.match(/chapter-(\d+)/) || [])[1];
    if (!slug) return;

    function markDone() {
      var done = JSON.parse(localStorage.getItem('chapters_done') || '[]');
      if (done.indexOf(slug) === -1) {
        done.push(slug);
        localStorage.setItem('chapters_done', JSON.stringify(done));
      }
    }

    function checkScroll() {
      var scrolled = window.scrollY + window.innerHeight;
      var total = document.documentElement.scrollHeight;
      if (scrolled / total > 0.90) {
        markDone();
        window.removeEventListener('scroll', checkScroll);
      }
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
  });

  /* index.html: apply checkmarks */
  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.toc-list')) return;
    var done = JSON.parse(localStorage.getItem('chapters_done') || '[]');
    done.forEach(function (n) {
      var link = document.querySelector('.toc-list a[href="chapter-' + n + '.html"]');
      if (link && !link.querySelector('.toc-check')) {
        var check = document.createElement('span');
        check.className = 'toc-check';
        check.setAttribute('aria-label', 'completed');
        check.textContent = ' ✓';
        link.appendChild(check);
      }
    });
  });
})();

/* ---------- 3. Glossary tooltips ---------- */
(function () {
  var tooltip;

  function getTooltip() {
    if (!tooltip) {
      tooltip = document.getElementById('tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.setAttribute('role', 'tooltip');
        document.body.appendChild(tooltip);
      }
    }
    return tooltip;
  }

  function show(el, def) {
    var t = getTooltip();
    t.textContent = def;
    t.classList.add('visible');
    positionTooltip(t, el);
  }

  function hide() {
    var t = getTooltip();
    t.classList.remove('visible');
  }

  function positionTooltip(t, el) {
    var rect = el.getBoundingClientRect();
    var tw = t.offsetWidth || 280;
    var th = t.offsetHeight || 40;
    var x = rect.left + rect.width / 2 - tw / 2;
    var y = rect.top - th - 8;
    if (x < 8) x = 8;
    if (x + tw > window.innerWidth - 8) x = window.innerWidth - tw - 8;
    if (y < 8) y = rect.bottom + 8;
    t.style.left = x + 'px';
    t.style.top = y + 'px';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mouseenter', function (e) {
      var el = e.target.closest ? e.target.closest('.term') : null;
      if (el && el.dataset.def) show(el, el.dataset.def);
    }, true);

    document.addEventListener('mouseleave', function (e) {
      if (e.target.closest && e.target.closest('.term')) hide();
    }, true);

    document.addEventListener('focusin', function (e) {
      var el = e.target.closest ? e.target.closest('.term') : null;
      if (el && el.dataset.def) show(el, el.dataset.def);
    }, true);

    document.addEventListener('focusout', function (e) {
      if (e.target.closest && e.target.closest('.term')) hide();
    }, true);

    /* Touch: tap to toggle */
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('.term') : null;
      if (!el) { hide(); return; }
      var t = getTooltip();
      if (t.classList.contains('visible') && t._anchor === el) {
        hide();
      } else {
        t._anchor = el;
        show(el, el.dataset.def);
      }
    });

    /* Make .term keyboard-focusable */
    document.querySelectorAll('.term').forEach(function (el) {
      if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
    });
  });
})();

/* ---------- 4. Step-through controller ---------- */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.stepper').forEach(function (stepper) {
      var steps = stepper.querySelectorAll('.step');
      if (!steps.length) return;
      var current = 0;

      var counter = stepper.querySelector('.step-counter');
      var btnBack = stepper.querySelector('.btn-back');
      var btnNext = stepper.querySelector('.btn-next');

      function goTo(idx) {
        steps[current].classList.remove('active');
        current = Math.max(0, Math.min(steps.length - 1, idx));
        steps[current].classList.add('active');
        if (counter) counter.textContent = (current + 1) + ' / ' + steps.length;
        if (btnBack) btnBack.disabled = current === 0;
        if (btnNext) btnNext.disabled = current === steps.length - 1;
        stepper.dispatchEvent(new CustomEvent('step-changed', {
          bubbles: true, detail: { index: current, total: steps.length }
        }));
      }

      if (btnBack) btnBack.addEventListener('click', function () { goTo(current - 1); });
      if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });

      /* Keyboard support */
      stepper.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goTo(current + 1); }
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); goTo(current - 1); }
      });

      goTo(0);
    });
  });
})();

/* ---------- 5. Codon translator ---------- */
var CODON_TABLE = {
  TTT:'Phe',TTC:'Phe',TTA:'Leu',TTG:'Leu',
  CTT:'Leu',CTC:'Leu',CTA:'Leu',CTG:'Leu',
  ATT:'Ile',ATC:'Ile',ATA:'Ile',ATG:'Met',
  GTT:'Val',GTC:'Val',GTA:'Val',GTG:'Val',
  TCT:'Ser',TCC:'Ser',TCA:'Ser',TCG:'Ser',
  CCT:'Pro',CCC:'Pro',CCA:'Pro',CCG:'Pro',
  ACT:'Thr',ACC:'Thr',ACA:'Thr',ACG:'Thr',
  GCT:'Ala',GCC:'Ala',GCA:'Ala',GCG:'Ala',
  TAT:'Tyr',TAC:'Tyr',TAA:'Stop',TAG:'Stop',
  CAT:'His',CAC:'His',CAA:'Gln',CAG:'Gln',
  AAT:'Asn',AAC:'Asn',AAA:'Lys',AAG:'Lys',
  GAT:'Asp',GAC:'Asp',GAA:'Glu',GAG:'Glu',
  TGT:'Cys',TGC:'Cys',TGA:'Stop',TGG:'Trp',
  CGT:'Arg',CGC:'Arg',CGA:'Arg',CGG:'Arg',
  AGT:'Ser',AGC:'Ser',AGA:'Arg',AGG:'Arg',
  GGT:'Gly',GGC:'Gly',GGA:'Gly',GGG:'Gly'
};

var AA_NAMES = {
  Phe:'Phenylalanine', Leu:'Leucine', Ile:'Isoleucine', Met:'Methionine (Start)',
  Val:'Valine', Ser:'Serine', Pro:'Proline', Thr:'Threonine', Ala:'Alanine',
  Tyr:'Tyrosine', Stop:'Stop codon (terminates translation)', His:'Histidine',
  Gln:'Glutamine', Asn:'Asparagine', Lys:'Lysine', Asp:'Aspartic acid',
  Glu:'Glutamic acid', Cys:'Cysteine', Trp:'Tryptophan', Arg:'Arginine', Gly:'Glycine'
};

var AA_SINGLE = {
  Phe:'F', Leu:'L', Ile:'I', Met:'M', Val:'V', Ser:'S', Pro:'P', Thr:'T',
  Ala:'A', Tyr:'Y', Stop:'*', His:'H', Gln:'Q', Asn:'N', Lys:'K',
  Asp:'D', Glu:'E', Cys:'C', Trp:'W', Arg:'R', Gly:'G'
};

function translateDNA() {
  var input = document.getElementById('dna-input');
  var output = document.getElementById('codon-output');
  if (!input || !output) return;

  var seq = input.value.replace(/[\s\r\n]/g, '').toUpperCase();
  if (!seq) { output.innerHTML = '<span style="color:var(--text-muted)">Enter a DNA sequence above.</span>'; return; }
  if (!/^[ATGC]+$/.test(seq)) {
    output.innerHTML = '<span style="color:#c0392b">Invalid characters detected. Use only A, T, G, C.</span>'; return;
  }
  if (seq.length % 3 !== 0) {
    output.innerHTML = '<span style="color:#c0392b">Sequence length (' + seq.length + ' bases) is not divisible by 3. Each codon is 3 bases.</span>'; return;
  }

  var html = '';
  for (var i = 0; i < seq.length; i += 3) {
    var codon = seq.slice(i, i + 3);
    var aa = CODON_TABLE[codon] || '?';
    var single = AA_SINGLE[aa] || '?';
    var cls = aa === 'Met' ? 'start' : aa === 'Stop' ? 'stop' : 'other';
    var fullName = AA_NAMES[aa] || aa;
    html += '<span class="codon-tile ' + cls + ' term" data-def="' + codon + ' → ' + fullName + '" tabindex="0">' + single + '</span>';
  }
  output.innerHTML = html;

  /* Re-activate tooltip for freshly created .term spans */
  output.querySelectorAll('.term').forEach(function (el) {
    if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
}

/* ---------- 6. Pipeline step toggles ---------- */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pipeline-step').forEach(function (step) {
      var toggle = step.querySelector('.step-toggle');
      if (!toggle) return;
      toggle.setAttribute('role', 'button');
      toggle.setAttribute('tabindex', '0');
      toggle.setAttribute('aria-expanded', 'false');

      function doToggle() {
        step.classList.toggle('open');
        toggle.setAttribute('aria-expanded', step.classList.contains('open') ? 'true' : 'false');
      }
      toggle.addEventListener('click', doToggle);
      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doToggle(); }
      });
    });
  });
})();

/* ---------- 7. Chapter-5 MHC interactive ---------- */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var mhcSvg = document.getElementById('mhc-interactive');
    if (!mhcSvg) return;
    var cancerPanel = mhcSvg.querySelector('#cancer-panel');
    if (!cancerPanel) return;

    cancerPanel.setAttribute('role', 'button');
    cancerPanel.setAttribute('tabindex', '0');
    cancerPanel.setAttribute('aria-label', 'Click to activate T-cell kill signal');

    function doActivate() {
      mhcSvg.classList.toggle('mhc-activated');
    }
    cancerPanel.addEventListener('click', doActivate);
    cancerPanel.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doActivate(); }
    });
  });
})();

/* ---------- 8. Reduced-motion: skip transitions if user prefers ---------- */
(function () {
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function applyMotion() {
    document.documentElement.classList.toggle('reduced-motion', mq.matches);
  }
  mq.addEventListener('change', applyMotion);
  applyMotion();
})();
