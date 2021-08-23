var xx = `{
    "Bolero" : [{
        "version" : " Bolero B4",
        "color" : "white",
        "exShowRoomPrice" : "₹8.64 Lakh",
        "registerationCharges" : 10000
    },
    {
        "version" : " Bolero B6",
        "color" : "white",
        "exShowRoomPrice" : "₹9.39 Lakh",
        "registerationCharges" : 12000
    },
    {
        "version" : " Bolero B6 opt",
        "color" : "Black",
        "exShowRoomPrice" : "₹9.63 Lakh",
        "registerationCharges" : 12980 
    }
    ]
}`

var carDetails  = JSON.parse(xx);
console.log(carDetails.Bolero[2].version);
console.log(carDetails.Bolero[1]);