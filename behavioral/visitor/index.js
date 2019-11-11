const incomeVisitor = new (require('./incomeVisitor'))();
const employee = new (require('./employee'))(incomeVisitor);

console.log(employee);
employee.accept();
console.log(employee);


