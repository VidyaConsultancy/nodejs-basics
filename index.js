const logger = require("./utils/logger/logger");
const greeter = require("./utils/logger/greeter");
console.log(logger("Hello world")); // use of default export
console.log(greeter.greeter()) // use of named export

// every js file in nodejs env is a module that uses either require function or module.exports or both
// the require function returns the value of module.exports of the file provide in as parameter.
