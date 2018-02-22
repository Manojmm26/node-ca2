var stdio = require('stdio');
var fs = require('./savedata.js')
var data ={};
function getData(){
    stdio.question('What is your name?', function (err, name){
        stdio.question('Are you male or female?', function (err, sex) {
            stdio.question("What's your Age?", function (err, age) {
                stdio.question("What's your section?", function (err,section) {
                    data.name=name;
                    data.sex = sex;
                    data.age =age;
                    data.section=section;
                    fs.saveIT(data);
                }); 
            }); 
        });
    });
}
    getData();