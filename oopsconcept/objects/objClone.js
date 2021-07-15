var emp1 = {
    name: 'sonam',
    age: 26,
    number: 09303032021
};

var emp2 = {}; // new empty object

// copy all properties of emp1 to emp2

for (let i in emp1) {
    emp2[i] = emp1[i];
}

console.log(emp1);
console.log(emp2);

emp2.name = 'krishna'
console.log(emp2);
console.log(emp1);
