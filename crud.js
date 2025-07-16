const express = require('express')
const mysql = require('mysql')
const app = express()
app.set("view engine", "ejs")


//servername:localhost,
//username : root
//password: empty
//databasename : database


const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'

})

connection.connect((error) => {
    if (error) throw error
    console.log("connection successful");

})



app.get('/', (req, res) => {

    var qry = `SELECT * FROM personal`

    connection.query(qry,(error,data)=>{
        if (error) throw error
        res.render("data",{data})
    })

    res.redirect('/')
    
})



app.get("/crudData", (req, res) => {

    const data = req.query
    // console.log(data);

    const { name, password } = req.query
    var qry = `INSERT INTO personal (name,password) values ('${name}','${password}')`

    connection.query(qry, (error) => {
        if (error) throw error
        console.log("data enter successfully");

    })

    res.redirect("/")

})

app.listen(3000)