const bcrypt = require('bcrypt');
const { response } = require('express');
const isEmpty = require('lodash.isempty');

const con = require('../db')

exports.signin = async (req, res) => {
    let usn = req.body.usn;
    let password = req.body.password;

    // if(isEmpty(req.body)){
    //     return res.status(500).json({message:"uemty request"});
    // }



    try{
    var sql = `select password from studentInfo where usn="${usn}"`
    const [rows,fields]=await con.query(sql);

    if(rows.length==0){
        return res.status(500).json({errors:[{message:"Wrong USN"}]})
    }

    const validP=await bcrypt.compare(password,rows[0].password);

    if(!validP){
        return res.status(500).json({errors:[{message:"Wrong Password"}]})

    }
    return res.json({user:usn});

    

    }
    catch(err){
        console.log(err);
    }
   

}

// console.log(usn, password)