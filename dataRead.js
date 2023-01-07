var fs=require('fs');


fs.readFile("text.txt","utf-8",(err,data) =>{
console.log(data)
});

fs.writeFile('text.txt', data, function(error){
    if(error){
        console.log(error)
    }
    console.log('success, file is written')
})