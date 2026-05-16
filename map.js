"use strict";
// map 1
Object.defineProperty(exports, "__esModule", { value: true });
// const arr = [0,1,2,3,4,5,6,7,8,9];
// let num = 0;
// function add(element){
//     num = num +element;
// }
// arr.map(add);
// console.log(num);
//map 2
const arr = [0, 1, 2, 3, 4, 5];
let num = 0;
function add(element) {
    num = num + element;
    // 각 요소의 제곱 반환
    return element ** 2;
}
const result = arr.map(add);
console.log(result, num);
//# sourceMappingURL=map.js.map