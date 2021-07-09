function Employee(id, name, salary) {
    this.id = id,
        this.name = name,
        this.salary = salary
}

var emp1 = new Employee(1, "sonam", 500000)
var emp2 = new Employee(2, "nav", 1000000)

console.log(typeof emp1);
console.log(emp1.name);
console.log(emp2["name"]);