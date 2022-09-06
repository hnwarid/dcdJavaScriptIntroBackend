//TODO 1 
const { eventEmitter } = require('events');


const birthdayEventListener = (name_) => {
    console.log(`Happy birthday ${name}!`);
}


//TODO 2
const myEmitter = new eventEmitter();


//TODO 3
myEmitter.on('birthday', birthdayEventListener);

//TODO 4 

myEventEmitter.emit('birthday', {name: 'Johnny'})



