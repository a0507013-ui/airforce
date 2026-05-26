function printThis() {
    console.log(this);
}

printThis(); // gobal

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