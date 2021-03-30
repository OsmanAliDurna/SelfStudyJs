let ekranabasilacaksayi = parseInt(
  prompt('Faktoriyelinin bulunmasını istediğiniz sayıyı giriniz : ')
);

// ek = 5 * 4 -> ek = 20 * 3 -> 60 * 2 = 120

for (let i = fact - 1; i > 1; i--) {
  ekranabasilacaksayi = ekranabasilacaksayi * i;
}

console.log(ekranabasilacaksayi);

// (5 *(4 * (3 * (2 * ( 1*))) ))

function fact(num) {
  return num * fact2(num - 1);
}

function fact(num) {
    return num * fact(num - 1);
  }

console.log(fact(ekranabasilacaksayi));
