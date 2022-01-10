class Person {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Teacher extends Person {
    constructor(name, surname) {
        super(name, surname)
    }

    teach(subject) {
        console.log(`Teachers ${this.name} ${this.surname} is now teaching ${subject} `);
    }
}

newteacher = new Teacher("Jan", "Kowalski");
newteacher.teach();