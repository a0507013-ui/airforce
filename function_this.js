"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=function_this.js.map