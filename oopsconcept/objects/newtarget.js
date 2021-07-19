

function Laptop(height, width, weight) {
    if (new.target != null) {
        this.height = height;
        this.weight = weight;
        this.width = width;
       
    } else {
        console.log('no object is called');
    }

}

let laptop1 = new Laptop(22, 45, 66);
let laptop2 = new Laptop(21, 44, 56);

Laptop(); 
// constructor function is a function it could also be misused by calling it as a normal function instead of creating an object.
//Inside your constructor you can know if your constructor is called for creating an object or not i.e done by new.target 
