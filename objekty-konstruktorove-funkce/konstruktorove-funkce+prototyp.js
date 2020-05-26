function GrannySmith(weight) {
    if (weight) {
        this.weight = weight;
    }
}

GrannySmith.prototype.variety = "Granny Smith";
GrannySmith.prototype.color = "red";
GrannySmith.prototype.weight = 500;
// TODO eat

const apple1 = new GrannySmith();
const apple2 = new GrannySmith(470);

console.log("apple1", Object.getOwnPropertyNames(apple1));
console.log("apple2", Object.getOwnPropertyNames(apple2));
