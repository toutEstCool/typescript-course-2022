let revenue: number = 1000
let bonus: number = 500
let c: string = 'asc'
let d: boolean = true
let res: number = revenue + bonus

// Functions
function getFullName(userEntity: {
	firstname: string
	surname: string
}): string {
	return `${userEntity.firstname} ${userEntity.surname}`
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
}

console.log(getFullName(user))
