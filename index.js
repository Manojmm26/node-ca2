//Home for Student data collector
let inputData = require('./gettingData');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var loop = true;
console.log("Student Data Colllector (STD) ");
console.log("1. Enter Data      2. Get Data     3. Modify Data      4. Delete Data");

rl.on('line',(line)=>{
    line = parseInt(line);
    switch(line){
        case 1 :{
            rst =  inputData.getData();
            break;
        }
        case 2 :{
            console.log("reading data");
            break;
        }
        case 3 :{
            console.log("Modifying data");
            break;
        }
        case 4 :{
            console.log("exiting now");
            loop=false;
            break;
        }
        default:{
            console.log("I guess you've entered something Wrong, Try again!");
            break;
        }
    }
    if(!loop){rl.close();}
});
