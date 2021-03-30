let number = Number(prompt('Enter a number : '));

document.write(factorial(number));

// recursive

function fibo(num) {
  if (num === 1) return 1;
  return fibo(num - 1) + fibo(num - 2);
}
