var myArray = new Array(true, 'red', 'pink', 123, 5, 6, 7)

//console.log(myArray);


// for loop to iterate through the array
for (var i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

// for ... of loop to iterate through the array
for (item of myArray)
    console.log(item);