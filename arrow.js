"use strict";
//arrow 1
Object.defineProperty(exports, "__esModule", { value: true });
// // 기존 선언 방식
// function add(a,b){
//     return a + b;
// }
// // 화살표 함수(람다 함수)
// const plus = (a,b) => {
//     return a + b;
// };
// const sum = (a,b) => a + b; // 한 줄 화살표 함수는 return 생략 가능
// console.log(add(1,2), plus(1,2), sum(1,2));
// arrow 2
// 생략하기 전
// const getBook = () => {
//     return {
//         name: "jpub",
//     };
// };
// console.log(getBook());
// arrow 2-1
// const getBook = () => ({name:"jpub"});
// console.log(getBook());
// arrow 3
// const arr = [1,2,3,4,5];
// function printElement(element) {
//     console.log(element);
// }
// arr.forEach(printElement);
// 한 줄로 출력이 안됨
// arrow 3-1
// const arr = [1,2,3,4,5];
// arr.forEach(element => console.log(element));
//# sourceMappingURL=arrow.js.map