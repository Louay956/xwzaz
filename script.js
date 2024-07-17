/*console.log(" ddoi  zdoi dça    idadç_nçdnuaç d9959489");
console.log(15254849);*/
const classname = "hi!";
console.log(classname);
var name55 = "Lucy";
console.log(`Yo`+" "+name55+"!");    

//data type
console.log(1000 > 5000);
let x = null;
console.log(x);
const xyzaz = ["younes", "slim", "louay", "wassim", "saba", "ahmed"];
console.log(xyzaz[6]);
console.log(xyzaz[2]);
const person = {
  name: "Slim",
  lastName: "Belhassen",
  age: 16,
  present: true,
  superskills: ["intro", "html", "css", "js"],
};
const classXYZ = [
  {
    name: "Slim",
    lastName: "Belhassen",
    age: 16,
    present: true,
    superskills: ["intro", "html", "css", "js"],
  },
  {
    name: "younes",
    lastName: "el hakim",
    age: 18,
    present: true,
    superskills: ["intro", "html", "css"],
  },
  {
    name: "louay",
    lastName: "khammassi",
    age: 17,
    present: true,
    superskills: ["intro", "html", "css"],
  },
  {
    name: "wassim",
    lastName: "ben aissa",
    age: 17,
    present: true,
    superskills: ["intro", "html", "css"],
  },
  {
    name: "saba",
    lastName: "ben aissa",
    age: 9,
    present: true,
    superskills: ["intro", "html", "css", "js"],
  },
  {
    name: "ahmed",
    lastName: "ennaifer",
    age: 20,
    present: true,
    superskills: ["intro", "html", "css", "js"],
  },
];
console.log(person.present);
console.log(person.superskills);
console.log(person.superskills[1]);
console.log(classXYZ[0].name);
console.log(classXYZ[1].name);
console.log(classXYZ[2].name);
console.log(classXYZ[3].name);
console.log("array lenght" + classXYZ.length);
for (let i = 0; i < classXYZ.length; i++) {
  console.log(classXYZ[i].lastName, i);
}
for (let hi of classXYZ) {
  console.log(hi);
}
xyzaz.forEach(function (blabla, loulou) {
  console.log(blabla, loulou);
});
function sum(num1, num2) {
    return num1 + num2;
  }
  console.log(sum(5, 8) / 2);
  function isAdult(age, firstName) {
    if (age > 18) {
      console.log(firstName + " is adult !");
    } else if (age == 18) {
      console.log(firstName + " is barely adult !");
    } else {
      console.log(firstName + " is minor !");
    }
  }
  for (let el of classXYZ) {
    isAdult(el.age, el.name);
  }
  isAdult(50, "loulou");
  const name = prompt("enter name");
  const age = prompt("enter age");
  console.log(isAdult(age, name));
  var name55 = "Lucy";
  console.log(`Yo, ${name55}!`);    









