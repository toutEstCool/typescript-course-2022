{ /* TYPELS, Readonly */ }
const skills: readonly [number, string] = [1, 'Dev']
const [id, skillName] = skills

{/* Спредим массив булиан */ }
const arr: [number, string, ...boolean[]] = [0, 'TypeScript', false]

const role: readonly string[] = ['Dev', 'Devops']
const role2: Array<string> = ['language', 'English']

