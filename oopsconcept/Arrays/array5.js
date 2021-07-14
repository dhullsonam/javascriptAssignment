var myColor = new Array('Blue', 'Pink', 'Red');
myColor.forEach(function (i) {
    console.log(i);
});

var fruits = ['Banana', 'Apple', 'Orange','Grapes','pineapple','Mango']
function myItem(fr) {
    console.log(fr);
}
fruits.forEach(myItem)

var myVar = new Array(1, 2, 3, 4);
myVar.forEach(function (item) {
    console.log(item);
});

var ch = function (item) {
    console.log(item);
}
myVar.forEach(ch);
fruits.forEach(ch);

myColor.forEach(item=>console.log(item));



var y = [2, 44, 3, 12]
function f1(x) {
    console.log('f1 is called: ');
}
console.log(y.findIndex(f1));

var arr1 =fruits.splice(2,5);
for (item of arr1)
    console.log(item);

arr1.push('hello');
console.log(arr1);