//
// Stwórz obiekt opisujący prostopadłościan o wymiarach a = 2, b = 4, c = 6.
// Zaimplementuj funkcje getArea, getPerimeter i getVolume
//

const cuboid = {
    a: 2,
    b: 4,
    c: 6,
    getPerimeter () {
        //...
    },
    getVolume() {
        return this.a * this.b * this.c;
    },
    getArea() {
        //...
    }
}

class Cuboid {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // get perimeter() {
    //     //..
    // }
    // get volume() {
    //     return this.a * this.b * this.c;
    // }
    getPerimeter () {
        //...
    }
    getVolume() {
        return this.a * this.b * this.c;
    }
    getArea() {
        //...
    }
}

// const c1 = new Cuboid(1, 2, 3)
// console.log(c1.volume)

const CUBOID_NO = 10;
const cuboidArr = [];
for(let i = 0; i < CUBOID_NO; i++) {
    cuboidArr.push(new Cuboid(i, i * 2, i * 3))
}
