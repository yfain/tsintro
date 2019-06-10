type constructorMixin = { new(...args: any[]): {} };

// This decorator takes one param: salutation, e.g. Mr., Mrs, etc. 
function useSalutation(salutation: string) { 

    return function <T extends constructorMixin> (target: T) { 
      return class extends target {  
       name: string;
       private message = 'Dear ' + salutation + this.name; 
  
       sayHello(){console.log(`${this.message}`);} 
      }
    }
  }

  // The undecorated class
@useSalutation("Mr. ")  
class Greeter {
    constructor(public name: string) { }
    sayHello() { console.log(`Hello ${this.name} `) };
}
  
// 1. Apply the decorator to the Greeter class passing "Mr." as param"
// 2. Add a line that instantiates Greeter passing Smith as a name
// 3. Add a line that invokes sayHello()
// 4. Compile and run the script main. You'll need to use the --experimentalDecorators flag 
// 5. It should print "Hello  Mr. Smith"

const grt = new Greeter("Smith ");
grt.sayHello();