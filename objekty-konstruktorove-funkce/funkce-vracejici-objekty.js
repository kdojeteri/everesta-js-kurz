function createGrannySmith(weight) {
    const apple = {
        color: "red",
        variety: "Granny Smith",
        eat: function () {
            // TODO: throw error if weight < 0

            this.weight -= 60;
        }
    };

    apple.weight = weight;
    
    return apple;
}

const apple1 = createGrannySmith(500);
const apple2 = createGrannySmith(600);

// TODO: předělat na konstruktorovou funkci