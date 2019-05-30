class Dog {  
    constructor(readonly name: string) { };
 
    sayHello(): string {
      return `The dog ${this.name} says hello!`;
    }
 }
 
 class Fish {  
     constructor(readonly name: string) { };
 
     dive(howDeep: number): string {
      return `Diving ${howDeep} feet`;
    }
 
 }
 
 // 1. Declare the type Pet as a union of Dog and Fish
 type Pet = 
 
 
 // 2. Declare the custom type guard isFish
 //    If the object has a member dive - it's a fish
 const isFish = 
 
 function talkToPet(pet: Pet): string {
 
   if (/* 3. Apply the isFish guard here */) {  
     return 'Fish cannot talk, sorry.';
   } else {
     return pet.sayHello();
   }
 } 
 
 const myDog = new Dog('Sammy');    
 const myFish = new Fish('Marry');  
 
 console.log(talkToPet(myDog));  
 console.log(talkToPet(myFish));
 
 // 4. Press Run and check the output on the console. 