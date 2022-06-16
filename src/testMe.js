const array1 = [1, , "3", 4, "", 9, 16];

// pass a function to map

const map1 = array1.filter((element) => typeof element === "number");
console.log(map1);
// expected output: Array [2, 8, 18, 32]
