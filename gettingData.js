const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});                                                                                                                                                                                                                      

exports.getData =()=>{
var data = {};
rl.question('Your Name : ', (answer) => {
data.name= answer;  
  rl.pause();
});
rl.resume();
rl.question('Your Age : ', (answer) => {
  data.age= answer;  
    rl.pause();
  });
  rl.resume();
rl.question('Your Branch : ', (answer) => {
  data.branch= answer;  
    rl.pause();
  });
  rl.resume();
  rl.question('Your Section : ', (answer) => {
    data.branch= answer;  
      rl.stop();
    });
return data;
}