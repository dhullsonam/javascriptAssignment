function Clock(hour, minutes, second) {
    this.hour = hour;
    this.minutes = minutes;
    this.second = second;
    this.setClock = function (second) {
        this.hour = parseInt(second / 3600);
        this.minutes = parseInt((second - (this.hour * 3600)) / 60);
        this.second = second - (this.hour * 3600) - (this.minutes * 60);
    }
    this.printTime = function () {
        console.log(this.hour + ':' + this.minutes + ':' + this.second);
    }
    this.getHours = function () {
        return this.hour;
    }
    this.getSecond = function () {
        return this.second;
    }
    this.getMinute = function () {
        return this.minutes
    }
    this.setHour = function (hour) {
        this.hour = hour;
    }
    this.tick = function () {
        this.second++;
        if (this.second == 60) {
            this.second = 0;
            this.minutes++;
        }
        if (this.minutes == 60) {
            this.minutes = 0;
            this.hour++;
        }
        if (this.hour == 24) {
            this.hour = 0;
        }
    };
    this.addClock = function (clock) {
        this.hour = this.hour + clock.hour;
        this.minutes = this.minutes + clock.minutes;
        this.second = this.second + clock.second;
    };
    this.now = function () {
        

    }
    this.tickDown = function() {
        if (this.second == 0) {
            this.second = 59;
            if(this.minutes == 0) {
                this.minutes = 59;
                if(this.hour == 0) {
                    this.hour = 23;
                }else {
                    this.hour--;
                }
               
            }else {
                this.minutes--
            }
            
        }else
         this.second--
    };
}

var clock1 = new Clock(1, 45, 0)
// clock1.setClock(40000);
clock1.printTime();

let clock2 = new Clock(2,3,12)
clock1.addClock(clock2)
clock1.printTime();


// clock1.setHour(5);
// console.log(clock1.getHours());
// console.log(clock1.getSecond());
// console.log(clock1.getMinute());


// clock1.tick()
// clock1.printTime();

var clock3 = new Clock(0,0,0)
clock3.tickDown();
clock3.printTime();

