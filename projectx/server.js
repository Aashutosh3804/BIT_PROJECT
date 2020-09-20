const signIn = require('./controllers/signIn')
const signUp = require('./controllers/signUp')
const timetable = require('./controllers/timetable')
const teacher = require('./controllers/teacherInfo')
const db = require('./db')
const express = require('express')
const path = require('path')
const jwt = require('jsonwebtoken')
const tokenVerif = require('./controllers/tokenVerification')



const app = express();

app.use(express.json({
    extended: false
}));
(async () => {
    await db.query('select * from teacher');
    console.log("db connected")

})()

app.use(express.static(path.join(__dirname, 'static')))



app.post('/getLogin', signIn.signin)

app.post("/getSignup", signUp.signup)

app.get("/timetable", tokenVerif.verifyToken,  timetable.timetable)

app.get("/timetable/:day",tokenVerif.verifyToken,  timetable.dayTimeTable)

app.get("/teacherInfo",tokenVerif.verifyToken,  teacher.teacherInfo)

// app.post("/post", tokenVerif.verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 authData,
//                 message: "hello"
//             })
//         }
//     })
// })







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