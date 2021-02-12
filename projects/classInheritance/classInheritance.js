class Animals {

    constructor(name, whatAnimal, hi) {
        this.name = name;
        this.whatAnimal = whatAnimal;
        this.hi = hi;
    }

    sayHi() {
        console.log(this.whatAnimal + ' ' + this.name + ' говорит: ' + this.hi)
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName;
    }

}

class Dog extends Animals {

    constructor(name) {
        super(name, 'собака', 'гав-гав!');

    }
}
class Cat extends Animals {
    constructor(name) {
        super(name, 'кот', 'мяу-мяу!')
    }
}
class Fox extends Animals {
    constructor(old) {
        super("рыжая", 'лиса')
        this.old = old;
    }
};

let animals = new Animals('<имя>')
let dog = new Dog('Лаки');
let cat = new Cat('Мурлыка');
let fox = new Fox(31);

console.log(fox.hi)
// let greetings = [
//     new Dog('лаки'),
//     new Cat('Мурлыка'),
//     new Fox('Рыжая')
// ];

// for (let i = 0; i < greetings.length; i++) {
//     greetings[i].sayHi()
// }
