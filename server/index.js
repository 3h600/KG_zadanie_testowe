const express = require('express');  
const app = express();  
const fs = require("fs");  
const bodyParser = require('body-parser');  

app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");  
  next();  
});  

app.use(bodyParser.urlencoded({  
  extended: true  
}));  

app.use(bodyParser.json());  

app.get('/products', (req, res) => fs.readFile( __dirname + "/" + "products.json", 'utf8', (err, data) => res.end(data)));

app.listen(8081, () => {  
  console.log("API app listening at http://localhost:8081")  
});