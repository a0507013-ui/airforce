"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myStr = "Hello";
console.log(typeof myStr);
const publisher = "jpub";
const book = "typescript";
console.log("Hello " + publisher + " " + book);
//백틱(`)으로 감싸면 모두 문자열로 취급/${code}를 이용해 괄호안 변수, 계산식, 함수 삽입가능
console.log(`Hello ${publisher} ${book} ${1 + 1}`);
//# sourceMappingURL=string.js.map