// operator.js 1 비교 연산자
// console.log(true == 1);
// console.log("1" == 1);

// console.log(true === 1);
// console.log("1" === 1);

// console.log(true != 1);
// console.log(true !== 1);

// operator.js 2
// console.log("A" < "B"); 65<66
// console.log("A" < "a"); 65<97
// console.log("A" < "@"); 65<64
// console.log("A" > "@"); 65>64

// ASCII Value 
// A = 65, B = 66, a = 97, @ = 64


// operator.js 2 논리 연산자

// const count = 0; // false
// const year = 2023; //true
// const greet = "hello"; // true
// const emptyStr = ""; // false

// console.log(!!count);
// console.log(!!year);
// console.log(!!greet);
// console.log(!!emptyStr);


//operator.js 3 자주 사용하는 연산자

// console.log(typeof "hello jpub");
// console.log(typeof 2024);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof typeof {});
// console.log(typeof typeof []);

//operator.js 5 instanceof

// class Book{
//     constructor(publish){
//         this.publish = publish;
//     }
// }

// const typeScript = new Book("제이펍");
// console.log(typeScript instanceof Book);


// operator.js 6 undefind

const book = {
    name : "제이펍",
    age: 15,
};

//console.log(book.year.detail); -> in연산자 이용해서 해당 키 존재여부 확인

console.log("name" in book);
console.log("age" in book);
console.log("year" in book);