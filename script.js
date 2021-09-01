document.addEventListener('DOMContentLoaded', () => {
  setFunctionOpenPanel();
  const inputs = [
    ...document.querySelectorAll(
      '.form .input__form > input, .form .input__form > textarea'
    )
  ];
  inputs.forEach(i => {
    i.addEventListener('change', setHasContentInput);
  });
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

const setHasContentInput = input => {
  console.log(input);
  const elemento = input.target;
  const hasContent = elemento.value.length > 0;
  if (hasContent) {
    elemento.classList.add('has_content');
  } else {
    elemento.classList.remove('has_content');
  }
};
