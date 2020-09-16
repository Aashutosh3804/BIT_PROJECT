const signIn = require('./controllers/signIn')
const signUp = require('./controllers/signUp')
const timetable = require('./controllers/timetable')

const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
const bodyParser = require("body-parser");
const con = require('./db')

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'static')))

app.post('/getLogin', signIn.signin)

app.post("/getSignup", signUp.signup)

app.get("/homepage.html/:timetable", timetable.timetable)

app.get("/homepage.html/day/:day", timetable.dayTimeTable)


// app.use(bodyParser.urlencoded({
//     extended: true
// }));





app.listen(4000, () => {
    console.log("Server running at port 4000");
})




// app.get('/', (req, res) => {
//     res.send("Server is ready. Make a good website. :D")
// })



// app.get('/get_teacher_data', (req, res) => {

//     var con = mysql.createConnection({
//         host: "database-1.c6exrjimw94y.us-east-2.rds.amazonaws.com",
//         user: "projectx",
//         password: "projectx",
//         database: "Department",
//     })

//     con.connect((err) => {
//         if (err) throw err;
//         con.query("select* from teacher order by id", (err, result, fields) => {
//             if (err) throw (err);
//             console.log(result[0].shortname);
//             // res.send(result);
//         })
//     })
// })