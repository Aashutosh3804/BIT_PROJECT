const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const con = require("../db");

exports.signup = async (req, response) => {
  // response.redirect("/abc.html");
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let usn = req.body.usn;
  let year = req.body.year;
  let section = req.body.section;
  let batch = req.body.batch;

  var sql = `select* from studentInfo where usn = '${usn}'`;
  try {
    const [user] = await con.query(sql);
    if (user.length > 0) {
      return response
        .status(500)
        .json({ errors: [{ message: "User Already Exists" }] });
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);
    sql = `insert into studentInfo values ("${name}", "${usn}", "${email}","${hashPassword}","${year}","${section}","${batch}") `;
    await con.query(sql);
    user = {
      //name:rows[0].name,
      usn: rows[0].usn,
      // email:rows[0].email,
      // password:rows[0].password,
      // year:rows[0].year,
      // section:rows[0].section,
      // batch:rows[0].batch,
    };
    jwt.sign(
      {
        user,
      },
      "secretkey",
      (err, token) => {
        res.json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err);
    response.status(500).send("Server err");
  }
};
