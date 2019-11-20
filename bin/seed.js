const Student = require ('../models/students.model')

require('../config/db.config');

const students = {
    fullname: "Jose Miguel Valiente Niño",
    username: "Jose",
    password: "1234",
    email: "prueba@prueba.com",
    tas: "cualquiera"

}

Student.create(students)
    .then(createStudents => {
        console.log(`BBDD Creada`)
    })
    .catch(error => console.error(error))