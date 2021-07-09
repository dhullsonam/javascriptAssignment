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

// setter 

var emp = {
    name : 'navpreet',
    salary : 14000000,
    city : 'yamunanagar',
    set empName(empName) {
        this.name = empName;
    },
    set empCity(empCity) {
        this.city =empCity;
    }
}

emp.empCity = 'Ambala';
emp.empName = 'Agastya';

console.log(emp["name"]);
console.log(emp.city);

//playing with counter

var obj = {
    counter : 0,
    get reset() {
        this.counter = 0;
    },
    get increment() {
        this.counter++;
    },
    get decrement() {
        this.counter--;
    },
    set add(value) {
        this.counter += value;
    }
}
obj.reset;
console.log(obj.counter);
obj.add = 5;
console.log(obj.counter);
obj.subtract = 1;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
