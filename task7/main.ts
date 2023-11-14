import { CreateStudentCategory, Student, arrInObj } from "./1";

// 1
console.log(arrInObj([
    { name: 'Ujang', score: 70, class: 'melati'},
    { name: 'Asep', score: 80, class: 'mawar'},
    { name: 'Udin', score: 70, class: 'melati'}
]))

// 2
const student: Student[] = [
    {name: 'Joko', score: 76, class: 'A'},
    {name: 'Jono', score: 89, class: 'C'},
    {name: 'Joni', score: 70, class: 'D'},
    {name: 'Jongos', score: 98, class: 'A'}
]

console.log(CreateStudentCategory(student))