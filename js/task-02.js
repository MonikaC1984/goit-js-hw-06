const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const tab = document.querySelector('#ingredients');
const list = [];

//dodac li do nowej tablicy na pozycji x
//pobrac i dodac tresc do li z indeksem x
//dodac klase “item” do li z indeksem x

for (let i = 0; i < ingredients.length; i++) {
  list[i] = document.createElement('li');
  list[i].textContent = ingredients[i];
  list[i].classList.add('item');
  list.push(list[i]);
}

tab.append(...list);
