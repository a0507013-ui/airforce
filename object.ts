const myObject = {
    name : "jpub",
};
console.log(myObject);
//console.log(myObject.name, myObject["name"], myObject.hello)

// typescript playground에서는 정상 실행
//undefind 출력 됨


//myObject.name = "typescript";

myObject["friend"] = "chaewon";

//delete myObject.name;
console.log(myObject);


const myKey = "name";

console.log(myObject[myKey]);