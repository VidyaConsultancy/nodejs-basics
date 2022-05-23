const greeter = (name = 'Guest') => console.log(`Hey! ${name}`);

module.exports.greet = greeter;