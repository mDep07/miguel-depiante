document.addEventListener('DOMContentLoaded', () => {
  setFunctionOpenPanel();
});

const setFunctionOpenPanel = () => {
  Array.from(document.querySelectorAll('.open__panel'), btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;

      panel.style.maxHeight = panel.style.maxHeight
        ? null
        : panel.scrollHeight + 'px';
    });
  });
};
