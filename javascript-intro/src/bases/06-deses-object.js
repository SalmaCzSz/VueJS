const persona = {
    name: 'Salma',
    edad: 23,
    codeName: 'CUSS',
}

const {name, edad, codeName, power = 'NA'} = persona

console.log(name)
console.log(edad)
console.log(codeName)
console.log(power)

const createHero = (persona) => {
    return{
        id: 123456,
        name: persona.name,
        edad: persona.edad,
        codeName: persona.codeName,
        power: persona.power
    }
}

console.log(createHero(persona))

// forma 1
/*const creaHeroe = (persona) => {
    const {name, edad, codeName, power = 'NA'} = persona

    return{
        id: 123456,
        name,
        edad,
        codeName,
        power
    }
}*/

// forma 2
/* const creaHeroe = ({name, edad, codeName, power = 'NA'} ) => {
    return{
        id: 123456,
        name,
        edad,
        codeName,
        power
    }
} */

// forma 3 (función flecha)
const creaHeroe = ({name, edad, codeName, power = 'NA'} ) => ({id: 123456, name, edad, codeName, power})

console.log(creaHeroe(persona))