const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// let base = 7;

//Para tomar parametros desde consola
// let argv2 = process.argv;
// console.log("Argv1 ", argv.base, ' Limite', argv.limite);

let comandoUtilizar = argv._[0];

switch (comandoUtilizar) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.b, argv.l);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.b, argv.l)
            .then(archivo => { console.log(`El archivo ha sido creado ${archivo}`) })
            .catch(err => { console.log(err) });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}