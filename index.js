// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() { return `${this.name} says meow!` }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() { return `${this.name} says woof!` }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if (this.sex == "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}


// if (this.sex == 'male') { `It's me! ${this.name}, the parrot!` } else { `${this.name} says squawk!` } 