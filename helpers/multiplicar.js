const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {


    try {

        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} `.cyan +  `x `.green + `${i}`.brightRed + ` = ${base * i}\n`.bold 
        }
        
        if (listar) {

            console.log('========================='.rainbow)
            console.log(`      Table del: ${base} `.blue )
            console.log('========================='.rainbow)
            console.log(consola)

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`.rainbow)

    } catch (err) {
        throw err;
    }
}

/*

const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (salida) {
            console.log('=========================')
            console.log('      Table del: ', base)
            console.log('=========================')

            fs.writeFileSync(`tabla-${base}.txt`, salida);
            console.log(salida)
            resolve(`tabla-${base}.txt`)
        } else {
            reject('No se pudo escribir el archivo')
        }
    })

}

}

*/



module.exports = {
    crearArchivo
}