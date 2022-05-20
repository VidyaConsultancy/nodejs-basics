const logMessage = (message, type = 'info') => {
    console.log(`${new Date().toISOString()} - [${type}] - ${message}`);
}

// module.exports = logMessage;
module.exports = (message, type = "info") => {
  console.log(`${new Date().toISOString()} - [${type}] - ${message}`);
}; // default export
// module.exports is equal to an empty object module.exports {}
// module.exports.log = logMessage;