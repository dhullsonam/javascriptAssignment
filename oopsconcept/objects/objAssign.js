var student = {
    name: 'sonam',
    age:26,
    qualification:'B.tech'
}

var duplicate= {} 

Object.assign(duplicate,student);

console.log(student);
console.log(duplicate);

duplicate.name = 'Radha';
duplicate.phone = 9089576890;
console.log(student);
console.log(duplicate);

