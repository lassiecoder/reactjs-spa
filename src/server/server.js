let express = require("express");
let mysql = require("mysql");
let bodyparser = require("body-parser");
let cors = require("cors");
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"reactjs"
});
app.post("/login",(req,res)=>{
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,(err,records,fields)=>{
        if(err) throw err;
        else{
            if(records.length>0){
                res.send({"login":"success"});
            }else{
                res.send({"login":"fail"});
            }
        }
    });
});
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");