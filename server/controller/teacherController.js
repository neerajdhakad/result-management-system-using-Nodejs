var studentdb = require('../model/model')

//create and save new student
exports.create=(req,res)=>{
    
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"})
        return;
    }

    //new Student
    const student = new studentdb({
        rollNumber:req.body.rollNumber,
        name:req.body.name,
        dob:req.body.dob,
        score:req.body.score
    })

    //save student in the database
    student
    .save(student)
    .then(data=>{
        res.redirect('/add-student')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating a create operation"
        });
    });
}


//Get all Students API
exports.find = (req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;
        studentdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found Student with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving Student with id " + id})
            })

    }else{
        studentdb.find().sort({ rollNumber: 1 })
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving Student information" })
            })
    }
}

//update by id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    studentdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update Student with ${id}. Maybe Student not found!`})
            }else{
                res.send(data);
                // res.redirect('/index')
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update Student information"})
        }) 
}

//delete by id
exports.delete = (req,res)=>{

    const id = req.params.id;

    studentdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Student is deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });
}

//Teacher Login
exports.teacherLogin = (req, res) => {
    const { name, pass } = req.body;

    if (name === "admin" && pass === "admin") {
        res.redirect("/viewAllStudents");
    } else {
        res.render("teacherLogin", {
            error: "Please Enter Correct Username and Password"
        });
    }
};

//View All students using async await 
exports.viewall = async (req, res) => {
    const allStudents = await studentdb.find().sort({ rollNumber: 1 })
    res.render("viewAllStudents", {students : allStudents})
};