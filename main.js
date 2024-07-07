"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// EXAMPLE NO 01 //
const student_js_1 = __importDefault(require("./student.js"));
const teacher_js_1 = __importDefault(require("./teacher.js"));
let teacher = new teacher_js_1.default();
console.log(teacher.data);
let student = new student_js_1.default();
console.log(student.data);
// EXAMPLE NO 02 //
const module_js_1 = require("./module.js");
let result1 = (0, module_js_1.add)(5, 8);
let result2 = (0, module_js_1.subtract)(5, 3);
console.log("ADDITION:", result1);
console.log("SUBTRACTION:", result2);
// EXAMPLE NO 03 //
const module_js_2 = require("./module.js");
let result3 = (0, module_js_2.multiply)(10, 3);
let result4 = (0, module_js_2.divide)(81, 9);
console.log("MULTIPLY:", result3);
console.log("DIVISION:", result4);
