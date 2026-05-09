// function.ts 1

// function greet(name) {
//     console.log("My name is ",name);
// }

// greet("jpub");
// greet("chaewon");
// greet("도현");

// function.ts 2

// function add(a,b){
//     console.log("return before");

//     return a + b;

//     console.log("return after");
// }

//     const result = add(1,2);
//     console.log(result);

// function.ts 3

// function addFunction(a,b){
//     return a + b;
// }

// const add = addFunction;
// const minus = function(a,b){
//     return a - b;

// };

// console.log(add(1,2), minus(2,1));

//function.ts 4

// function complexAdd(){
//     return function (a,b,c) {
//         return a + b + c;
//     };
// }

// console.log(complexAdd()(1,2,3));

// function.ts 5

function factorial(num: number): number {
    if(num <= 1){
        return 1;
    }
    return num * factorial(num -1);
}
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(1));

