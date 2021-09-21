document.addEventListener('DOMContentLoaded', () => {
  setFunctionOpenPanel();
  // changeColorTheme();
  setColorsTheme();
  addAnimation();

  const inputs = [
    ...document.querySelectorAll(
      '.form .input__form > input, .form .input__form > textarea'
    ),
  ];
  inputs.forEach((i) => {
    i.addEventListener('change', setHasContentInput);
  });
});

const setFunctionOpenPanel = () => {
  Array.from(document.querySelectorAll('.open__panel'), (btn) => {
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

const setHasContentInput = (input) => {
  console.log(input);
  const elemento = input.target;
  const hasContent = elemento.value.length > 0;
  if (hasContent) {
    elemento.classList.add('has_content');
  } else {
    elemento.classList.remove('has_content');
  }
};

const changeColorTheme = (color) => {
  // const colors = ['0 118 173', '227 124 34', '176 25 171'].reverse();

  // setInterval(() => {
  //   document.documentElement.style.setProperty(
  //     '--color',
  //     colors[Math.floor(Math.random() * colors.length)]
  //   );
  // }, 2000);

  localStorage.setItem('color-theme', color);
  document.documentElement.style.setProperty('--color', color);
};

const setColorsTheme = () => {
  const container = document.querySelector('.colors__container');
  const colors = [
    '0 118 173',
    '235 210 26',
    '227 124 34',
    '176 25 171',
    '252 3 119',
    '14 204 230',
    '14 230 144',
    '240 34 34',
  ];

  colors.forEach((color, i) => {
    i += 1;

    const containerColor = document.createElement('div');
    containerColor.classList.add('color');

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'color');
    input.setAttribute('id', `color-${i}`);
    input.setAttribute('data-color', color);

    if (i === 1) input.setAttribute('checked', true);

    const label = document.createElement('label');
    label.setAttribute('for', `color-${i}`);
    label.style.setProperty('--color', color);

    containerColor.appendChild(input);
    containerColor.appendChild(label);
    container.appendChild(containerColor);

    // container.innerHTML += `
    //   <div class="color">
    //     <input type="radio" name="color" id="color-${i}" data-color="${color}"
    //     ${i === 1 && 'checked'}>
    //     <label for="color-${i}"></label>
    //   </div>
    // `;

    // container
    //   .querySelector(`label[for="color-${i}"]`)
    //   .style.setProperty('--color', color);
  });

  Array.from(container.querySelectorAll('input[name=color]'), (color) => {
    color.addEventListener('change', () => {
      changeColorTheme(color.dataset.color);
    });
  });

  const colorTheme = localStorage.getItem('color-theme');
  if (colorTheme)
    document.documentElement.style.setProperty('--color', colorTheme);
};

// document.querySelector('.box').addEventListener('scroll', function (e) {
//   const img = document.querySelector('.img__profile');
//   const imgHeight = img.getBoundingClientRect().height;
//   const down = this.scrollTop > this.oldScroll;
//   const up = this.scrollTop < this.oldScroll;

//   if(down) {
//     if(img.getBoundingClientRect().height > (imgHeight / 2)) {
//       img.style = `height: 0; width: 0`;
//     } else {

//     }
//   }

//   this.oldScroll = this.scrollTop;
// });

[...document.querySelectorAll('.animation')].forEach((element) => {
  element.addEventListener('animationend', () => {
    element.classList.remove('animation');
  });
});

function addAnimation(index = 0) {
  const children = [...document.querySelectorAll('.animation')][index];
  if (children) {
    children.classList.add('start');
    children.addEventListener('animationstart', () => {
      setTimeout(addAnimation, 200, index + 1);
    });
    children.addEventListener('animationend', () => {
      children.classList.remove('animation', 'start');
      // addAnimation(index + 1);
    });
  }
  console.log({ children });
}
