function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    Employee.prototype.dowork = function () {
        console.log(this.name + ' is doing work');
    };
    Employee.prototype.leave = function () {
        console.log(this.name + ' is on leave');
    };
    this.raiseSalary = function (percent) {
        this.salary += (this.salary * percent) / 100;
    }

}

var emp1 = new Employee(01, 'sonam', 800000);
var emp2 = new Employee(02, 'ram', 80000);
var emp3 = new Employee(04, 'rajan', 300000)

console.log(emp1.salary);
emp2.leave();


emp1.raiseSalary(50);
console.log(emp1.salary);
emp3.raiseSalary(100)
console.log(emp3.salary);
