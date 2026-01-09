interface User {
    name: string,
    age: number
}

function sumOfAge(user1:User, user2:User){
    return user1.age + user2.age;
}

const age = sumOfAge({name:'Tara',age:20},{name:'Jira',age:40});
console.log(age);

// pick -> allow you to create a subset like object,interface,type from main interface,obj
// eg -> MainUser is the main main interface

interface MainUser {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string // lets say we dnt need id and password in a functin arguemnet 
}

type UpdatedProps = Pick<MainUser, 'name' | 'age' | 'email'>

function updateUser(update : UpdatedProps){
    // hit DB and update user
    console.log(`Name :${update.name}`);
}
updateUser({name:'hari',age:20,email:"hari@gmail.com"});

// partial -> marks all of the keys as optional so you can pass just the required arguement or data

type UpdatedPropsOptional = Partial<UpdatedProps>;

function updateUserOptional(update:UpdatedPropsOptional){
    console.log(`Name :${update.name}`);
}
updateUserOptional({name:'killua'});

// ReadOnly -> enforce readonly on type,interface,obj each child

interface Config {
    readonly endponit: string; // you can either do radonly to each
    apikey: string;
}

const config : Readonly<Config> = { //or you can make whole created obj readonly using Readonly keyword
    endponit : 'https://api.example.com',
    apikey: 'abcdefghi'
};

// config.apikey = "hi";  // Cannot assign to 'apikey' because it is a read-only property.ts(2540)

// Record and Map -> 
// map like DS with key value pair in TS or js
type UserAge = {
    [key: string] :number;
}
const users : UserAge = {
    "ras@qd1" : 21,
    "ras@qd2" : 33,
}
// above syntax is ugly and become messy when object gets complicated 
// so Record(TS) and Map(js same like c++) are used

// Record -> gives cleaner types to object (Ts specefic)

type UserAge2 = Record<string,{age:number;name:string}>;
const users2 : UserAge2 = {
    "ras@qd1" : {age:21,name:"hima"},
    "ras@qd2" : {age:44,name:"dima"},
    }

const user2age1 = users2["ras@qd1"].age;
// Map -> Js concept just like c++ map (considered better to you and slightly cleaner)
type UserType3 = {
    age:number;
    name:string
}
const UserAge3 = new Map<string,UserType3>();
UserAge3.set("ras@qd1",{age:21,name:"hima"})
UserAge3.set("ras@qd1",{age:29,name:"rima"})

const user3 = UserAge3.get("ras@qd1");
console.log(user3);

// Exclude -> opposite of pick (lets you exclude bunch of literal from an object)

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType , 'click'>;

const handleEvent = (event:ExcludeEvent) =>{
    console.log(event);
}
// handleEvent('click'); //Argument of type '"click"' is not assignable to parameter of type 'ExcludeEvent'.ts(2345)
handleEvent('scroll');


