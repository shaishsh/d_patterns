class Employee {
    constructor(visitor) {
        this.income = 100;
        this.name = 'pied piper';
        this.visitor = visitor;
    }

    accept(visitor) {
        this.visitor.visit(this);
    }
}

module.exports = Employee;