const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  // Remove header line
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const cols = student.split(',');
    const firstname = cols[0];
    const field = cols[3];
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  }

  for (const field of Object.keys(fields).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
    );
  }
}

module.exports = countStudents;
