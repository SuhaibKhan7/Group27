const express = require('express')
const { main, StudentModel } = require('./db')
const app = express();

//middlware
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Welcome")
})
app.post('/student', async (req, res) => {
    const doc = req.body
    const student = new StudentModel(doc)
    await student.save()
    res.send("Data Saved")
})
app.get('/student', async (req, res) => {
    const query = req.query
    const students = await StudentModel.find(query)
    res.send(students)
})
app.get('/student/:id', async (req, res) => {
    let tp = 2
    const pageno = req.params.id;
    const students = await StudentModel.find().skip((pageno - 1) * tp).limit(tp)
    res.send(students)

})
app.patch('/student/:id', async (req, res) => {
    const id = req.params.id
    const payload = req.body
    const updatedstudent = await StudentModel.findByIdAndUpdate({ _id: id }, payload, { returnDocument: 'After' })
    res.send(updatedstudent)
})
app.listen(3500, async () => {
    await main();
    console.log('Server Connected')
})