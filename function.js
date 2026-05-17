const printThis = () => {
    console.log(this);
};
printThis(); // global
const wrapper = {
    index: "parent",
    printThis,
    data: {
        index: "children",
        printThis,
    },
};
wrapper.printThis(); // wrapper
wrapper.data.printThis(); // wrapper.data
export const test = "hello typescript";
