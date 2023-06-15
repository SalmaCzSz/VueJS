console.log('Hola')

const persona = {
    nombre: 'Salma',
    apellido: 'Cruz',
    edad: 24,
    direccion: {
        ciudad: 'Ecatepec',
        colonia: 'Granjas Valle de Gpe Secc B',
        cp: 55200
    }
}

const persona2 = { ...persona} ;
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)