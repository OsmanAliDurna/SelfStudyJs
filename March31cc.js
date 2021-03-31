let text = prompt('Enter a string : ');

let result = '';

for (let i = 0; i < text.length; i++) {
  result += text[i];
  if (parseInt(text[i]) % 2 === 0 && parseInt(text[i + 1]) % 2 === 0)
    result += '-';
}

console.log(result);
