var aa = `{
   "details": [{
        "songName": "Radhe Radhe",
        "length": 5,
        "Singer": "Gourav krishna"
    },
    {
        "songName": "Teri ummed ",
        "length": 3,
        "Singer": "kishore Kumar"
    },
    {
        "songName": "Pal Pal Dil ke Pass",
        "length": 4,
        "Singer": "Lata MAngeshkar and kishore Kumar"
    },
    {
        "songName": "Aane se Uske",
        "length": 4,
        "Singer": "Mohammad Rafi"
    }
    ]

}`



var myObj = JSON.parse(aa);
// console.log(myObj.details[0]);
// console.log(myObj.details[3].songName);


myObj.details.forEach(element => {
    console.log(element.songName);
});





