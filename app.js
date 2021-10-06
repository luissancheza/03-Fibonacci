//Serie de fibonacci

const serie = require('./serie');

let argv = process.argv;
// console.log(argv[2]);

let cantidad = argv[2];

serie.crearSerie(cantidad)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err))

