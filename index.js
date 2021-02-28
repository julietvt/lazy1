/*
const options = {
  root: document.querySelector('.container'),
  rootMargin: '30px',
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('entry:', entry);
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('active');
      entry.target.innerHTML = '<h2>Load!!!</h2>';
      observer.unobserve(entry.target);
    }
  });
}, options);

const targetElements = document.querySelectorAll('.back');
for (let el of targetElements) {
  observer.observe(el);
}
*/

/*
window.onload = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;

        observer.unobserve(entry.target);
      }
    });
  }, options);

  const arr = document.querySelectorAll('img');
  arr.forEach((i) => {
    observer.observe(i);
  });
};
*/

const list = document.getElementById('list');
const observer = new IntersectionObserver(foo);
observer.observe(document.getElementById('listLoader'));
function foo(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addItemToList();
    }
  });
}

function addItemToList() {
  for (let i = 0; i < 20; i++) {
    list.prepend(createListItem());
  }
  list.scrollTo(0, 700);
}

let count = 0;

function createListItem() {
  const li = document.createElement('li');
  li.classList.add('listItem');
  li.innerText = `${++count}: some text`;
  return li;
}
