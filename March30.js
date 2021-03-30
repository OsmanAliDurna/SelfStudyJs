let text = prompt('Enter a string : ');
let result = '';
for (let i = 0; i < text.length; i++) {
  if (
    (text[i - 1] === ' ' && text[i] !== ' ') ||
    (text[i - 1] !== ' ' && text[i] !== ' ')
  ) {
    result += text[i];
  } else if (text[i - 1] !== ' ') {
    let j = i;
    let spacecount = '';

    while (text[j] === ' ') {
      spacecount += ' ';
      j++;
    }

    if (j < text.length - 1) {
      result += spacecount;
    } else continue;
  }
}
document.write(result, '<br>');
document.write(text.trim());
