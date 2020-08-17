var age = 20;
var allowed = age >= 18 ? "yes" : "no";
console.log(allowed);

var name = "simon";
switch (name) {
    case "simon":
        console.log("sinmon");
        break;
    case "john":
        console.log("sinmon");
        break;
    default:
        console.log("happy");
}
var obj = new Object();
var obj2 = {};
obj = {
    name: "sinmon",
    age: 20,
    email: "tianqi@gmail.com",
    contact: "123456",
    Telegram: "qweq"
}
console.log(obj.contact);
obj.age = 33;
console.log(obj.age);

var a = new Array();
var b = ["dog", "cat", "tiger"];
a[0] = "dog";
a[1] = "cat";
a[5] = "tiger";
console.log(a);
console.log(a[2]);

for (var i = 0; i < b.length; i++) {
    console.log(b[i])
}
for (let i in a) {
    console.log(a[i]);
}
b.push("sheep");
for (let i in b) {
    console.log(b[i]);
}

console.log(b.reverse());
b.unshift("lisa");
console.log(b);
function add() {
    let sum = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5));

function aya(a) {
    return function (b) {
        return a + b;
    }
}
var x = aya(5);
var sum = x(6);
console.log(sum);