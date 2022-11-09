"use strict";
let revenue = 1000;
let bonus = 500;
let c = 'asc';
let d = true;
let res = revenue + bonus;
// Functions
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Данил',
    surname: 'Панарин',
    city: 'Bishkek',
    age: 26,
    skills: {
        dev: true,
        devops: true,
    },
};
console.log(getFullName(user));
