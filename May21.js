function spinWords(string) {
  y = string.split(" ");
  z = [];
  for (i = 0; i < y.length; i++) {
    if (y[i].split("").length < 5)
      z += y[i] == y[y.length - 1] ? y[i] : y[i] + " ";
    else if (y[i].split("").length >= 5)
      z +=
        y[i] == y[y.length - 1]
          ? y[i].split("").reverse().join("")
          : y[i].split("").reverse().join("") + " ";

    // if (y[i] == y[y.length - 1]) {
    //   if (y[i].split("").length < 5) {
    //     z += y[i];
    //   } else if (y[i].split("").length >= 5) {
    //     z += y[i].split("").reverse().join("");
    //   }
    // } else {
    //   if (y[i].split("").length < 5) {
    //     z += y[i] + " ";
    //   } else if (y[i].split("").length >= 5) {
    //     z += y[i].split("").reverse().join("") + " ";
    //   }
    // }
  }
  return z;
}

console.log(spinWords("Hey fell fsdfsd warriors sd"));
