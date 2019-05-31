class Person {
    firstName: string;
    lastName: string;
    age: number;

    sayHello(): string {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    department: string;
}

const empl = new Employee();

empl.firstName = "Joe";
empl.lastName = "Smith";
empl.age = 29;

console.log(empl.sayHello());