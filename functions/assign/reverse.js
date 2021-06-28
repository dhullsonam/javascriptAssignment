function reverseNumber(number) { 
   var rev = []
   var i =0;
   while(number > 0) {
       var re = number%10;
       rev[i]= re;
       number = parseInt(number/10)
       i++; 
   }
   return rev
}

console.log(reverseNumber(123456));