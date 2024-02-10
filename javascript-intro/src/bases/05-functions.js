// forma tradicional
function saludar(xyz){
    return `Hola ${xyz}`
}

// forma más segura
/* const saludo = function (xyz){
    return `Hola ${xyz}`
} */

// funciones de flecha
const saludo = (xyz) => {
    return `Hola ${xyz}`
}

// const saludo = xyz => `Hola ${xyz}`

const nombre = 'Salma'

console.log(saludar(nombre))
console.log(saludo(nombre))

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Salma01'
    }
}

// const getUser = () => ({ uid: 'ABC123', username: 'Salma01'})

console.log(getUser())

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },{
        id: 2,
        name: 'Superman'
    }
]

//const existeHeroe = heroes.some( (heroe) => heroe.id === 1)
const existeHeroe = heroes.find( (heroe) => heroe.id === 1)

console.log(existeHeroe)

const {name} = heroes.find( (heroe) => heroe.id === 1 )
console.log(name)