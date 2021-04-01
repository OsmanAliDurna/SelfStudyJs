let text = prompt('Enter a string : ');
let textArr = text.split("");
let result = [];

for (let i = 0; i < textArr.length; i++) {
  result.push(textArr[i]);
  if (parseInt(textArr[i]) % 2 === 0 && parseInt(textArr[i + 1]) % 2 === 0)
    result.push('-');
}

console.log(result.join(""));
