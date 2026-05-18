/** const arr = ["jpub", "typescript", "hello world"];

const publisher = arr [0];
const book = arr[1];
const greet = arr[2];
*/
//위 내용을 구조 분해 할당 하면
// const [publisher,book,greet] = ["jpub", "typescript", "hello world"];
// console.log(publisher);
// console.log(book);
// console.log(greet);
/* const [_,__,greet] = ["jpub", "typescript", "hello world"];

console.log(greet);

*/
// const {
//     name: userName,
//     password: userPassword,
//     createdAt: userCreated
// } = {
//     name: "yongsoo",
//     password: "qwer1234",
//     createdAt: 2024
// };
// console.log(userName, userPassword, userCreated);
// {key: 변수명} 꼴 구조분해 할당
// const {user:user, password:password, createdAt:createdAt} = {
//     user: "lsh",
//     password: "qwer",
//     createdAt: 2024
// };
// console.log(user, password, createdAt);
// {key:변수} 쌍의 이름이 같을 경우 생략가능
const { user, password, createdAt } = {
    user: "lsh",
    password: "qwer",
    createdAt: 2024
};
console.log(user, password, createdAt);
