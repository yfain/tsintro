interface Comparator {
    compareTo(value: any): number;
}

class Rectangle implements Comparator{

    constructor(private width: number, private height: number){};

    compareTo(value: any): number{
        return this.width * this.height - value.width * value.height;
    }
}

const rect1:Rectangle = new Rectangle(2,5);
const rect2: Rectangle = new Rectangle(2,3);

rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger"): 
   rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
                            console.log("rect1 is smaller") ;


class Programmer implements Comparator {

    constructor(public name: string, private salary: number){};

    compareTo(value: any): number{
        return this.salary - value.salary;
    }  
}

const prog1:Programmer = new Programmer("John",20000);
const prog2: Programmer = new Programmer("Alex",30000);

prog1.compareTo(prog2) > 0 ? console.log(`${prog1.name} is richer`):
      prog1.compareTo(prog2) ==  0? 
           console.log(`${prog1.name} and ${prog1.name} earn the same amounts` ) :
           console.log(`${prog1.name} is poorer`) ;

// Comparing rectangles to programmers is wrong 
// Fix the bug by making the interface Comparator generic           
rect1.compareTo(prog1) > 0 ? console.log("rect1 is bigger"): 
           rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
                                    console.log("rect1 is smaller") ;           