// Pure functions are functions that returns directly a valye from its calls
// Higher order function
console.log("### HIGHER ORDER FUNCTION:");
const calc = (f, x, y) => f(x, y);

const _sum = (x, y) => x + y;
const mul = (x, y) => x * y;

console.log(calc(_sum, 1, 2));
console.log(calc(mul, 1, 2));

//Map
console.log("### MAP:");
const stu = [
  { name: "day", grade: 9 },
  { name: "will", grade: 9 },
  { name: "gab", grade: 9 },
];

const tea = [
  { name: "p1", grade: 10 },
  { name: "p2", grade: 10 },
  { name: "p3", grade: 10 },
];

const stuNames = stu.map((obj) => obj.name);
const teaNames = tea.map((obj) => obj.name);

console.log(stuNames, teaNames);

//Filter
console.log("### FILTER:");
const _3Len = stu.filter((obj) => obj.name.length == 3);

console.log(_3Len);

//Reduce
console.log("### REDUCE:");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.reduce((x, y) => x + y, 0);

console.log(sum);

//Reduce string
console.log("### RECUDE STRING:");
const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

const allInOne = months.reduce((pre, cur) => {
  return pre == "" ? cur : pre + "/" + cur;
}, "");

console.log(allInOne);

//Currying
console.log("### CURRYING:");
const greeting = (greet) => (_for) => greet + " " + _for;

const hello = greeting("Helloo");

console.log(hello("woorld!"));

//Compose
console.log("### COMPOSE:");
const compose = (f, g) => (x) => f(g(x));

const toUpper = (x) => x.toUpperCase();
const addExclaim = (x) => x + "!";

const angry = compose(toUpper, addExclaim);

console.log(angry("aaaa"));

//CALL, APPLY, BIND
console.log("### CALL, APPLY, BIND:");
console.log(this);
var User = {
  name: "will",
  last: "steinagel",
  sayName: function () {
    return `Meu nome é ${this.name}`;
  },
};

console.log(User.sayName());

////No scope function
console.log("### NO SCOPE FUNCTION:");
function sayEntireName(x, y) {
  return `Meu nome é ${this.name} ${this.last}, e o x vale ${x} e o y vale ${y}`;
}

////Wrong call
console.log("### WRONG CALL:");
console.log(sayEntireName(3, 12));

////Right call
console.log("### RIGHT CALLS:");
//CALL
console.log("### CALL():");
console.log(sayEntireName.call(User, 3, 12));
//APPLY
console.log("### APPLY():");
console.log(sayEntireName.apply(User, [3, 12]));
//BIND
console.log("### BIND():");
let f = sayEntireName.bind(User, 3, 12);
console.log(f());

//arrow function vs function declaration test
console.log("### ARRAY FUNC vs FUNC DECLARATION (TEST ONLY):");
this.name = "will_glob";

const ob1 = {
  name: "will_obj",
  getName: () => {
    return this.name;
  },
};

const ob2 = {
  name: "will_obj",
  getName: function () {
    return this.name;
  },
};

console.log(ob1.getName(), ob2.getName());

//Promises
console.log("### PROMISES:");
const api = (user, passw) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "will" && passw === 123456) {
        resolve(`Usuario ${user} logado!`);
      } else {
        reject("Email ou senha invalidos");
      }
    }, 5000);
  });
};

// let response = api("will", 123456).then(()=>{}).catch(()=>{});
console.log(
  "### -> let response = api('will', 123456).then(()=>{}).catch(()=>{});"
);
let response = api("will", 123456)
  .then((value) => {
    return value;
  })
  .catch((error) => {
    return `Digite novamente. Erro: ${error}`;
  });

//Console test
console.log("### PROMISES CONSOLE TEST");
console.log("Inicio da Promise");
api("will", 123456)
  .then((value) => {
    console.log("### PROMISE RESULT: ");
    console.log(value);
    return value;
  })
  .catch((error) => {
    console.log("### PROMISE RESULT: ");
    console.log(error);
    return `Digite novamente. Erro: ${error}`;
  });
console.log("Fim da Promise");

//POO
console.log("### POO:");
class Person {
  constructor(name, age, job) {
    this._name = name;
    this._age = age;
    this._job = job;
  }

  get Name() {
    return this._name;
  }

  set Name(name) {
    this._name = name;
  }

  sayHello() {
    console.log(
      `Hello, I am ${this._name} with ${this._age} and I am a ${this._job}`
    );
  }
}

const person = new Person("will", 22, "developer");

person.sayHello();
console.log(person.Name);
person.Name = "Will";
console.log(person.Name);

console.log("### Extends");
class User_Person extends Person {
  constructor(name, age, job, music) {
    super(name, age, job);
    this._music = music;
  }
  sayHello() {
    console.log(
      `Hello, I am ${this._name} with ${this._age}. I am a ${this._job} and I like to hear ${this._music}`
    );
  }
}

const user_person = new User_Person("user_will", 22, "developer", "classic");

user_person.sayHello();
