const myFunc: <T>(arg: T) => T[] = (arg) => [arg]
const result = myFunc<string>(`hello`) // result is type string[]

const test = myFunc(`hello`)
