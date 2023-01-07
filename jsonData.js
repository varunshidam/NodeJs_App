const { json } = require("node:stream/consumers");
const fs = require("fs");
const object = {
  id: 1,
  name: "varun",
  age: 26,
};

const jasonObject = JSON.stringify(object);
const jasonObject1 = JSON.parse(jasonObject);
// console.log(jasonObject1);

fs.readFile("json1.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error");
  } else {
    const jdata = JSON.parse(data)
    console.log(jdata);
  }
});
