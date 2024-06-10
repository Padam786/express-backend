const fs = require("fs");

const os = require("os");

const file = "hello.txt";
const data = " hey i am data";

// for reading files
fs.readFile(file, { encoding: "utf-8" }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});


//for deleting file
fs.unlink(file, (err)=> {
    if(err) console.log(err)
    else console.log("file deleted")
})

//for copying file
fs.copyFile('padam.txt', 'thapa.txt',(err)=>{
    if(err) console.log(err)
    else console.log("file copied")
})

//for appending new file 
fs.appendFile('padam.txt', 'hey i am new',(err) => {
    if(err) console.log(err)
    else console.log("file appended")
})

//for updating file

fs.readFile('padam.txt', 'utf-8',  (err, data)=>{
    if(err) console.log(err)

    const newData = "new data"

    const replacedata = data.replace(data,newData);

    fs.writeFile('padam.txt', replacedata, (err)=>{
        if(err) console.log(err)
        else console.log("file updated")
    })
})


fs.
