/* import dataInfo from '../data.json' assert { type: 'json' }; */
const template = document.getElementById('card').content;
const summaryContent = document.querySelector('.summary__main');
const fragment = document.createDocumentFragment();

const getData = async () => {
  try {
    const data = await fetch('./data.json');
    const result = await data.json();

    showInDOM(result);
  } catch (error) {
    console.log('Ocurrio un error');
  }
};

const showInDOM = (data) => {
  data.forEach((item) => {
    template.querySelector('img').setAttribute('src', item.icon);
    template.querySelector('img').setAttribute('alt', item.category);
    template.querySelector('.summary__category').textContent = item.category;
    template.querySelector(
      '.summary__score span'
    ).textContent = `${item.score} `;

    let clone = document.importNode(template, true);
    clone
      .querySelector('.summary__item')
      .classList.add(`summary__item--${item.category}`);
    fragment.appendChild(clone);
  });

  summaryContent.appendChild(fragment);
};

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
