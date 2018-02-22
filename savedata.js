exports.saveIT= (data)=>{
    const fs = require('fs');
const content = JSON.stringify(data);

fs.writeFile(`./student_${data.name}.json`, content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }else{
    console.log("Your data has been saved!");}
}); 
}