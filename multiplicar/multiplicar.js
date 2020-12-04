const fs = require('fs');

let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        const multiplicacion = base * i;
        data += `${base}* ${i} = ${multiplicacion} \n`;
    }

    console.log(data);
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`'${base}' No es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            const multiplicacion = base * i;
            data += `${base}* ${i} = ${multiplicacion} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject();
            } else {
                resolve(`tabla-${base}.txt`);
            }

            console.log('El archivo ha sido creado!');

        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}