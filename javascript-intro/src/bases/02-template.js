console.log('Hola')

const nombre = 'Salma'
const apellido = 'Cruz'

// const nombreCompleto = nombre + ' ' +apellido
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

console.log(`Resultado: ${ 1 + 3 }`)

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)