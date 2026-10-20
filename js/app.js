/**
 * Madrasah Al-Qur'an Digital (MAD)
 * Interaktivitas Beranda: Tema, Navigasi Mobile, Filter Kelas, Modal Dialog, dan Konsultasi.
 */

import {
  siteConfig,
  programCategories,
  keunggulanList,
  kelasBukaList,
  caraBelajarSteps,
  ebooksList,
  artikelList,
  faqList
} from './data.js';

// Utilitas Pemilihan Elemen
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

// 1. Manajer Tema Terang / Gelap
function initThemeManager() {
  const themeToggleBtn = $('#theme-toggle-btn');
  const storedTheme = localStorage.getItem('mad_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('mad_theme', nextTheme);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('mad_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = $('#theme-toggle-btn');
  if (themeToggleBtn) {
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap');
    themeToggleBtn.setAttribute('title', isDark ? 'Mode Terang' : 'Mode Gelap');
    
    // Ikon Matahari untuk mode gelap (klik jadi terang), Bulan untuk mode terang
    themeToggleBtn.innerHTML = isDark
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// 2. Navigasi Mobile Drawer
function initMobileNavigation() {
  const toggleBtn = $('#mobile-nav-toggle');
  const drawer = $('#mobile-drawer');
  const overlay = $('#drawer-overlay');
  const closeBtn = $('#drawer-close-btn');
  const drawerLinks = $$('.drawer-link', drawer);

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-active');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-active');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.focus();
    document.body.style.overflow = '';
  }

  if (toggleBtn && drawer && overlay && closeBtn) {
    toggleBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }
}

// 3. Render Kartu Program
function renderPrograms() {
  const container = $('#programs-container');
  if (!container) return;

  container.innerHTML = programCategories.map(cat => `
    <article class="program-card" data-program-id="${cat.id}">
      <div class="program-card-header">
        <div class="program-icon-box" aria-hidden="true">
          ${getProgramIconSvg(cat.icon)}
        </div>
        <span class="program-category-badge">${cat.badge}</span>
      </div>
      <div class="program-arabic" dir="rtl" lang="ar">${cat.arabic}</div>
      <h3 class="program-title">${cat.title}</h3>
      <p class="program-summary">${cat.summary}</p>
      
      <ul class="program-highlights" aria-label="Keunggulan materi ${cat.title}">
        ${cat.highlights.map(h => `
          <li class="program-highlight-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <button type="button" class="program-link-btn" data-filter-target="${cat.id}" aria-label="Lihat kelas ${cat.title}">
        Lihat Pilihan Kelas
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </article>
  `).join('');

  $$('[data-filter-target]', container).forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-filter-target');
      filterClasses(targetId);
      const targetSection = $('#kelas-terbuka');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// 4. Render & Filter Kelas
function renderClasses(activeFilter = 'all') {
  const container = $('#classes-container');
  if (!container) return;

  const filtered = activeFilter === 'all'
    ? kelasBukaList
    : kelasBukaList.filter(k => k.programId === activeFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background-color: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-card);">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); margin-bottom: 8px;">Halaqah Belum Tersedia untuk Kategori Ini</p>
        <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 20px auto;">Pendaftaran angkatan berikutnya sedang dipersiapkan. Anda dapat mendaftar daftar tunggu melalui tim kurikulum.</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-waiting-list">Hubungi Admin Konsultasi</button>
      </div>
    `;
    const btnWL = $('#btn-waiting-list', container);
    if (btnWL) {
      btnWL.addEventListener('click', () => openConsultationModal('Daftar Tunggu Kelas'));
    }
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="class-card">
      <div class="class-card-banner">
        <span class="parent-program-label">${item.parentProgram}</span>
        <span class="class-status-badge ${item.status === 'Pendaftaran Dibuka' ? 'status-open' : 'status-soon'}">
          ${item.status}
        </span>
      </div>
      <div class="class-card-body">
        <div class="class-batch-tag">${item.batch}</div>
        <h3 class="class-title">${item.title}</h3>
        <p class="class-desc-brief">${item.description}</p>
        
        <ul class="class-meta-list">
          <li class="class-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${item.schedule} (${item.duration})</span>
          </li>
          <li class="class-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>${item.instructor}</span>
          </li>
          <li class="class-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>${item.method} &bull; ${item.quota}</span>
          </li>
        </ul>

        <div class="class-card-footer">
          <div class="price-wrap">
            <span class="price-original">${item.originalPrice}</span>
            <span class="price-current">${item.price}</span>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" data-detail-id="${item.id}" aria-label="Lihat kurikulum dan pendaftaran ${item.title}">
            Detail Kelas
          </button>
        </div>
      </div>
    </article>
  `).join('');

  $$('[data-detail-id]', container).forEach(btn => {
    btn.addEventListener('click', (e) => {
      const classId = e.currentTarget.getAttribute('data-detail-id');
      openClassDetailModal(classId);
    });
  });
}

function filterClasses(filterId) {
  $$('.filter-chip-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-filter') === filterId;
    btn.classList.toggle('is-active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });
  renderClasses(filterId);
}

function initClassFilters() {
  $$('.filter-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterClasses(filter);
    });
  });
}

// 5. Render E-Books
function renderEbooks() {
  const container = $('#ebooks-container');
  if (!container) return;

  container.innerHTML = ebooksList.map(b => `
    <article class="ebook-card">
      <div class="ebook-cover-mockup cover-${b.coverAccent}">
        <span class="cover-badge">${b.category}</span>
        <h4 class="cover-title-text">${b.title}</h4>
        <p class="cover-author-text">${b.author}</p>
      </div>
      <h3 class="ebook-title">${b.title}</h3>
      <p class="ebook-summary">${b.summary}</p>
      <div class="ebook-meta">
        <span>${b.pages}</span>
        <span>${b.fileSize}</span>
      </div>
      <button type="button" class="btn btn-secondary btn-sm" data-ebook-id="${b.id}" aria-label="Unduh atau lihat pratinjau ${b.title}">
        Lihat Pratinjau PDF
      </button>
    </article>
  `).join('');

  $$('[data-ebook-id]', container).forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-ebook-id');
      openEbookModal(id);
    });
  });
}

// 6. Render Artikel
function renderArticles() {
  const container = $('#articles-container');
  if (!container) return;

  container.innerHTML = artikelList.map(a => `
    <article class="article-card">
      <div class="article-meta-row">
        <span class="article-category-chip">${a.category}</span>
        <span class="article-read-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${a.readTime}
        </span>
      </div>
      <h3 class="article-title">${a.title}</h3>
      <p class="article-summary">${a.summary}</p>
      <button type="button" class="article-read-btn" data-article-id="${a.id}" aria-label="Baca ringkasan faedah: ${a.title}">
        Baca Faedah Lengkap
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </article>
  `).join('');

  $$('[data-article-id]', container).forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');
      openArticleModal(id);
    });
  });
}

// 7. Render FAQ Accordion
function renderFaq() {
  const container = $('#faq-container');
  if (!container) return;

  container.innerHTML = faqList.map((item, index) => `
    <details class="faq-item" ${index === 0 ? 'open' : ''}>
      <summary class="faq-trigger">
        <span>${item.question}</span>
        <svg class="faq-icon-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </summary>
      <div class="faq-body">
        <p>${item.answer}</p>
      </div>
    </details>
  `).join('');
}

// 8. Sistem Modal Dialog
function initModals() {
  const dialogs = $$('.modal-dialog');

  dialogs.forEach(dialog => {
    // Tutup saat klik di luar kotak modal (area backdrop)
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });

    const closeBtn = dialog.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => dialog.close());
    }
  });

  // Tombol Pemicu Konsultasi Umum
  $$('.trigger-consultation-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openConsultationModal('Konsultasi Penempatan Kelas');
    });
  });
}

function openClassDetailModal(classId) {
  const cls = kelasBukaList.find(c => c.id === classId);
  if (!cls) return;

  const modal = $('#class-detail-modal');
  const titleEl = $('#modal-class-title');
  const bodyEl = $('#modal-class-body');
  const ctaBtn = $('#modal-class-cta');

  if (titleEl) titleEl.textContent = cls.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="background-color: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--border-card);">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-emerald); text-transform: uppercase;">${cls.parentProgram}</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-top: 2px;">${cls.batch}</div>
        <div style="font-size: 0.875rem; color: var(--text-muted); margin-top: 4px;">Diasuh oleh: <strong>${cls.instructor}</strong></div>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Deskripsi Halaqah</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${cls.description}</p>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Silabus & Pokok Bahasan</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${cls.syllabus.map(s => `
            <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.875rem; color: var(--text-muted);">
              <span style="color: var(--color-emerald); font-weight: 700;">&bull;</span>
              <span>${s}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background-color: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-card);">
        <div>
          <span style="font-size: 0.775rem; color: var(--text-soft); display: block;">Jadwal Pertemuan:</span>
          <strong style="font-size: 0.85rem; color: var(--text-main);">${cls.schedule}</strong>
        </div>
        <div>
          <span style="font-size: 0.775rem; color: var(--text-soft); display: block;">Biaya Pendidikan:</span>
          <strong style="font-size: 1rem; color: var(--color-maroon);">${cls.price}</strong>
        </div>
      </div>
    `;
  }

  if (ctaBtn) {
    ctaBtn.href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Assalamu'alaikum Admin MAD, saya berminat mendaftar kelas: ${cls.title} (${cls.batch}). Mohon informasi tata cara pendaftarannya.`)}`;
    ctaBtn.target = "_blank";
    ctaBtn.rel = "noopener noreferrer";
  }

  modal.showModal();
}

function openConsultationModal(topic = 'Konsultasi Kelas') {
  const modal = $('#consultation-modal');
  const topicInput = $('#consultation-topic');
  if (topicInput) topicInput.value = topic;
  modal.showModal();
}

function openEbookModal(ebookId) {
  const book = ebooksList.find(b => b.id === ebookId);
  if (!book) return;

  const modal = $('#ebook-preview-modal');
  const titleEl = $('#modal-ebook-title');
  const bodyEl = $('#modal-ebook-body');
  const downloadBtn = $('#modal-ebook-download');

  if (titleEl) titleEl.textContent = book.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="text-align: center; margin-bottom: 12px;">
        <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: var(--radius-pill); background-color: var(--badge-gold-bg); color: var(--badge-gold-text);">${book.category}</span>
        <h4 style="font-size: 1.15rem; font-weight: 700; margin: 10px 0 4px 0; color: var(--text-main);">${book.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${book.author}</p>
      </div>

      <p style="font-size: 0.925rem; color: var(--text-muted); line-height: 1.6;">${book.summary}</p>

      <div style="background-color: var(--bg-subtle); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid var(--color-gold); font-size: 0.85rem; color: var(--text-muted);">
        <strong>Format Digital:</strong> Dokumen PDF resmi terbitan MAD (${book.pages}, ${book.fileSize}) dilengkapi tata letak bersih untuk dibaca di smartphone maupun tablet.
      </div>
    `;
  }

  if (downloadBtn) {
    downloadBtn.onclick = () => {
      alert(`Pratinjau PDF "${book.title}" sedang disiapkan. Tautan unduhan lengkap juga telah dikirimkan ke repositori dokumen santri.`);
      modal.close();
    };
  }

  modal.showModal();
}

