const skills: string[] = ['Dev', 'DevOps', 'Testing']

for (const skill of skills) {
	console.log(skill);
}


const result = skills
	.filter((s: string) => s !== 'DevOps')
	.map(s => s + '! ')

console.log(result)
