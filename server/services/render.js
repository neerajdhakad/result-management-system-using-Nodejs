const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //Make a GET api request to /api/students
    axios.get('http://localhost:3000/api/students')
    .then(function(response){
        res.render('index',{students:response.data})
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.teacherLogin = (req,res)=>{
    res.render("teacherLogin");
}
exports.studentLogin = (req, res) => {
    res.render("login");
 };

exports.add_student = (req,res)=>{
    res.render('add_student')
}

exports.update_student = (req,res)=>{
    axios.get('http://localhost:3000/api/students',{params:{id:req.query.id}})
    .then(function(studentData){
        console.log(studentData.data);
        res.render("update_student",{student:studentData.data})
    })
    .catch(err=>{
        res.send(err);
    })
}
