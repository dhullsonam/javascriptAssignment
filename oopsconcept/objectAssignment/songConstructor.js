function Song(name, artist, duration, singer, coverImage) {
    this.name = name,
    this.artist = artist,
    this.duration = duration,
    this.singer = singer,
    this.coverImage = coverImage,

    Song.prototype.play = function () {
        console.log(this.name + " is playing");
    }
    stop = function () {
        console.log(this.duration + "min");
    }
}
var one = new Song('radha teri chunri', 'abijit', 5, 'raja shankar', 'radha Image')
console.log(one.name);

var two = new Song('ram ram', 'mohan', 3, 'shankar', 'Image')
console.log(two.duration);

var three = new Song('aaja aaja', 'Aamir khan', 4, 'niti mohan')
console.log(three.artist);

three.play()