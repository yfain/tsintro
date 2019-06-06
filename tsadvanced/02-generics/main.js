var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.compareTo = function (value) {
        return this.width * this.height - value.width * value.height;
    };
    return Rectangle;
}());
var rect1 = new Rectangle(2, 5);
var rect2 = new Rectangle(2, 3);
rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger") :
    rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
        console.log("rect1 is smaller");
var Programmer = /** @class */ (function () {
    function Programmer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    ;
    Programmer.prototype.compareTo = function (value) {
        return this.salary - value.salary;
    };
    return Programmer;
}());
var prog1 = new Programmer("John", 20000);
var prog2 = new Programmer("Alex", 30000);
prog1.compareTo(prog2) > 0 ? console.log(prog1.name + " is richer") :
    prog1.compareTo(prog2) == 0 ?
        console.log(prog1.name + " and " + prog1.name + " earn the same amounts") :
        console.log(prog1.name + " is poorer");
rect1.compareTo(prog1) > 0 ? console.log("rect1 is bigger") :
    rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
        console.log("rect1 is smaller");
