/* Browser interactions. All strings built for output use template literals. */
const favoriteKey = 'kylaBluePaletteFavorites';
const requestKey = 'kylaBluePaletteRequestCount';
let storageAvailable = true;
let savedIds = readFavorites();
let requestCount = readRequestCount();
let savedOnly = false;

function readValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    storageAvailable = false;
    return null;
  }
}

function writeValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    storageAvailable = false;
    showStorageMessage();
  }
}

function readFavorites() {
  try {
    const value = JSON.parse(readValue(favoriteKey) || '[]');
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter(id => paintings.some(painting => painting.id === id)))];
  } catch {
    return [];
  }
}

function readRequestCount() {
  const count = Number(readValue(requestKey));
  return Number.isSafeInteger(count) && count >= 0 ? count : 0;
}

function showStorageMessage() {
  const message = document.querySelector('#storage-message');
  if (message && !storageAvailable) {
    message.hidden = false;
    message.textContent = `Your browser is blocking storage. Saved ideas and the request count will last only while this page is open.`;
  }
}

function synchronizeFavorites() {
  document.querySelectorAll('[data-favorite-count]').forEach(counter => {
    counter.textContent = `${savedIds.length}`;
  });
  document.querySelectorAll('[data-save]').forEach(button => {
    const id = button.dataset.save;
    const painting = paintings.find(item => item.id === id);
    const isSaved = savedIds.includes(id);
    button.hidden = false;
    button.setAttribute('aria-pressed', `${isSaved}`);
    button.textContent = isSaved ? `Saved ✓` : `Save idea`;
    button.setAttribute('aria-label', `${isSaved ? 'Remove saved idea' : 'Save idea'}: ${painting.title}`);
  });
}

function toggleFavorite(id) {
  if (!paintings.some(painting => painting.id === id)) return;
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(savedId => savedId !== id);
  } else {
    savedIds = [...savedIds, id];
  }
  writeValue(favoriteKey, JSON.stringify(savedIds));
  const gallery = document.querySelector('#painting-gallery');
  if (gallery) {
    renderGallery();
    const replacement = gallery.querySelector(`[data-save="${id}"]`);
    if (replacement) replacement.focus();
    else document.querySelector('#saved-filter').focus();
  }
  synchronizeFavorites();
}

function createPaintingCard(painting) {
  const isSaved = savedIds.includes(painting.id);
  return `<article class="painting-card" data-painting-id="${painting.id}">
    <a class="painting-image" href="tutorials.html#${painting.id}"><img src="${painting.image}" alt="${painting.alt}" width="900" height="680" loading="lazy"></a>
    <div class="painting-info"><p class="mini-label">${painting.medium === 'acrylic' ? 'Acrylic' : 'Watercolor'} · ${painting.minutes} minutes</p>
      <h3><a href="tutorials.html#${painting.id}">${painting.title}</a></h3><p>${painting.description}</p>
      <div class="card-bottom"><span class="level">${painting.difficulty}</span><button class="save-button" type="button" data-save="${painting.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? 'Remove saved idea' : 'Save idea'}: ${painting.title}">${isSaved ? 'Saved ✓' : 'Save idea'}</button></div>
    </div></article>`;
}

function filteredPaintings() {
  const medium = document.querySelector('#medium-filter').value;
  const level = document.querySelector('#level-filter').value;
  return paintings.filter(painting =>
    (medium === 'all' || painting.medium === medium) &&
    (level === 'all' || painting.difficulty === level) &&
    (!savedOnly || savedIds.includes(painting.id))
  );
}

function renderGallery() {
  const gallery = document.querySelector('#painting-gallery');
  const results = filteredPaintings();
  if (results.length > 0) {
    gallery.innerHTML = results.map(painting => createPaintingCard(painting)).join('');
  } else {
    gallery.innerHTML = `<div class="empty-state"><h2>${savedOnly ? 'No saved ideas here yet.' : 'No paintings match these filters.'}</h2><p>${savedOnly ? 'Save a painting you like, or turn off “Saved only” to explore the collection.' : 'Try another paint type or reset the filters to see every project.'}</p></div>`;
  }
  document.querySelector('#gallery-count').textContent = `${results.length} painting ${results.length === 1 ? 'idea' : 'ideas'}${savedOnly ? ' in your saved collection' : ''}`;
  document.querySelector('#saved-filter').setAttribute('aria-pressed', `${savedOnly}`);
}

