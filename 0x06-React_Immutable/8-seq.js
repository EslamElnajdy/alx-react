import { Seq } from 'immutable';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function printBestStudents(grades) {
  const seqGrades = Seq(grades);
  
  const bestStudents = seqGrades
      .filter(student => student.score >= 70)
      .map(student => ({
          score: student.score,
          firstName: capitalize(student.firstName),
          lastName: capitalize(student.lastName)
      }));

  console.log(bestStudents.toJS());
}
