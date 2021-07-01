// Adding functions to objects:

var ford = {
    name: 'sonam',
    color: 'black'
}

ford.printDetails = function () {
    console.log(this.name + ' ' + this.color);
}

ford.printDetails()