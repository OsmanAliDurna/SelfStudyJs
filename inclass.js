let dizi = [11, 2, 3];

console.log(dizi.sort());
console.log(dizi.sort((a, b) => a - b));
// console.log(parseInt(dizi).sort());

let names = ['Ali', 'Veli', 'Con'];

names.push('Ayla');

console.log(names);

let deletedName = names.pop('Ayla');

console.log(names, deletedName);
console.log(names.shift());
console.log(names);
console.log(names.unshift('Ahmet'));
console.log(names);

console.log(names.slice(1, 2));

console.log(names);

names += 2;

console.log(names);

function test1(x) {
  console.log(`inside before ${x}`);
  x = 10;
  console.log(`inside after ${x}`);
}

const x = 5;
test1(x);
console.log(`outside ${x}`);

function test2(x2) {
  console.log(`inside before ${x2}`);
  x2 = [1, 2];
  x2.push(1);
  console.log(`inside after ${x2}`);
}

let x2 = [5, 3];
test2(x2);
console.log(`outside ${x2}`);
