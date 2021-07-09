function Employee(id ,name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Employee.prototype.city = "Not specified";
Employee.prototype.doSomething = function() {
    console.log(this.name + " is doing something");
}
emp1 = new Employee(12,"sonam",500000);
emp2 = new Employee(13,"nav",1000000);

console.log(emp1.name);
console.log(emp2.name);

emp1.city = 'Bengaluru';    
console.log(emp1.city);
console.log(emp2.city);

emp1.doSomething();
emp2.doSomething();
