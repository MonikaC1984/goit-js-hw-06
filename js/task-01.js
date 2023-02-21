//Number of categories: 3
const numCat = document.querySelectorAll('li.item');
const sum = numCat.length;
console.log(`Number of categories: ${sum}`);

//Category: Animals
//Elements: 4

const category = document.querySelectorAll('li.item');
category.forEach(function (cat) {
  console.log(`Category: ${cat.firstElementChild.textContent}`);
  console.log(`Elements: ${cat.lastElementChild.children.length}`);
});
