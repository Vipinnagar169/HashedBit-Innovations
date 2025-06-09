// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

const students = {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  };
  
  // Function to calculate average marks per student
  function calculateAverages(studentsObj) {
    const result = {};
  
    // Loop through each student
    for (const student in studentsObj) {
      const marks = Object.values(studentsObj[student]);  // get array of marks
      const total = marks.reduce((acc, curr) => acc + curr, 0); // sum marks
      const average = total / marks.length;  // calculate average
      result[student] = { average: average };
    }
  
    return result;
  }
  
  const averages = calculateAverages(students);
  console.log(averages);
  