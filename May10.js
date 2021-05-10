// 2 ile 6 arası kode lar için hazırlandı geliştirilecek.

let code = "2223336";
let codeString = "";

for (let i = 0; i < code.length; i++) {
  if (code[i] == 2) {
    codeString += "A";
  } else if (code[i] == 3) {
    codeString += "D";
  } else if (code[i] == 4) {
    codeString += "G";
  } else if (code[i] == 5) {
    codeString += "J";
  } else if (code[i] == 6) {
    codeString += "M";
  }
}

console.log("basic => " + codeString);

let codeString2 = code;

for (let i = 0; i < code.length; i++) {
  codeString2 = codeString2
    .replace("2", "A")
    .replace("3", "D")
    .replace("5", "J")
    .replace("4", "G")
    .replace("6", "M");
}

// Tek bir kere çalıştığı için yetersiz.

// codeString2 = codeString2
//   .replace("2", "A")
//   .replace("3", "D")
//   .replace("5", "J")
//   .replace("4", "G")
//   .replace("6", "M");

console.log("string function => " + codeString2);

let codeString2alternative = [];

for (let i = 0; i < code.length; i++) {
  codeString2alternative.push(
    code
      .split("")
      [i].replace("2", "A")
      .replace("3", "D")
      .replace("5", "J")
      .replace("4", "G")
      .replace("6", "M")
  );
}

console.log("array + string => " + codeString2alternative.join(""));

let codeString3 = code
  .split("")
  .map((elemanlar, index) =>
    String.fromCharCode(code.charCodeAt(index) + 11 + 2 * Number(elemanlar))
  );

console.log("map function => " + codeString3.join(""));

let text = codeString2;

let result = [];

function f(x, i) {
  if (text[i] == x) {
    if (text[i + 1] == x) {
      if (text[i + 2] == x) {
        result.push(String.fromCharCode(x.charCodeAt(0) + 2));
        return i + 2;
      }
      result.push(String.fromCharCode(x.charCodeAt(0) + 1));
      return i + 1;
    }
    result.push(x);
  }
}

for (let i = 0; i < text.length; i++) {
  i = f(text[i], i);

  //   if (text[i] == "A") {
  //     if (text[i + 1] == "A") {
  //       if (text[i + 2] == "A") {
  //         result.push("C");
  //         i += 2;
  //         continue;
  //       }
  //       result.push("B");
  //       i++;
  //       continue;
  //     }
  //     result.push("A");
  //     continue;
  //   }

  //   if (text[i] == "D") {
  //     if (text[i + 1] == "D") {
  //       if (text[i + 2] == "D") {
  //         result.push("F");
  //         i += 2;
  //         continue;
  //       }
  //       result.push("E");
  //       i++;
  //       continue;
  //     }
  //     result.push("D");
  //     continue;
  //   }

  //   result.push(text[i]);
}

console.log(result.join(""));
