const x: number = 1 ;
console.log(x);

function greet(firstname: string){
    console.log("Hello " + firstname);
}

greet("Prince");

function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(60,9));

function islegal(age: number):boolean {
    return age>=18?true:false;
}
console.log(islegal(69));
console.log(islegal(10));

function delayedcall(fun:()=>void){
    setTimeout(fun,1000);
    // setTimeout(()=>{
    //     fun();
    // },1000)
}
delayedcall(()=>{
    console.log("Hello after 1 sec");
})
// interface
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // ? it makes it optional
}

function isUserLegal(user: User):boolean {
    return user.age>18?true:false;
}
function greetUser(user: User):void {
    console.log("Hello "+ user.firstName);
}
console.log(isUserLegal({
    firstName: "Prince",
    lastName: "yadav",
    age: 22
}))
greetUser({
    firstName: "Prince",
    lastName: "yadav",
    age: 22
})

// -----------------------------------------------//
// implementing interface
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string,a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
};

// -------------------------types------------------//
type User1 = {
	firstName: string;
	lastName: string;
	age: number
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

type Employee1 = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee1 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
//   -----------------array -----------------//
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
  