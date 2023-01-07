const SuperHero = require("./SuperHero");

console.log("1)Get Name : ",SuperHero.getname());
SuperHero.setName("Spiderman")
console.log("2)Get Name : ",SuperHero.getname());


const newSuperHero = require("./SuperHero");
console.log("3)Get Name : ",newSuperHero.getname());

newSuperHero.setName("SuperMan");
console.log("4)Get Name : ",newSuperHero.getname());



