// scope
// gloabl scope
//let a = 10;

function f() {
    let b = 9
    let a = 11;
    console.log(b);
    console.log("a insilde fun" + a);
}
f();
// console.log(a)

// default parameter
function hello(name = "Aung") {
    console.log("Hello " + name)
}
hello("Mg Mg")

// template literals
var userName = "Admin"
var age = 20

function greeting() {
    console.log(`Nice to see you ${userName} ${age}`)
    console.log(`Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy
     text ever since the 1500s, when an unknown printer 
     took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap
       into electronic typesetting, remaining essentially unchanged. 
       It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing`)
}
greeting()

// arrow function
const sum = (x, y) => console.log(x + y)
sum(10, 20)

//spread operater
let arr1 = [1, 2, 3, 4];
arr1.push(5)
console.log(arr1)
arr1 = [...arr1, 6, 7, "hello"]
console.log(arr1)

let arr2 = [10, 20, 30]
arr3 = [...arr1, ...arr2]
console.log(arr3)

// destructuring assignment
let fruits = ["apple", "orange", "banana"]
const apple = fruits[0]
const orange = fruits[1]
const banana = fruits[2]
const [newApple, newOrange, newBanana] = fruits;
console.log(newApple);

let person = {
        name: "Bob",
        age: 22,
        address: "Yangon",
        hobby: {
            hobby1: "reading",
            hobby2: "swimming"
        }
    }
    // const userName = person.name;
    // const { name: userName, age, address, hobby: { hobby1, hobby2 } } = person;
    // console.log(userName);

// rest operater
function numbers(a, b, ...rest) {
    console.log(a)
    console.log(b)
    console.log(rest)
}
numbers(10, 20, 30, 40, 50)

// set
let myNum = [1, 2, 3, 2, 3, 4, 4, 5]
let uniqueArr = new Set(myNum)
console.log([...uniqueArr])

//map
let students = ["aung", "aye", "bobo"];

function mapStudent() {
    students.map((student) => {
        console.log(`hello ${student}`)
    })
}
mapStudent()