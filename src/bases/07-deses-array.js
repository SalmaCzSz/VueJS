const characters = ['Goku', 'Vegeta', 'Trunks']

// const [g, v, t] = characters
// console.log(g, v, t)

// const [, , t] = characters
// console.log(t)

const [g, v, t, goten = 'NA'] = characters
console.log(goten)

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['ABC', 123])
console.log(letters, numbers)