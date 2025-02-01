let result;
let a = 2,
  b = 3;
// Basic construction

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// Rewrited construction

result = a + b == 4 ? "Верно!" : a + b < 4 ? "Мало" : "Много";

alert(result);
