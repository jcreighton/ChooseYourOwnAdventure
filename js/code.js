// [['margarita', { salt: false }], ['martini', { shaken: true }]];
let orders = [];

function order() {
  orders.push([drink, instructions]);
}

function complete(orders) {
  for (let order of orders) {
    const [drink, instructions] = order;
    createDrink(drink, instructions);
  }
}

[{
  title: 'Love in the Time of JavaScript',
  authors: [Pai, S., Porcello, E.],
}]
let books = [];

function collection() {
  books.push(book);
}

function sort(books) {
  for (let book of books) {
    const [author] = book.authors;
    sortBy(book.section).alphabetizeBy(author);
  }
}

/* 
  loads = {
    darks: [ // items ],
    lights: [ // items ],
    brights: [ // items ],
  };
*/

const { darks, lights, brights } = loads;
console.log(darks, lights, brights);
// ['shirt', 'pants'], ['skirt'], ['socks', 't-shirt']

fold([...darks, ...lights, ...brights]);

function fold(items) {
  console.log(items);
  // []
  items.forEach(item => foldItem(item));
}


/* 
  ingredients = {
    base: [ 'lettuce' ],
    proteins: [ 'chicken', 'shrimp' ],
    toppings: [ 'avocado', 'tomato', 'feta' ],
  };
*/

function calculatePrice(items) {
  items.reduce(total, item => (total + getPrice(item)), 0);
}

calculatePrice([...ingredients.base, ...ingredients.proteins, ...ingredients.toppings]);

function* stops(direction) {
  if (direction === 'forward') {
    yield* ['Station Zero', 'Station One', 'Station Two', 'The Source'];
  } else {
    yield* ['The Source', 'Station Two', 'Station One', 'Station Zero'];
  }
}

stops().next(); // Station Zero