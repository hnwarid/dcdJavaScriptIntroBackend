class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    } 

    howl() {
        console.log('Owoooo!')
    }
}

// TODO 2 
module.exports = Wolf;