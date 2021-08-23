 // parsing  an array  returned from a function


function arr(){
    return [ 20, 120, 230, 489]
}

let a, b;
[a,b] = arr();
console.log(a);
console.log(b);

// ignoring  some returned values :

let x , y;
[,,x ,y] = arr();
console.log(x);
console.log(y);

// Assing rest of the array to a variable 

const [n, ...m] = ['a', 'b','c','d','e']
console.log(m);