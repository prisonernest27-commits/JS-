// Level 1
function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}

// Level 2
function redundant(str) {
  return function() {
    return str;
  };
}

// Level 3
function getNotesDistribution(students) {
  return students
    .flatMap(student => student.notes || [])
    .filter(note => [1, 2, 3, 4, 5].includes(note))
    .reduce((acc, note) => {
      acc[note] = (acc[note] || 0) + 1;
      return acc;
    }, {});
}