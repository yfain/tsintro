function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
// console.log( padLeft("Hello world", true));  // runtime error
