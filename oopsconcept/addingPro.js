//  adding and deleting new properties to an existing object

var msg1 = {
    to: 9675893566,
    msg: 'hello how are you?',
    delivered: true,
    read: false,
    from: 9508674658
}

//  adding in pre exiting object 
msg1.age = 23
for (property in msg1)
    console.log(property + " : " + msg1[property])

//  deleting something from pre exiting object 

delete msg1.read
for (property in msg1)
    console.log(property + " : " + msg1[property])

console.log(msg1.from);


