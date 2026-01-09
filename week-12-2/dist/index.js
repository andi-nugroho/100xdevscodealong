"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Tara', age: 20 }, { name: 'Jira', age: 40 });
console.log(age);
function updateUser(update) {
    // hit DB and update user
    console.log(`Name :${update.name}`);
}
updateUser({ name: 'hari', age: 20, email: "hari@gmail.com" });
function updateUserOptional(update) {
    console.log(`Name :${update.name}`);
}
updateUserOptional({ name: 'killua' });
const config = {
    endponit: 'https://api.example.com',
    apikey: 'abcdefghi'
};
const users = {
    "ras@qd1": 21,
    "ras@qd2": 33,
};
const users2 = {
    "ras@qd1": { age: 21, name: "hima" },
    "ras@qd2": { age: 44, name: "dima" },
};
const user2age1 = users2["ras@qd1"].age;
const UserAge3 = new Map();
UserAge3.set("ras@qd1", { age: 21, name: "hima" });
UserAge3.set("ras@qd1", { age: 29, name: "rima" });
const user3 = UserAge3.get("ras@qd1");
console.log(user3);
const handleEvent = (event) => {
    console.log(event);
};
// handleEvent('click'); //Argument of type '"click"' is not assignable to parameter of type 'ExcludeEvent'.ts(2345)
handleEvent('scroll');
