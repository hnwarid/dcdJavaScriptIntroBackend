const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    const { method, url } = request;

    if (url === '/') {
            // TODO 2: logika respons bila url bernilai '/'
            if (method === 'GET') {
                response.statusCode = 200;
                // response.end('<h1>Ini adalah homepage</h1>');
                response.end(JSON.stringify({
                    message: 'Ini adalah hompage',
                }));
            } else { 
                response.statusCode = 400;
                // response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`) 
                response.end(JSON.stringify({
                    message: `Halaman tidak dapat diakses dengan ${method} request`,
                }));
            }
    } else if (url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
        if (method === 'GET') {
            // respons bila client menggunakan GET
            response.statusCode = 200;
            // response.end('<h1>Halo! Ini adalah halaman about</h1>')
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if (method === 'POST') {
            // respons bila client menggunakan POST
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                // response.end(`<h1>Halo ${name}! Ini adalah halaman about</h1>`);
                response.end(JSON.stringify({
                    message: `Halo ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            // response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`)
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method} request`,
            }));
        }
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.statusCode = 404;
        // response.end('<h1>Halaman tidak ditemukan!</h1>');
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    } 

};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada https://${host}:${port}`);
});

/* line 1, 7, 8
console.log('disuruh ngetik kalimatnya ganti yang lain dah yha');
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
*/

/*line 4
    // response.setHeader('Content-Type', 'text/html');
*/

/* line 42-69
    const { method } = request;
    if (method === 'GET') {
        response.end(['<h1>Hello!</h1>']);
    }

    if (method === 'POST') {
        // response.end('<h1>Hai!</h1>');
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }

   // if (method === 'PUT') {
   //     response.end('<h1>Salam!</h1>');
   // }

   // if (method === 'DELETE') {
   //     response.end('<h1>Bonjour!</h1>');
   // }
*/

/*
// curl -X GET http://localhost:5000/
curl -X POST http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X PUT http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X DELETE http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X GET http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
*/

/*
curl -X GET http://localhost:5000
// output: <h1>Hello!</h1>
curl -X POST http://localhost:5000
// output: <h1>Hai!</hai>
curl -X PUT http://localhost:5000
// output: <h1>Bonjour!</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Salam!</h1>
*/

/*
curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"
curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Johnny Deep\"}"
// output: <h1>Hai, Johnny Deep!</h1>
*/

/*
curl -X GET http://localhost:5000/home
// output: <h1>Halaman tidak ditemukan!</h1>
curl -X GET http://localhost:5000/hello
// output: <h1>Halaman tidak ditemukan!</h1>
curl -X GET http://localhost:5000/test
// output: <h1>Halaman tidak ditemukan!</h1>
*/

/*
curl -X GET http://localhost:5000
// output: <h1>Ini adalah homepage</h1>
curl -X POST http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan POST request</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan DELETE request</h1>
*/

/*
curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Johnny Depp\"}"
// output: <h1>Halo, Johnny Depp! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>
*/


/*
curl -X GET http://localhost:5000/about -i
 HTTP/1.1 200 OK
curl -X GET http://localhost:5000/test -i
 HTTP/1.1 404 Not Found
curl -X DELETE http://localhost:5000/ -i
HTTP/1.1 400 Bad Request
*/

/*
const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};

const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};
*/

/*
curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}
curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
*/