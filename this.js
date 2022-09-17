// let a = {
//     firstname: "ayushi",
//     lastname: "parmar",
//     full: function() {
//         console.log(this.lastname)
//     }
// }
// a.full()
function saySomething(message) {
    console.log(this.name + " is " + message);
}

var person4 = { name: "John" };

let say = saySomething.bind(person4, "awesome");
say()