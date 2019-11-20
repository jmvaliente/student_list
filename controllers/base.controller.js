const Students = require('../models/students.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to your CRUD project'
    });
};

module.exports.list = (req,res,next) => {
    Students.find()
    .then(student => {
        console.log(student)
        res.render('student/list',{student})
    })
    .catch(next)
}

module.exports.detail = (req,res,next) =>{
    Students.findById(req.params.id)
    .then(student => {
        console.log(student)
        res.render('student/detail', {student})
    })
    .catch(next)
}

module.exports.create = (req,res,next) => {
    res.render('student/create')

}

module.exports.doCreate = (req,res,next) =>{
    const student = new Students(req.body)
    
    student.save()
    .then((student)=>{
        res.redirect('/student/list')
    })
    .cacht(next)
}

module.exports.edit = (req,res,next) =>{
    Students.findById(req.params.id)
    .then((student) => {
        console.log(student)
        if(student){
            res.render('student/edit',{student})
        }else
        next()

    })
    .catch(next)
}

module.exports.doEdit = (req,res,next) =>{
    Students.findByIdAndUpdate(req.params.id, req.body, {runValidators:true, new:true})
    .then((student)=>{
        res.redirect('/student/list')
    })
    .catch(next)

}

module.exports.delete = (req,res,next) =>{
    Students.findByIdAndRemove(req.params.id)
    .then((student)=>{
        console.log(student)
        res.redirect('/student/list')
    })
    .catch(next)
}