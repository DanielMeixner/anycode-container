const express = require('express')
const path = require('path')
const port = process.env.PORT || 8888
const app = express()
const spawn = require('child_process').spawnSync;

var cwd=process.cwd();
app.use(express.static(cwd))


app.get('*', function (request, response){
    var command =request.query.command; 
    var sproc=null;

    var splitcommand = decodeURIComponent(command).split(" ");
    console.log(command);
    console.log(splitcommand);
    if (splitcommand.length<1)
    {
       response.send("add a command to the url like ?command=ls");
       return;
    }
    if(splitcommand.length==1)
    {
       sproc= spawn(splitcommand[0]);    
    }
    else
    {
    
        var part1=splitcommand[0];
        console.log(part1);
        var part2 = splitcommand.slice(1);
        console.log(part2);
        sproc = spawn(part1,part2);
    }
    response.send(sproc.stdout);  
})

app.listen(port)
console.log("server started on port " + port)