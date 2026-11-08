(function () {
  'use strict';
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  function savedTheme() {
    try { return localStorage.getItem('theme'); } catch (error) { return null; }
  }
  function applyTheme(theme) {
    root.dataset.theme = theme;
    var label = 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }
  applyTheme(root.dataset.theme);
  button.hidden = false;
  button.addEventListener('click', function () {
    var theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch (error) {}
  });
  systemTheme.addEventListener('change', function (event) {
    var preference = savedTheme();
    if (preference !== 'light' && preference !== 'dark') {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
}());
