var car = {
     bike :{
        bk : function() {
            console.log('I am bike');
        }
    }
}

var car2 = {
    pBike :{
        bk : function() {
            console.log('I am pBike 2');
        }
    },

     bike :{
        bk : function() {
            console.log('I am bike2');
        }
    }
}

car2.bike.bk()
car2.pBike.bk()

// scope of identifier