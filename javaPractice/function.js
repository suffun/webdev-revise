function add(a, b) {
  return a + b;
}

function calculate(x, y, operation) {
  return operation(x, y);
}

console.log(calculate(5, 3, add));

function a() {
  console.log("A");
}

function b() {
  a();
  console.log("B");
}

b();
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5));


function greet(name, callback) {
  callback(name);
}

greet("Sufiyan", function(n) {
  console.log("Hello " + n);
});
