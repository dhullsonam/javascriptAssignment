// 

const emp = {
    name:'sonam',
    id: 123

};

const { id, name } = emp;
console.log(id);
console.log(name);

//  A property can be unpacked from an object and assigned to a variable with a different name than the object property.

const p = { q: 12, r: true }
const { q: temp, r: re } = p;
console.log(temp);
console.log(re);

// can assign deafult values 