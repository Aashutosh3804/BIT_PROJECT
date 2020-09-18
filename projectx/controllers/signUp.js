const bcrypt = require('bcrypt')
const saltRounds = 10;

const con = require('../db')

exports.signup =async  (req, response) => {
    // response.redirect("/abc.html");
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let usn = req.body.usn
    let year = req.body.year
    let section = req.body.section
    let batch = req.body.batch

    var sql = `select* from studentInfo where usn = '${usn}'`
    try{
    const [user]=await con.query(sql);
    if(user.length>0){
        return response.status(500).json({errors:[{message:"User Already Exists"}]})

        return response.status(500).json({errors:[{message:"User Already Exists"}]})
    }
    const hashPassword=await bcrypt.hash(password,saltRounds);
     sql = `insert into studentInfo values ("${name}", "${usn}", "${email}","${hashPassword}","${year}","${section}","${batch}") `;
     await con.query(sql);
     return response.json({user:usn})





}
catch(err){
    console.log(err);
      response.status(500).send("Server err");
}




   
        

        



    

}
