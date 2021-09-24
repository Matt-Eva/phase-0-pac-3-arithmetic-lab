function add(x,y) {
    return x + y;
}

console.log(add(2,3));

function subtract(x,y) {
    return x - y;
}

console.log(subtract(3,2));

function multiply(x,y) {
    return x * y;
}

console.log(multiply(4,7.67897));

function divide(x,y) {
    return x / y;
}

console.log(divide(1, 32405.50432));

function increment(n) {
    return n += 1;
}

console.log(increment(4));

function decrement(n) {
    return n -= 1;
}

console.log(decrement(89));

function makeInt(string) {
return parseInt(string, 10);
}

console.log(makeInt(`1.23243234234`));
console.log(makeInt(`Parp`));

function preserveDecimal(string) {
    return parseFloat(string);
}

console.log(preserveDecimal(`1.3243`));
console.log(preserveDecimal(`Help`));