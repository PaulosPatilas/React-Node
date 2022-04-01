const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})

var http = require('http');
const mysql = require('mysql');
const express = require('express');
const app = express();
var data = {
            "id":"1",
            "desc":"Just a comment."
         }
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'reactnode',
    port: '3307'
});

// http.createServer(function (req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World');

// }).listen(8080);

connection.connect((err) =>{
    if (err) throw err;
    console.log('Connected to MySql Server!!');
});

// app.listen(3000, ()=> {
//     console.log('Server is running at port 3000');
// });

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user:'root',
    password:'123456',
    database:'reactnode',
    port: '3307',
    debug    :  false
});

function addRow(data){
    console.log('Processing...');
    let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
    let query = mysql.format(insertQuery,["first_table","ID","DESCRIPTION",data.id,data.desc])
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    }); 
}

function queryRow(Id) {
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["first_table","ID", Id]);
    // query = SELECT * FROM `first_table` where `ID` = '1'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}

// setTimeout(() => {
//     addRow({
//         "id":"3",
//         "desc":"A final comment."
//     });    
// },1000);

setTimeout(() => {
    // call the function
    // select rows
    queryRow(1);
},5000);