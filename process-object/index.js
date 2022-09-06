// const message = (name) => {
//     console.log(`Hello ${name}`);
// }

// message('JavaScript nodejs intro here\n\n');



// // Object.getOwnPropertyNames(global);



// const cpuInformation = process.memoryUsage();

// console.log(cpuInformation);
/* output
{
  rss: 19660800,
  heapTotal: 4907008,
  heapUsed: 2806160,
  external: 964031,
  arrayBuffers: 9382
}
*/



const initialMemoryUsage = process.memoryUsage.heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i=0; i <= 10000; i++) {
    //this looping process will increase memory usage
}

const currentMemoryUsage = process.memoryUsage.heapUsed;
console.log(`Hai, ${yourName}`);
console.log(`Mode environemnt: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// SET NODE_ENV=development && node ./process-object/index.js JohnnyDepp 


