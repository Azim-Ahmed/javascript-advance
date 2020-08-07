const  students = [
    {id: 21 , name: "omar sani"},
    {id: 11 , name: "manna"},
    {id: 31 , name: " sani"},
    {id: 71 , name: "omar"}
];

// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//      const name = element.name;
//   names.push(name)
// }
// console.log(names);


const studentNames = students.map(s => s.name);
const studentId = students.map( ids => ids.id);
 const bigger = students.filter(ids => ids.id > 50);


 const bigger1 = students.find(ids => ids.id > 30);
 console.log(bigger1);


console.log(studentId);
console.log(studentNames);