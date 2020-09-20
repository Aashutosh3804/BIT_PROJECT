const bcrypt = require("bcrypt");
const { response } = require("express");
const isEmpty = require("lodash.isempty");
const jwt = require("jsonwebtoken");

const con = require("../db");

exports.signin = async (req, res) => {
  let usn = req.body.usn;
  let password = req.body.password;

  // if(isEmpty(req.body)){
  //     return res.status(500).json({message:"uemty request"});
  // }

  try {
    var sql = `select* from studentInfo where usn="${usn}"`;
    const [rows, fields] = await con.query(sql);
    // console.log(rows)

    if (rows.length == 0) {
      return res.status(500).json({ errors: [{ message: "Wrong USN" }] });
    }

    const validP = await bcrypt.compare(password, rows[0].password);
    console.log(rows[0].name, rows[0].password);

    if (!validP) {
      return res.status(500).json({ errors: [{ message: "Wrong Password" }] });
    }

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

    // return res.json({user:usn});
  } catch (err) {
    console.log(err);
  }
};

// console.log(usn, password)
