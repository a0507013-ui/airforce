"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ob1 = { name: "jpub" };
console.log(ob1);
// ob2에 ob1을 얕은 복사합니다.
const ob2 = ob1;
console.log(ob2); // hello jpub  출력
//ob2를 변경합니다.
ob2.name = "typescript"; // ob2의 name속성의 속성값을 typescript로 변경
//ob1도 같이 변경되었습니다.
console.log(ob1, ob2);
//# sourceMappingURL=shallowCopy.js.map