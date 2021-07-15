var furniture  = ['Table','Chair','Bed','Couch','Wardrobe']
console.log(furniture.length);

for(i of furniture) {
    console.log(i);
}

furniture.push('Desk')
console.log(furniture);

console.log(furniture.join()); 

furniture.reverse()
console.log(furniture);

let fruits = ['Banana','Mango','Apple'];
let veggi = ['Potato','onion','capsicum'];
console.log(fruits.concat(veggi)); 

var num = [23,5,6,8,1] // inplace sort
console.log(num.sort());




