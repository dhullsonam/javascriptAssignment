class Reactangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    get getHeight() {
        return this.#height;
    }
}

let react1 = new Reactangle(300, 100);
console.log(react1.getHeight)