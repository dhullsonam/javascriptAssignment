// function x(a) {
//     a();
// }

// x(function(){
//     console.log('annonymus function called');
// });


function myFun(x,y) {
    for(var i=0; i<y.length; i++)
    x(y[i])
}

function o(i) {
    console.log("--> " + i);
}

var array = [123,4,56,10];
myFun(o,array);