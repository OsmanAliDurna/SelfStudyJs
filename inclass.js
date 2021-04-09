// let dizi = [11, 2, 3];

// console.log(dizi.sort());
// console.log(dizi.sort((a, b) => a - b));
// console.log(parseInt(dizi).sort());

// let names = ['Ali', 'Veli', 'Con'];

// names.push('Ayla');

// console.log(names);

// let deletedName = names.pop('Ayla');

// console.log(names, deletedName);
// console.log(names.shift());
// console.log(names);
// console.log(names.unshift('Ahmet'));
// console.log(names);

// console.log(names.slice(1, 2));

// console.log(names);

// names += 2;

// console.log(names);

// function test1(x) {
//   console.log(`inside before ${x}`);
//   x = 10;
//   console.log(`inside after ${x}`);
// }

// const x = 5;
// test1(x);
// console.log(`outside ${x}`);

// function test2(x2) {
//   console.log(`inside before ${x2}`);
//   x2 = [1, 2];
//   x2.push(1);
//   console.log(`inside after ${x2}`);
// }

// let x2 = [5, 3];
// test2(x2);
// console.log(`outside ${x2}`);

const button = document.querySelector('button');

// console.log(parseInt(Math.random() * 255));

function changeColor() {
  const red = parseInt(Math.random() * 255);
  const green = parseInt(Math.random() * 255);
  const blue = parseInt(Math.random() * 255);
  button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener('mouseover', changeColor);

const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
  console.log(e.key);
  console.log(e);

  if (e.key.length === 1) {
    e.preventDefault();
    e.target.value += e.key;
  }
});

const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementsByName('username')[0].value;
  const surname = document.getElementsByName('surname')[0].value;
  console.log(username, surname);
  const newComment = document.createElement('li');
  newComment.innerHTML = `<b>${username}</b> - ${surname}`;

  const comments = document.getElementsById('comments');
  comments.appendChild(newComment);
  // comments.append(`${username} - ${comment}`);
});
