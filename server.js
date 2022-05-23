const http = require("http");

// request => req. request is an object of type IncomingMessage
// response => res. response is an object of type ServerResponse
const requestHandler = (request, response) => {
  const method = request.method;
  const url = request.url;

  if (method === "GET" && url === "/users") {
    response.write("Users list");
    response.end();
  } else {
    response.write("Welcome! to the Nodejs server.");
    response.end();
  }
};

const server = http.createServer();

server.on("request", requestHandler);

server.listen(4000, "127.0.0.1", () => {
  console.log(`Nodejs server is running at http://127.0.0.1:4000`);
});
