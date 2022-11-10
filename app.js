"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill);
}
const result = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ');
console.log(result);
