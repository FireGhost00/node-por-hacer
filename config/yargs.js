const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }
}
const argv = require('yargs')

.command('crear', 'Crear un elemento por hacer', {
        descripcion

    })
    .command('borrar', 'borrar una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}