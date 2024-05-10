const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const pool = require('./connection')

app.use(express.static('Public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/Main/index.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/Main/index.html'))
})
app.get('/technical', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/Technical/technical.html'))
})
app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/Feedback/feedback.html'))
})
app.get('/donation', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/Donation/donation.html'))
})
app.get('/awarness', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/Awarness/awarness.html'))
})

app.post("/", (req, res) => {
    const formdata = req.body;
    const sql = "INSERT INTO test SET ?"
    pool.query(sql, formdata, (err, result)=> {
        if (err) {
            console.log("An error occurred: ", err)
            return
        }
        console.log("Form data submitted successfully: ", result.insertId)
    })
    res.send("Form submitted")
    // pool.end((err) => {
    //     if (err) {
    //         console.log("An error occured: ", err)
    //         return 
    //     }
    //     console.log("Connection pool has ended")
    // })
    console.log(formdata)
})

app.post('/awarness', (req, res)=> {
    const awarnessForm = req.body
    console.log(awarnessForm )
    const sql = "INSERT INTO awarness SET ?"

    pool.query(sql, awarnessForm, (err, result) => {
        if (err) {
            console.log("An error occured: ", err)
            return
        }
        console.log("Form Submitted Successfully: ", result.insertId)
    })
    // pool.end((err)=> {
    //     if (err) {
    //         console.log("An error occured: ", err)
    //         return
    //     }
    //     console.log("Process Ended")
    // })
    // console.log(awarnessForm)
    res.send("Form submitted")
})

app.post('/donation', (req, res)=> {
    const donationForm = req.body

    const sql = "INSERT INTO dona22tion SET ?"

    pool.query(sql, donationForm, (err, result) => {
        if (err) {
            console.log("An error occured: ", err)
            return
        }
        console.log("Form Submitted Successfully: ", result.insertId)
    })
    // pool.end((err)=> {
    //     if (err) {
    //         console.log("An error occured: ", err)
    //         return
    //     }
    //     console.log("Process Ended")
    // })
    console.log(donationForm)
    res.send("Form submitted")
})

app.post("/feedback", (req, res) => {
    const feedback = req.body
    console.log(feedback)
    pool.query("INSERT INTO feedback SET ?", feedback, (err, result) => {
        if (err) {
            console.log("An error occurred: ", err)
        }
        console.log("Form Submitted ", result.insertId)
    })
    res.send("Form has been Submitted") 
})

app.post("/volunteer", (req, res)=> {
    const volunteer = req.body;
    console.log(volunteer)
    pool.query("INSERT INTO volunteer SET ?", volunteer, (err, result) => {
        if (err) {
            console.log("An error occurred: ", err)
        }
        console.log("Form Submitted: ", result.insertId)
    })
    res.send("Form has been Submitted")
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
})
