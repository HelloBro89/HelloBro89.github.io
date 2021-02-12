class Figure {
    constructor() {
        this.color = 'brown';
    };
    getColor() {
        return this.color;
    }
}
const p = 3.14

class Circle extends Figure {

    constructor(numberP, radius) {
        super();
        this.numberP = numberP;
        this.radius = radius;
    }
    getArea() {
        return this.numberP * this.radius ** 2
    }
    getPerimetr() {
        return 2 * this.numberP * this.radius
    }
}

class Square extends Figure {
    constructor(lengthSq) {
        super();
        this.lengthSq = lengthSq;
    }
    getArea() {
        return this.lengthSq ** 2
    }
    getPerimetr() {
        return 4 * this.lengthSq
    }
}

class Rectangle extends Figure {
    constructor(lengthRec, width) {
        super();
        this.lengthRec = lengthRec;
        this.width = width;
    }
    getArea() {
        return this.lengthRec * this.width
    }
    getPerimetr() {
        return (this.lengthRec + this.width) * 2
    }
}


class Triangle extends Figure {
    constructor(base, height, lenghtTr) {
        super();
        this.base = base;
        this.height = height;
        this.lenghtTr = lenghtTr;
    }
    getArea() {
        return this.base * this.height / 2
    }
    getPerimetr() {
        return this.base + this.height + this.lenghtTr
    }
}


class Gotovalna {
    constructor() {
        this.mass = [];
    }
    addFigure(add) {
        this.mass.push(add)
    }
    removeFigure(del) {
        for (let i = 0; i < this.mass.length; i++) {
            if (this.mass[i] === del) {
                this.mass.splice(i, 1)
            }
        }
    }

    getTotalArea() {          // сумма площади добавленных фигур //модернизировать

        return this.mass.reduce((prev, current) => prev + current.getArea(), 0)
        // let sum = 0;
        // for (let i = 0; i < this.mass.length; i++) {
        //     sum += this.mass[i].getArea();
        // }
        // return sum
    }

    getFigure(ind) {
        for (let i = 0; i < this.mass.length; i++) { // вернуть объект по индексу( надеюсь правильно понял )
            if (ind === i) {
                return this.mass[i]
            }
        }

    }

    getLargestArea() {          //вернуть площадь наибольшего объекта
        let bigestArea = 0;
        for (let i = 0; i < this.mass.length; i++) {
            if (this.mass[i].getArea() > bigestArea) {
                bigestArea = this.mass[i].getArea()
            }
        }
        return bigestArea
    }

    getLargeFigures(notMore) {  // вернуть фигуры с площадью больше указанной // модернизировать
        return this.mass.filter(current => current.getArea() > notMore)
        /*let newNotMore = [];
        for (let i = 0; i < this.mass.length; i++) {
            if (this.mass[i].getArea() > notMore) {
                newNotMore.push(this.mass[i]);
            }
        }
        return newNotMore;*/
    }
}

let g = new Gotovalna();


let circle = new Circle(3.14, 6);
let circle1 = new Circle(3.14, 8);
let square = new Square(7);
let rectangle = new Rectangle(6, 3);
let triangle = new Triangle(8, 3, 7);


console.log(g.getLargeFigures(1));
// g.addFigure(circle1);
// g.addFigure(square);
// g.addFigure(rectangle)

//console.log(circle.getArea())
//console.log(circle1.getArea())
//console.log(square.getArea())

//console.log(113.04 + 200.96 + 49)

// function check(result, fun) {

//     let nowa = '';

//     if (Array.isArray(fun)) {
//         for (let per of fun) {
//             nowa = per;
//             if (nowa === result) {
//                 alert("GOOD!")
//             }
//             else if (nowa !== result) {
//                 alert('!!!ERROR!!!')
//             }

//         }
//     }
//     else if (result !== fun) {
//         alert('!!!ERROR!!!')
//     }
//     else if (result === fun) {
//         alert("GOOD!")
//     }

// }

//check(363, g.getTotalArea())
//check(circle1, g.getFigure(1))
//check(200.96, g.getLargestArea())
//check(circle, g.getLargeFigures(115))

//console.log(g.getTotalArea())
//console.log(g.getLargeFigures(100))

