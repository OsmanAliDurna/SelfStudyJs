let text = prompt('Enter a string : ');

// text.reverse()

for (let i = text.length - 1; i >= 0; i--) {
  document.write(`${text[i]}`);
}

document.write('<br><br>');

// text.reverse().replace(" ","")

for (let i = text.length - 1; i >= 0; i--) {
  if (text[i] === ' ') continue;
  document.write(`${text[i]}`);
}

document.write('<br><br>');

// text.split(" ")[0]

for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') break;
  document.write(`${text[i]}`);
}

document.write('<br><br>');

// text.split(" ")[:]

for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    document.write('<br>');
    continue;
  }
  document.write(`${text[i]}`);
}

document.write('<br><br>');

if (Number.isInteger(text[0])) {
  document.write('Doğru Durumunda');
} else {
  document.write('Yanlış Durumunda');
}

document.write('<br><br>');

Number.isInteger(text[0])
  ? document.write('Doğru Durumunda')
  : document.write('Yanlış Durumunda');

document.write('<br><br>');

document.write(
  `${(Number.isInteger(text[0]) && 'Doğru') || 'Yanlış'} Durumunda`
);

document.write('<br><br>');

if (text[0].match(/[0-9]/i)) document.write('Bu bir rakamdır.');
else {
  if (text[0].match(/[a-z]/i)) document.write('Bu bir harftir.');
  else document.write('Ne ki bu ...');
}

document.write('<br><br>');

text[0].match(/[0-9]/i)
  ? document.write('Bu bir rakamdır.')
  : text[0].match(/[a-z]/i)
  ? document.write('Bu bir harftir.')
  : document.write('Ne ki bu ...');

document.write('<br><br>');

document.write(
  `Bu bir ${
    (text[0].match(/[0-9]/i) && 'rakamdı') ||
    (text[0].match(/[a-z]/i) && 'harfti') ||
    'nedi'
  }r.`
);
