// Creating a object using object literal {}

var myCar1 = {
    name: 'fortuner',
    modelNo: '2020',
    color: 'black',
    speed:'100',
    wheel:'alloy',
    engineType:'petrol',
    seater:'7',
    start:function() {
        console.log(this.name+' starts');
    },
    run:function() {
        console.log(this.name +' runing... '+ this.speed);
    },
    stop:function () {
        console.log(this.name + ' stoped');
        
    }
}

var myCar2 ={
    name:'swift',
    modelNo:'2021',
    color:'white',
    seater:'5',
    engineType:'Diesel',
    speed:'80',
    start:function(){
        console.log(this.name+ ' starts')
    },
    appearance:function() {
        console.log(this.name + ' of  '+this.color +'  color,With '+ this.seater+ ' seater' );
    }
}

myCar1.start()
myCar1.run()
myCar1.stop()
myCar2.start()
myCar2.appearance()