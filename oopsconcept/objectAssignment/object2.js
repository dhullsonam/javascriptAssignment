// Display 3 employee details ==> 5 properties, 1 behaviour

var employee1 = {
    name:'sonam',
    age:'26',
    mobileNumber:'9541301001',
    department:'IT',
    address:'yamunanagar',
    dowork:function(){
        console.log(this.name+ ' works in '+ this.department + ' department');
    }
}

var employee2 = {
    name:'nav',
    age:'30',
    mobileNumber:'94826843559',
    department:'cse',
    address:'Ambala',
    personalDetails:function() {
        console.log('name:'+this.name+ ', age:'+this.age +', contact number:'+this.mobileNumber+ ', address:'+this.address);
    }
}

var employee3 = {
    name:'mohan',
    age:'29',
    mobileNumber:'9500030043',
    department:'IT',
    developer:'ios',
    address:'kurukshetra',
    profession:function() {
        console.log(this.name + ' is '+this.developer +' developer in '+ this.department + ' company');
    }

}
employee1.dowork()
employee2.personalDetails()
employee3.profession()
