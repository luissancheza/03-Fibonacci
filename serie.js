
let fs = require('fs');

let crearSerie = (cantidad)=>{
    return new Promise((resolve, reject)=>{
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        serie += `${fibo1}\t`;

        for(let i = 2; i <= cantidad; i++){
            serie += `${fibo2}\t`;
            fibo2 = fibo2 + fibo1; //2 3 5
            fibo1 = fibo2 - fibo1; //1 2 3
        }

        fs.writeFile('finonacci.txt', serie, (err) => {
            if (err){
                reject("Error al crear el archivo");
            }else{
                resolve("El archivo se creo correctamente");
            }
            
        });
    });

}

module.exports = {
    crearSerie
}

