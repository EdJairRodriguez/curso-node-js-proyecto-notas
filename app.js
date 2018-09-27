console.log('Aplicación de notas arrancada.')
const notes = require('./notes')

const {argv}=require{'yargs'}
console.log(argv)

cons command=argv._[0]

if (command === 'add') {
  console.log(`Añadiendo nueva nota con titulo ${argv.title}`)
} else if (command === 'list') {
  console.log('Listado de todas las notas')
} else if (command === 'read') {
  console.log('Leyendo notas')
} else if (command === 'remove') {
  console.log('Borrando nota')
} else {
  console.log('Comando desconocido')
}
