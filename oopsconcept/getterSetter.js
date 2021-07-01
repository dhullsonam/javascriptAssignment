// getter example

var emp = {
    name : 'sonam',
    salary : 909000,
    city : 'Yamunanagar',
    get empCity() {
        return this.city
    },
    get empName() {
        return this.name
    }
}
console.log(emp.empCity);
console.log(emp.empName);