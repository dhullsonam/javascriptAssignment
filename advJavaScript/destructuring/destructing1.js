// Destructuring makes possible to unPack values from Arrays 
// properties from object  into distinct variable

let a , b, rest;

[a,b,...rest] = ['Ram','Shyam','Mohan','krishna','Gopal','Laddu'];

console.log(a);
console.log(b);
console.log(rest);

// 
 let arr = ['one ','two','three'];

let [Mango , Banana , Grapes] = arr;

console.log(Mango);

// DEFAULT VALUE: in case  that value unpacked from Array is UNDEFINED 


let [x = 4 , y = 8] = [5];
console.log(x);
console.log(y);


// SWAPPING VALUES :

const arr1 = ['Hello-0','Welcome-1','Namaste-2'];
[arr1[1],arr1[2]] = [arr1[2] , arr1[1]]

console.log(arr1);