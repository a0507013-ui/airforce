const ob = {
    name: {
        lang: {
            ko : "제이펍",
            en : "jpub",
        },
    },
};

// 깊은 복사를 합니다.
const newOb = {...ob};

// 객체 안의 객체를 바뀝니다.
newOb.name.lang = {ko: "제이펍!!", en: "jpub!!"};

// 원본까지 변경 되었습니다.
console.log(ob);

