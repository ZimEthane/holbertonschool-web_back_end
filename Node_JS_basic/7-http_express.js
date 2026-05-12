const express = require('express');
const fs = require('fs');

const databaseFile = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      students.forEach((student) => {
        const cols = student.split(',');
        const firstname = cols[0];
        const field = cols[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

      resolve(output.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
