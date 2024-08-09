const express = require('express')
const StudentModel = require("../models/model.student");

const createStudent = async (req, res) => {
    const payload = req.body;
    console.log(payload)
    const data = new StudentModel(payload)
    await data.save();
    res.send('Data saved')
}
const getSingleStudent = async (req, res) => {

    res.send('list of single student')

}
const getAllStudents = async (req, res) => {
    res.send('List of all students')

}
const updateStudent = async (req, res) => {
    res.send('Data updated')

}
const deleteStudent = async (req, res) => {
    res.send('data Deleted')

}

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent
}