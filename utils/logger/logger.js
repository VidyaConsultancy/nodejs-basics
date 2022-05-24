const _ = require("lodash");
const e1 = require("../../eventEmitter");

const logMessage = (message, type = 'info') => {
    console.log(`${new Date().toISOString()} - [${type}] - ${message}`);
}

e1.on("hey", () => {
  console.log("hey");
});
e1.on("hello", () => {
  console.log("hello");
});
e1.on("hey", () => {
  console.log("hey hey");
});
e1.on("hello", () => {
  console.log("hey hello");
});

// module.exports = logMessage;
module.exports = (message, type = "info") => {
  console.log(`${new Date().toISOString()} - [${type}] - ${message}`);
}; // default export
// module.exports is equal to an empty object module.exports {}
// module.exports.log = logMessage;
// module.exports = { log: logMessage }