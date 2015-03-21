var Greeting = {};

Greeting.sayHello = function (name)
{
    return "Hello " + name + "!";
}

Greeting.sayGoodbye = function (name)
{
    return "Goodbye " + name + "!";
}

module.exports = Greeting;