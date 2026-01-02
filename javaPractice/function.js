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


let square = (n) => {
    return n*n;
}
let id = setInterval(()=> {
    console.log("HELLO SUFIYAN BRO");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

let arr = [{
    name : "sufiyan",
    marks: 100,
},
{
    name : "yan",
    marks: 00,
},
{
    name : "fiyan",
    marks: 90,
},
{
    name : "sufi",
    marks: 10,
},
];

arr.forEach((element) => {
    console.log(element.name);
});

let num = [1,2,3,4,5,6];

let dbl = num.map((ele)=>{
    return ele*2;
});