const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con el numero de la tabla de multiplicar por defecto\n de la base definida.', opts)
    .help()
    .argv;

module.exports = {
    argv
}