const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const cols = student.split(',');
        const firstname = cols[0];
        const field = cols[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          console.log(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
          );
        });

      resolve();
    });
  });
}

module.exports = countStudents;
