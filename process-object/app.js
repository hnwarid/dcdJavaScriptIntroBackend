// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost': 'dicoding.com', 
// });

// perintah ini tidak akan berjalan
// node -e 'process.env.foo = "bar"' && echo $foo

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);