function padLeft(value: string, padding: any ) { 
    if (typeof padding === "number") {     
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") { 
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`); 
}

console.log( padLeft("Hello world", 4)); 
console.log( padLeft("Hello world", "John says ")); 
console.log( padLeft("Hello world", true));  // runtime error

