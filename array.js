"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr1 = [1, "2", false, {}];
const arr2 = ["hello", "world", "jpub"];
const arr3 = [{ name: "jpub" }, { name: "typescript" }];
console.log(arr2[0]);
console.log(arr2.at(-1));
// update
arr2[1] = "new world";
//create
arr2.unshift("맨 앞에 추가");
arr2.push("맨 끝에 추가");
console.log(arr2);
arr2.shift();
arr2.pop();
console.log(arr2);
//# sourceMappingURL=array.js.map