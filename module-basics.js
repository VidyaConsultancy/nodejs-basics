const fun = (function (module, exports, require, __dirname, __filename) {
  const logger = require("./utils/logger/logger");
  const greeter = require("./utils/logger/greeter");
  console.log(logger("Hello world")); // use of default export
  console.log(greeter.greeter()); // use of named export

  // every js file in nodejs env is a module that uses either require function or module.exports or both
  // the require function returns the value of module.exports of the file provide in as parameter.

  // const lodash = require("lodash");
  const _ = require("lodash");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunks = _.chunk(numbers, 2);
  const chunks2 = _.chunk(numbers, 4);
  console.log(chunks);
  console.log(chunks2);
  console.log(_.flatten(chunks2));
  console.log(new Date().toISOString());
  return module.exports
})(module, exports, require, __dirname, __filename);