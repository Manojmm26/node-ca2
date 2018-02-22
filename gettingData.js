const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});                                                                                                                                                                                                                      
var question = ['Your Name :','Your Age : ','Your Branch : ','Your Section : ']
var loop = true;
var i = 1;
exports.getData =()=>{
var data = {};
console.log("1. Name  2.Age   3.Branch    4.Section  5.exit");
rl.on('line',(line)=>{
  switch(i){
      case 1 :{
          data.name = line;
          break;
      }
      case 2 :{
        data.age =line;
      }
      case 3 :{
        data.branch =line;
      }
      case 4 :{
        data.section =line;
      }
      case 5 :{
          console.log("exiting now");
          loop=false;
          break;
      }
      default:{
          console.log("I guess you've entered something Wrong, Try again!");
          break;
      }
  }
  i++;
  if(!loop){rl.close();}
});
return data;
}