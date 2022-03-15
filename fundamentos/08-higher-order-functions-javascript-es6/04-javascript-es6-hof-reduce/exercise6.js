const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Retorna em um objeto o nome do aluno e sua nota média
function studentAverage(students, grades) {
  // escreva seu código aqui
  return students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((acc, elem) => acc + elem, 0) / grades[index].length,
  }))

}
console.log(studentAverage(students, grades));
