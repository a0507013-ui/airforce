"use strict";
/* const book = {
    name: "typescript",
    publisher: "jpub",
};

console.log(book.name, book.publisher);
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* console.log({
    [1 * 2 * 3]: "hello world",
});

console.log({
    ["hello" + "world"] : "hello world",
});

function generateProperty(str) {
    return str + "Key";
}

console.log({
    [generateProperty("typescript")]: "hello world",
});
*/
const publisher = "jpub";
const year = 2024;
//key와 value의 이름이 같을 때
console.log({
    publisher: publisher,
    year: year,
});
//생략이 가능합니다.
console.log({
    publisher,
    year,
});
//# sourceMappingURL=object_literals.js.map