function openArticleModal(articleId) {
  const article = artikelList.find(a => a.id === articleId);
  if (!article) return;

  const modal = $('#article-modal');
  const titleEl = $('#modal-article-title');
  const bodyEl = $('#modal-article-body');

  if (titleEl) titleEl.textContent = article.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 14px;">
        <span style="font-size: 0.75rem; font-weight: 700; padding: 3px 9px; border-radius: var(--radius-pill); background-color: var(--badge-maroon-bg); color: var(--badge-maroon-text);">${article.category}</span>
        <span style="font-size: 0.8rem; color: var(--text-soft);">${article.date} &bull; ${article.readTime}</span>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.7; font-weight: 500; margin-bottom: 14px;">${article.summary}</p>
      <div style="font-size: 0.925rem; color: var(--text-muted); line-height: 1.75; border-top: 1px solid var(--border-card); padding-top: 14px;">
        ${article.contentPreview}
      </div>
      <div style="background-color: var(--bg-subtle); padding: 14px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-muted); margin-top: 10px;">
        Naskah lengkap artikel faedah ini diterbitkan dalam majelis tilawah berkala Madrasah Al-Qur'an Digital untuk santri dan umum.
      </div>
    `;
  }

  modal.showModal();
}

// 9. Ikon Program SVG Helper
function getProgramIconSvg(iconName) {
  switch (iconName) {
    case 'book-scroll':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
    case 'microphone-mic':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`;
    case 'quran-open':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
    case 'arabic-alphabet':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`;
    case 'quill-feather':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

// Inisialisasi Utama saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initMobileNavigation();
  renderPrograms();
  renderClasses('all');
  initClassFilters();
  renderEbooks();
  renderArticles();
  renderFaq();
  initModals();

  // Pengiriman Formulir Konsultasi
  const consultationForm = $('#consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#consultation-name').value;
      const phone = $('#consultation-phone').value;
      const topic = $('#consultation-topic').value;
      const note = $('#consultation-note').value;

      const text = `Assalamu'alaikum Admin MAD, saya ${name} (${phone}) ingin berkonsultasi mengenai ${topic}. Catatan: ${note || '-'}`;
      const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
      $('#consultation-modal').close();
      consultationForm.reset();
    });
  }
});
