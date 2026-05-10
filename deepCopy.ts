// 깊은 복사 

// const ob1 = {name: "jpub"};

// //깊은 복사를 합니다.
// const ob2 = {...ob1};

// //ob2변경
// ob2.name = "typescript";

// // 이번에는 ob2만 변경
// console.log(ob1,ob2);

// 깊은 복사 - 1. 스프레드 연산자(전개연산자)

// const ob = {
//     name: "jpub",
// };
// const arr = ["hello","wolrd"];

// //깊은 복사를 합니다.

// const newOb = {...ob};
// const newArr = {...arr};

// console.log(newArr);
// console.log(newOb);

// 결과값이 나오긴 하지만 깊은 복사가 아님


// const ob = {
//     name: {
//         lang: {
//             ko : "제이펍",
//             en : "jpub",
//         },
//     },
// };

// // 깊은 복사를 합니다.
// const newOb = {...ob};

// newOb.name.lang = {ko: "제이펍!!", en: "jpub"};

// // 원본까지 변경
// console.log(ob);

import {cloneDeep} from "lodash";

const ob = {
    name:{
        lang: {
            ko : "제이펍",
            en : "jpub",
        },
    },
};

// 새로운 객체를 깊은 복사합니다.
const newOb = cloneDeep(ob);

// 객체 내부의 객체를 수정합니다.
ob.name.lang = {ko:"제이펍!!", en: "jpub!!"};

console.log(ob.name.lang);
console.log(newOb.name.lang);
