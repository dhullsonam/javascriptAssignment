// spread operator ...value
let arr1 = [1, 2, 4, -1, 6,];
let arr2 = [11, 12, 13, 14];

let arr = [...arr1, ...arr2];
console.log(arr);

// spread operator for coping

let arr3 = ['a', 'b', 'c', 'd'];
let arr4 = [...arr3];
arr4.push('e');

console.log(arr4);

// spread operator for expand method

let arr5 = [...arr4, 'f', 'g']
console.log(arr5);

// min  in an array using Math.min() with spread operator

console.log(Math.min(...arr1));


// spread operator with object

let student1 = {
    id: 01,
    name: 'sonam'

}
let student2 = {
    name: 'nav',
    address : 'yamunanagar'
}
let student = {...student1,...student2}
console.log(student);