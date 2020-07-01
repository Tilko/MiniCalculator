
const operators_Id_To_Code = require("./Operators_Id_To_Code")

class Operation {
  constructor(operationCode) {
    this.operationCode = operationCode;
    this.lhs = 0;
    this.rhs = 0;
  }
  execute() {
    return this.operationCode(this.lhs, this.rhs);
  }
}

class Calculator {

  constructor() {
    this.result = 0;
    this.operation = null;
  }

  reset() {
    this.operation = null;
  }

  treatOperator(operand, operatorId) {
    if (operatorId === "equal")
      this.operation = null;
    else {
      this.operation = new Operation(operators_Id_To_Code[operatorId]);
      this.operation.lhs = operand;
    }
  }
  treatOperation(operand, operatorId) {
    const newLhsOperand = this.treatOperand(operand);
    this.treatOperator(newLhsOperand, operatorId);
    return newLhsOperand;
  }
  treatOperand(operand) {
    if (this.operation !== null) {
      this.operation.rhs = operand;
      return this.operation.execute();
    }
    return operand;
  }
}



module.exports = Calculator;
