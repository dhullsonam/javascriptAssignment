var items = ['Organic tulsi', ' Organic Doopam', 'Desi cow gee',' Desi Panchagavya','Cow Dung Cake']


// if we want to find all product whoes name contain cow then we 
// achieve this using loop
var filteredItem = [];
for (var i of items) {
    if(i.toLocaleLowerCase().includes('cow')) {
        filteredItem.push(i);
    }
}
console.log(filteredItem);

// by using filter method

var filteredItem2 = items.filter(function(x) {
    return x.toLocaleLowerCase().includes('organic')
});
console.log(filteredItem2);

// same as above but using arrow function 

var filteredItem3 = items.filter(x => x.toLocaleLowerCase().includes('desi'));
console.log(filteredItem3);