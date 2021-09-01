document.addEventListener('DOMContentLoaded', () => {
  setFunctionOpenPanel();
});

const setFunctionOpenPanel = () => {
  Array.from(document.querySelectorAll('.open__panel'), btn => {
    btn.addEventListener('click', () => {
      const activeBtn = document.querySelector('.open__panel.active');
      if (activeBtn && activeBtn !== btn) {
        activeBtn.classList.remove('active');
        const activePanel = activeBtn.nextElementSibling;
        activePanel.style.maxHeight = null;
      }

      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;

      panel.style.maxHeight = panel.style.maxHeight
        ? null
        : panel.scrollHeight + 'px';
    });
  });
};
