function calculator(num1, num2, opr) {
    //  First sloution
    // if (opr === "+") {
    //     return num1 + num2;
    // } else if (opr === "-") {
    //     return num1 - num2;
    // } else if (opr === "*") {
    //     return num1 * num2;
    // } else if (opr === "/") {
    //     return num1 / num2;
    // } else return Error("The operator is not correct!");
//     ---------------------------------------------------------
//     Second sloution (is better)
    switch (opr) {
        case("+"):
            return num1 + num2;
            break;
        case("-"):
            return num1 - num2;
            break;
        case("*"):
            return num1 * num2;
            break;
        case("/"):
            return num1 / num2;
            break;
        default: return Error("The operator is not correct!");
    }
}

module.exports = calculator;
