const { largeNumber, cut3 } = require("./utilities/firstFunction");
const { sum, concat } = require("./utilities/secondFunction");

console.log(largeNumber([1, 2, 3, 4])); // 4

console.log(cut3([1, 2, 3, 4])); // [ 1, 2, 4 ]

console.log(sum([1, 2, 3, 4])); // 10

console.log(concat([1, 2, 3, 4], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
