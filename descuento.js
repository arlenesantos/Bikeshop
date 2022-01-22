const yargs = require('yargs');
const fs = require('fs');

var myJson = {
    cliente: [
        { "nombre": "Maria" },
        { "nombre": "Juan" }
    ]
};

const argv = yargs
    .command(
        'calcularDescuento',
        'Comando para calcular descuento',
        {
            nombre: {
                describe: 'Argumento para definir nombre del cliente',
                demand: true,
                alias: 'n',
            },
            monto: {
                describe: 'Argumento para definir monto',
                demand: true,
                alias: 'm',
            },
            descuento: {
                describe: 'Argumento para definir descuento',
                demand: true,
                alias: 'd',
            }
        },

        (args) => {

            args.monto = parseInt(args.monto);
            args.descuento = parseInt(args.descuento);
            console.log(args.nombre)
            clienteEncontrado = false;
            var mensaje = "";
            
            myJson.cliente.forEach((c) => {
                if (c.nombre == args.nombre) {
                    clienteEncontrado = true;
                    mensaje = `Cliente: ${args.nombre}, su compra es de ${args.monto} pesos, porcentage de descuento ${args.descuento}% da un total de $${args.monto * (1 - (args.descuento / 100))}. `
                       
                }                    
            });

            if(!clienteEncontrado){
                mensaje = `Don(a):${args.nombre}, actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras.`
            }  

            fs.writeFile(`mensaje.txt`, mensaje, 'utf8', () => { console.log(mensaje)});            
       }
    )

    .help().argv


//testes por linea de comando:
//node descuento.js calcularDescuento --n='Maria' --m=1000 --d=10
//node descuento.js calcularDescuento --n='Jose' --m=1000 --d=20
