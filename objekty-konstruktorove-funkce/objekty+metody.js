const apple = {
    color: "red",
    variety: "Granny Smith",
    weight: 500,
    eat: function() {
        // TODO: throw error if weight < 0

        this.weight -= 60;
    }
}

