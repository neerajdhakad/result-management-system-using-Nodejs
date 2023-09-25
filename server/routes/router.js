const express = require('express');
const route = express.Router()

const services = require('../services/render')
const studentController = require('../controller/studentController')
const teacherController = require('../controller/teacherController')

// Root route
route.get('/', services.homeRoutes);
route.get('/teacherLogin',services.teacherLogin)
route.get('/add-student', services.add_student);
route.get('/update-student', services.update_student);

//Student routes
route.get('/login',services.studentLogin);
route.post('/login',studentController.studentLogin);

// Teacher login route
route.post('/teacherLogin', teacherController.teacherLogin);

// API
route.get('/api/students', teacherController.find); 
route.post('/api/students', teacherController.create);
route.put('/api/students/:id', teacherController.update);
route.delete('/api/students/:id', teacherController.delete);

// View all students route using async await
route.get('/viewAllStudents', teacherController.viewall);

module.exports = route;