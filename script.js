(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const cards = [...document.querySelectorAll('.property-card')];
  const modes = [...document.querySelectorAll('[data-mode].mode-button')];
  let mode = 'rent';
  let savedOnly = false;
  let hasSearched = false;
  let saved = new Set();
  let toastTimer;
  try {
    const stored = JSON.parse(localStorage.getItem('lpm-saved-homes') || '[]');
    if (Array.isArray(stored)) saved = new Set(stored.filter(id => cards.some(card => card.dataset.id === id)));
  } catch { /* Saved homes remain usable in memory when storage is unavailable. */ }

  function setMode(value) {
    mode = value;
    modes.forEach(button => {
      const active = button.dataset.mode === mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function filterProperties(scroll = false) {
    const location = $('#location').value;
    const type = $('#property-type').value;
    const beds = Number($('#bedrooms').value);
    let count = 0;
    cards.forEach(card => {
      const data = card.dataset;
      const matches = data.mode === mode &&
        (location === 'all' || location === 'oxford' || data.location === location) &&
        (type === 'all' || data.type === type) && Number(data.beds) >= beds &&
        (!savedOnly || saved.has(data.id));
      card.hidden = !matches;
      if (matches) count++;
    });
    $('.results-toolbar').hidden = !hasSearched && saved.size === 0;
    $('#result-count').textContent = `${count} ${count === 1 ? 'home' : 'homes'} in this ${savedOnly ? 'saved ' : ''}selection`;
    $('.empty-state').hidden = count !== 0;
    $('.property-grid').hidden = count === 0;
    $('#saved-count').textContent = saved.size;
    $('#saved-filter').setAttribute('aria-pressed', String(savedOnly));
    $('#empty-message').textContent = savedOnly
      ? 'No saved homes match these filters. Save a home using its heart button, or clear your filters to explore again.'
      : mode === 'buy'
        ? 'Our featured selection is currently for rent. Explore LPM’s sales collection or contact the team about your next home.'
        : 'There are no matches in this selection. Explore the full collection or try a broader search.';
    $('#empty-link').href = `https://www.lpmoxford.co.uk/property-search~for=${mode === 'buy' ? '1' : '2'}`;
    if (scroll) $('#properties').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  modes.forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  $('#property-search').addEventListener('submit', event => {
    event.preventDefault();
    hasSearched = true;
    savedOnly = false;
    filterProperties(true);
  });
  $('#clear-search').addEventListener('click', () => {
    $('#property-search').reset();
    setMode('rent');
    savedOnly = false;
    hasSearched = true;
    filterProperties();
  });
  $('#saved-filter').addEventListener('click', () => {
    savedOnly = !savedOnly;
    hasSearched = true;
    filterProperties();
  });
  function updateSaveButtons() {
    document.querySelectorAll('[data-save]').forEach(button => {
      const active = saved.has(button.dataset.save);
      const title = button.closest('.property-card').querySelector('h3').textContent;
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', `${active ? 'Unsave' : 'Save'} ${title}`);
    });
  }
  document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.save;
    const wasSaved = saved.has(id);
    if (wasSaved) saved.delete(id); else saved.add(id);
    let persistent = true;
    try { localStorage.setItem('lpm-saved-homes', JSON.stringify([...saved])); } catch { persistent = false; }
    updateSaveButtons();
    filterProperties();
    const title = button.closest('.property-card').querySelector('h3').textContent;
    $('.toast').textContent = `${title} ${wasSaved ? 'removed from saved homes' : persistent ? 'saved on this device' : 'saved for this visit'}.`;
    $('.toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('.toast').classList.remove('visible'), 3200);
  }));

  const menuButton = $('.menu-toggle');
  const mobileNavigation = $('#mobile-navigation');
  function toggleMenu(open, restoreFocus = false) {
    mobileNavigation.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.querySelector('use').setAttribute('href', open ? '#close' : '#menu');
    document.body.classList.toggle('menu-open', open);
    if (open) mobileNavigation.querySelector('a').focus();
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => toggleMenu(mobileNavigation.hidden));
  mobileNavigation.addEventListener('click', event => { if (event.target.closest('a')) toggleMenu(false); });
  document.addEventListener('keydown', event => {
    if (mobileNavigation.hidden) return;
    if (event.key === 'Escape') toggleMenu(false, true);
    if (event.key === 'Tab') {
      const links = [...mobileNavigation.querySelectorAll('a')];
      if (event.shiftKey && document.activeElement === menuButton) { event.preventDefault(); links.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menuButton.focus(); }
    }
  });
  matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) toggleMenu(false); });
  document.querySelectorAll('[data-search-mode]').forEach(link => link.addEventListener('click', () => {
    $('#property-search').reset();
    setMode(link.dataset.searchMode);
    savedOnly = false;
    hasSearched = true;
    filterProperties();
  }));
  document.querySelectorAll('[data-area]').forEach(link => link.addEventListener('click', () => {
    $('#property-search').reset();
    $('#location').value = link.dataset.area;
    setMode('rent');
    savedOnly = false;
    hasSearched = true;
    filterProperties();
  }));
  updateSaveButtons();
  filterProperties();
})();
