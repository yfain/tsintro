class Person {  
    name: string;
}

class Employee extends Person {  
    department: number;
}

class Animal { 
    breed: string;
}

const workers: Array<Person> = []; 

workers[0] = new Person();  
workers[1] = new Employee(); 
workers[2] = new Animal(); // compile-time error 