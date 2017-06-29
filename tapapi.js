var express = require('express');
var app = express();

var name_array = ["ThinkSmart","SpendVu"];


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
