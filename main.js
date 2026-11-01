// 1. Создаём массив из 5 чисел
let numbers = [10, 5, 30, 20, 15];

console.log("Начальный массив:", numbers);

numbers.push(25);

console.log("После добавления:", numbers);

numbers.shift();

console.log("После удаления:", numbers);

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Чётные числа:", evenNumbers);

let multiplied = numbers.map(function (num) {
  return num * 5;
});

console.log("Умноженные на 5:", multiplied);

let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);

let average = sum / numbers.length;

console.log("Среднее арифметическое:", average);

let sorted = numbers.sort(function (a, b) {
  return a - b;
});

console.log("Сортировка по возрастанию:", sorted);

// 2

let celebrities = [
  { name: "Michael Jackson", age: 50, role: "singer" },
  { name: "Cristiano Ronaldo", age: 41, role: "footballer" },
  { name: "Lionel Messi", age: 39, role: "footballer" },
  { name: "Jackie Chan", age: 72, role: "actor" },
  { name: "Tom Cruise", age: 64, role: "actor" },
  { name: "Taylor Swift", age: 36, role: "singer" },
  { name: "Bill Gates", age: 71, role: "businessman" },
  { name: "Elon Musk", age: 55, role: "businessman" },
  { name: "Justin Bieber", age: 32, role: "singer" },
  { name: "Millie Bobby Brown", age: 22, role: "actress" },
];

console.log("Все знаменитости:", celebrities);

let names = celebrities.map(function (person) {
  return person.name;
});

console.log("Имена знаменитостей:", names);

let information = celebrities.map(function (person) {
  return person.name + " is a " + person.role;
});

console.log("Информация:", information);

let oldest = celebrities.reduce(function (old, person) {
  return person.age > old.age ? person : old;
});

console.log("Самый старший:", oldest);

let youngest = celebrities.reduce(function (young, person) {
  return person.age < young.age ? person : young;
});

console.log("Самый младший:", youngest);

let difference = oldest.age - youngest.age;

console.log("Разница в возрасте:", difference);

let hasMinor = celebrities.some(function (person) {
  return person.age < 18;
});

console.log("Есть ли несовершеннолетние:", hasMinor);

let olderThan20 = celebrities.filter(function (person) {
  return person.age > 20;
});

console.log("Знаменитости старше 20 лет:", olderThan20);
