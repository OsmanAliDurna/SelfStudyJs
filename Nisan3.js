let x = 5;

x++;
x++;
x++;

x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;
x++;

x = 0;

x++;
x++;
x++;
x++;

console.log('EN SON TANIMLANAN DEĞER    >  ' + x);

function variables(num) {
  let x = 0;
  console.log(x);
  return x + 5;
}

for (let x = 0; x < 10; x++) {
  console.log(x);
}

let yeni = variables(x);

console.log('fonksiyondan dönen değer       ' + yeni );

console.log('EN SON TANIMLANAN DEĞER    >  ' + x );

function userName(user = 'user') {
  console.log(`Welcome ${user}`);
}

