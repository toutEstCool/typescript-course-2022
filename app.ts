// Type Aliases

type User = {
	name: string
	age: number
	skills: string[]
}
type Role = {
	id: number
}
// Intersection
type UserWithRole = User & Role
const user: UserWithRole = {
	name: 'Danil',
	age: 26,
	skills: ['1', '2'],
	id: 2,
}
