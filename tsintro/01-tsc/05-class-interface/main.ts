interface Person {
    firstName: string;
    lastName: string;
    age: number;
} 

function savePerson (person: Person): void {
    console.log('Saving ', person);
}

const p: Person = {
           firstName: "John", 
           lastName: "Smith",
            age: 25 };

savePerson(p);