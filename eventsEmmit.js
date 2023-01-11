const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("Your Name : Varun Sidam");
// });

// event.on("sayMyName", () => {
//   console.log("Your Name : Vijay Sidam");
// });

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
