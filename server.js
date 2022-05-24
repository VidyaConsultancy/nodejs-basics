const http = require("http");
const e1 = require("./eventEmitter");
require("./utils/logger/logger");

// request => req. request is an object of type IncomingMessage
// response => res. response is an object of type ServerResponse
/**
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
const requestHandler = (request, response) => {
  const method = request.method;
  const url = request.url;
  const headers = request.headers;
  console.log(headers);
  const rawData = [];
  let data;

  request.on("data", (chunk) => {
    rawData.push(chunk);
  });

  request.on("end", () => {
    data = Buffer.concat(rawData);
    console.log(data.toString());
  })

  switch (url) {
    case "/users":
      switch (method) {
        case "GET":
          e1.emit("hey");
          response.write("Users list");
          response.end();
          break;
        case "POST":
          response.statusCode = 201;
          response.statusMessage = "Created";
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({id: 1, name: "John Doe"}));
          break;
        case "PUT":
          response.write("Users updated");
          response.end();
          break;
        case "PATCH":
          response.write("Users patched");
          response.end();
          break;
        case "DELETE":
          response.write("Users deleted");
          response.end();
          break;
        default:
          response.write("Invalid request method");
          response.end();
          break;
      }
      break;
    default:
      e1.emit('hello');
      response.write("Welcome! to the Nodejs server.");
      response.end();
      break;
  }
};

const server = http.createServer((req, res) => {});

server.on("request", requestHandler);

server.listen(4000, "127.0.0.1", () => {
  console.log(`Nodejs server is running at http://127.0.0.1:4000`);
});
