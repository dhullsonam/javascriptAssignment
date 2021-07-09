function Clock (hour , minutes, second) {
    this.hour = hour;
    this.minutes = minutes;
    this.second = second;
    this.setClock = function(second) {
        this.hour = parseInt(second/3600);
        this.minutes = parseInt((second-(this.hour*3600))/60);
        this.second = second - (this.hour*3600) - (this.minutes*60);
    }
    this.printTime = function() {
        console.log(this.hour+ ':' + this.minutes + ':'+ this.second);
    }
    this.getHours = function() {
        return this.hour;
    }
    this.getSecond = function() {
        return this.second;
    }
    this.setHour = function(hour) {
        this.hour = hour;
    }
}

var clock1 = new Clock(13,4,09)
clock1.setClock(40000);
clock1.printTime();

clock1.setHour(8)

console.log(clock1.getHours());
console.log(clock1.getSecond());