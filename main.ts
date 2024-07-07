// EXAMPLE NO 01 //
import sLogin from "./student.js";
import tLogin from "./teacher.js";
let teacher = new tLogin();
console.log(teacher.data);
let student = new sLogin();
console.log(student.data);



// EXAMPLE NO 02 //
import {add,subtract} from './module.js'
let result1=add(5,8);
let result2=subtract(5,3);
console.log("ADDITION:", result1);
console.log("SUBTRACTION:", result2);

// EXAMPLE NO 03 //
import { multiply,divide} from "./module.js";
let result3=multiply(10,3);
let result4=divide(81,9);
console.log("MULTIPLY:", result3);
console.log("DIVISION:", result4);