function initializeGallery() {
  if (!document.querySelector('#painting-gallery')) return;
  document.querySelector('#gallery-controls').hidden = false;
  savedOnly = new URLSearchParams(window.location.search).get('saved') === '1';
  document.querySelector('#medium-filter').addEventListener('change', renderGallery);
  document.querySelector('#level-filter').addEventListener('change', renderGallery);
  document.querySelector('#saved-filter').addEventListener('click', () => {
    savedOnly = !savedOnly;
    renderGallery();
  });
  document.querySelector('#reset-filters').addEventListener('click', () => {
    document.querySelector('#medium-filter').value = 'all';
    document.querySelector('#level-filter').value = 'all';
    savedOnly = false;
    renderGallery();
  });
  renderGallery();
}

function initializeMenu() {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const mobile = window.matchMedia('(max-width: 767px)');
  function setLayout() {
    button.hidden = !mobile.matches;
    navigation.hidden = mobile.matches;
    button.setAttribute('aria-expanded', `${!mobile.matches}`);
  }
  button.addEventListener('click', () => {
    navigation.hidden = !navigation.hidden;
    button.setAttribute('aria-expanded', `${!navigation.hidden}`);
    button.textContent = navigation.hidden ? `Menu` : `Close menu`;
  });
  mobile.addEventListener('change', () => {
    setLayout();
    button.textContent = `Menu`;
  });
  setLayout();
}

function openLinkedLesson() {
  if (!window.location.hash) return;
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); }
  catch { return; }
  const article = document.getElementById(id);
  if (!article || !article.classList.contains('tutorial')) return;
  article.hidden = false;
  const filter = document.querySelector('#tutorial-medium');
  if (filter) {
    filter.value = 'all';
    filterLessons();
  }
  article.querySelector('details').open = true;
  article.scrollIntoView({ block: 'start' });
}

function filterLessons() {
  const medium = document.querySelector('#tutorial-medium').value;
  let visible = 0;
  document.querySelectorAll('.tutorial').forEach(article => {
    article.hidden = medium !== 'all' && article.dataset.medium !== medium;
    if (!article.hidden) visible += 1;
  });
  document.querySelector('#tutorial-count').textContent = `${visible} ${visible === 1 ? 'lesson' : 'lessons'} to try`;
}

function initializeTutorials() {
  const filter = document.querySelector('#tutorial-medium');
  if (!filter) return;
  document.querySelector('#tutorial-controls').hidden = false;
  filter.addEventListener('change', filterLessons);
  window.addEventListener('hashchange', openLinkedLesson);
  openLinkedLesson();
}

function initializeForm() {
  const form = document.querySelector('#tutorial-request');
  if (!form) return;
  document.querySelector('#request-fields').disabled = false;
  document.querySelector('#form-unavailable').hidden = true;
  const nameField = document.querySelector('#visitor-name');
  const messageField = document.querySelector('#request-message');
  [nameField, messageField].forEach(field => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    nameField.setCustomValidity(nameField.value.trim() ? '' : `Please enter your name.`);
    messageField.setCustomValidity(messageField.value.trim().length >= 10 ? '' : `Please write at least 10 characters about your painting idea.`);
    if (!form.reportValidity()) return;
    requestCount += 1;
    writeValue(requestKey, `${requestCount}`);
    const confirmation = document.querySelector('#request-confirmation');
    const heading = document.createElement('h3');
    heading.textContent = `Your next painting is taking shape, ${nameField.value.trim()}.`;
    const message = document.createElement('p');
    message.textContent = `Your practice request is complete. No email was sent, and your personal details were not stored.`;
    const count = document.createElement('p');
    count.textContent = `${requestCount} ${requestCount === 1 ? 'painting plan' : 'painting plans'} completed${storageAvailable ? ' on this browser' : ' during this visit'}.`;
    confirmation.replaceChildren(heading, message, count);
    confirmation.hidden = false;
    form.reset();
    confirmation.focus();
  });
}

document.querySelector('#current-year').textContent = `${new Date().getFullYear()}`;
initializeMenu();
initializeGallery();
initializeTutorials();
initializeForm();
synchronizeFavorites();
showStorageMessage();
document.addEventListener('click', event => {
  const button = event.target.closest('[data-save]');
  if (button) toggleFavorite(button.dataset.save);
});
window.addEventListener('storage', event => {
  if (event.key === favoriteKey || event.key === null) {
    savedIds = readFavorites();
    if (document.querySelector('#painting-gallery')) renderGallery();
    synchronizeFavorites();
  }
  if (event.key === requestKey || event.key === null) requestCount = readRequestCount();
});
