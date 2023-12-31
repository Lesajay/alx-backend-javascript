import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        // let count = 0;
        let msg;

        // for (const key of Object.keys(fields)) {
        //   count += fields[key].length;
        // }

        // students.push(`Number of students: ${count}`);
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;

          students.push(msg);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }
