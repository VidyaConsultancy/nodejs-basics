const http = require("http");

// request => req. request is an object of type IncomingMessage
// response => res. response is an object of type ServerResponse
const server = http.createServer((request, response) => {
    response.write("Welcome! to the Nodejs server.");
    response.end();
});

server.listen(4000, "127.0.0.1", () => {
    console.log(`Nodejs server is running at http://127.0.0.1:4000`)
})