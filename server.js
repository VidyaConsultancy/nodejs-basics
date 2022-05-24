const http = require("http");
const e1 = require("./eventEmitter");
require("./utils/logger/logger");
const { stdout, stdin } = require("process");
const crypto = require("crypto");
const fs = require("fs");

fs.open("./sample.txt", "a", (err, fd) => {
  if (!err) {
    fs.write(fd, "Some more content after the add", (err, written, str) => {
      if (!err) {
        console.log(written, str);
        fs.close(fd, (err) => {
          console.error(err);
        });
      }
    });
  }
  console.log("After file opened");
});
console.log("Outside file open call");
const key = Buffer.from(crypto.randomBytes(32));
const iv = crypto.randomBytes(16);
const aes = crypto.createCipheriv("aes-256-cbc", key, iv);

stdin
  .pipe(aes)
  .on("end", (chunk) => console.info("info", chunk))
  .pipe(stdout);

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
  // console.log(headers);
  const rawData = [];
  let data;

  fs.open("./sample.txt", "r", (err, fd) => {
    if (!err) {
      fs.read(fd, Buffer.from("arandomlongstring"), 0, "arandomlongstring".length, 0, (err, read, str) => {
        if (!err) {
          console.log('read data')
          console.log(read, str.toString());
          fs.close(fd, (err) => console.error(err));
        }
      });
    }
    console.log("After file opened", err);
  });

  // request.on("data", (chunk) => {
  //   rawData.push(chunk);
  // });

  // request.on("end", () => {
  //   data = Buffer.concat(rawData);
  //   console.log(data.toString());
  // })
  request.pipe(stdout);
  return request.pipe(response);

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
          response.end(JSON.stringify({ id: 1, name: "John Doe" }));
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
      e1.emit("hello");
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
