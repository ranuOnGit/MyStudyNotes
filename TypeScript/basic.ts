//primitives: number, string, boolean

let age: number;
age = 13;

let username: string;
username = 'Ranu';

let isDeveloper: boolean;
isDeveloper = true;


//complex types: arrays, objects

//array
let hobbies: string[] 
hobbies = ['Reading', 'Sleeping']

//object
let person: {
  name: string,
  age: number
}
person = {
  name: 'Ranu',
  age: 13
}

//array of objects
let user: {
  name: string,
  age: number
}[];


//type inference
let course = 'Learn TypeScript'
course = 101 //TS infered type string above, and hence, cannot give a number value here


//union type
let subject: string | number = 'TypeScript'
subject = 101


//type alias
type Info = {
  name: string,
  age: number
}

let info: Info

info = {
  name: 'Ranu',
  age: 13
}

let details: Info[]

//functions and types
function add(a: number, b: number) {
  return a+b
}

function printOutput(value: any) {
  console.log(value);  
}


//generics
function insertAtBeginning<T>(array: T[], value: T) {  //array and value have same type T
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1) //[-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd') //['d', 'a', 'b', 'c']