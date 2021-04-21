let text1 = prompt('Enter a word :').toLowerCase();
let text2 = prompt('Enter another word :').toLowerCase();

let isAnagram = true;

if (text1.length !== text2.length) {
  isAnagram = false;
} else {
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        break;
      }
      if (j == text2.length - 1) {
        isAnagram = false;
      }
    }
  }
}

isAnagram ? console.log('Anagramdır.') : console.log('Anagram değildir.');

// M A R Y    A R M Y

// function compare(a, b) {
//   y = a.split('').sort();
//   z = b.split('').sort();
//   for (i = 0; i < y.length; i++) {
//     if (y.length === z.length) {
//       if (y[i] === z[i]) {
//         console.log(a + ' and ' + b + ' are anagrams!');
//         break;
//       } else {
//         console.log(a + ' and ' + b + ' are not anagrams.');
//         break;
//       }
//     } else {
//       console.log(a + ' has a different amount of letters than ' + b);
//     }
//     break;
//   }
// }
// compare('mary', 'army');
// compare('ali', 'lia');
// compare('elma', 'armut');
