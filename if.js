// if 1
// const userDataBase = ["명호", "현우", "선태", "채원"];
// const inputId = "제이펍";

// if (!userDataBase.includes(inputId)) {
//     console.log("undefind user!");
// }

//if 1-1

// const userDataBase = ["명호", "현우", "선태", "채원"];
// const inputId = "채원";

// if (!userDataBase.includes(inputId)) {
//     console.log("undefind user!");
// } else {
//     console.log("login!");
// }

// if 2

// const num = 2023;

// if (num % 2 == 0){
//    console.log("짝수");
// } else {console.log("홀수");}

// if 3

// const display = "HD";
// if(display == "HD"){
//     console.log("1280*720");
// } else if (display == "FHD"){
//     console.log("1920*1080");
// }

// if 3-1

// const display = "QHD";
// if(display == "HD"){
//     console.log("1280*720");
// } else if (display == "FHD"){
//     console.log("1920*1080");
// } else if (display == "QHD"){
//     console.log("2560*1440");
// } else if (display == "UHD"){
//     console.log("3840*2160");
// }

// if 4

// const num = 10;

// if (num>10){
//     console.group("10보다 큼");
// } else if (num>7){
//     console.group("7보다 큼");
// } else if (num>5){
//     console.group("5보다 큼");
// } else if (num>3){
//     console.group("3보다 큼");
// }

// if 5

// const session = {
//     isLogin: true,
//     user: {
//         name : "lwix_04",
//         role : "admin",
//     },
// };

// if (session.isLogin){
//     if (session.user.role == "admin") {
//         console.log("관리자입니다.");
//     }else if(session.user.role == "manager"){
//         console.log("직원 입니다.");
//     }else if(session.user.role == "client") {
//         console.log("고객 입니다.");
//     }else {
//         console.log("다시 로그인 해주세요");
//     } 
// }else {
//         console.log("로그아웃 상태 입니다.");
//     }

// if 5-1

// const session = {
//    id: "iwix",
//    roles : ["admin", "employer"],
// };

// if (!!session) {
//     if ("id" in session){
//         if(session["roles"].includes("manager")){
//             console.log("매니저 권한 입니다.");
//         }

//         else if(session["roles"].includes("admin")){
//             console.log("관리자 권한 입니다.");
//         }
//     }
// }

// if 5-2

// const session = {
//    id: "iwix",
//    roles : ["admin", "employer"],
// };

// function checkRoles(s){
//     if(!s) return console.log("유저 정보가 필요합니다.");

//     if(!("id" in s)){
//         return console.log("매니저 권한 입니다");
//     }

//     if(s["roles"].includes("manager")) return console.log("매니저 권합입니다.");

//     if(s["roles"].includes("admin")) return console.log("관리자 권한 입니다.");
// }

// checkRoles(session);

// if 6

// if(!0){ console.log("0");}
// if(!null) console.log("null");
// if(!undefined) console.log("undefined");
// if(!NaN) console.log(3 * "문자열 곱하기 숫자");
// if(!"") console.log("빈 문자열");

//  if 7

const arr = [];
const ob = {};

if (arr) console.log("빈 배열은 true로 인식");
if (ob) console.log("빈 객체도 true로 인식");

if(!arr.length) console.log("빈 배열");
if(!Object.keys(ob).length) console.log("빈 객체");