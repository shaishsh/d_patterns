class IncomeVisitor {
    visit(employee) {
        employee.income *= 1.2;
    }
}

module.exports = IncomeVisitor;