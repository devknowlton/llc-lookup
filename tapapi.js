var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var name_array = ["ThinkSmart","SpendVu"];

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.get('/', function(request, response){
  var llcname = request.body.llcname;
  response.send("Welcome to the page");
})

app.get('/llc', function(request, response){
  var llcname = request.query.llcname.toLowerCase();
  var is_dupe = 0
  for (var i=0;i<name_array.length;i++){
    if (name_array[i].toLowerCase() == llcname){
      is_dupe = 1;
      break;
    }
  }
  if (is_dupe == 1){
    response.setHeader('Content-Type','application/json')
    response.send("{'result':'duplicate'}");
  } else{
  response.setHeader('Content-Type','application/json');
  response.send("{'result':'ok'}");
  }
})


app.listen(8000);
console.log("listening at port 8000...")
