const [opcion,...parametros] = process.argv.slice(2);
const { setTimeout } = require('timers');
const {registrarAgenda,visualizarAgenda,inicializarAgenda} = require('./operaciones.js');

const Menu = ` Opciones Registro Veterinaria
1.-Para Ingreser una nuva mascota Utilice --node index.js registrar "Nombre" "Edad" "Animal" "Color" "Enfermedad"
2.-.Para ver Todos los ingresos --node index.js citas
3.-Para Inicializar el archivo Citas --node index.js inicializar
Escriba la opción deseada:`;

switch (opcion){
    case "inicializar" :
          inicializarAgenda(); 
          setTimeout(()=>{
            console.clear();
            console.log(Menu);
         },2000
    );
break; 
    case "registrar" :
           if (parametros.length !== 5){
               console.log("Debe ingresar los 5 datos obligatorios para registrar una cita");
               break;
           }

           registrarAgenda(parametros)
           setTimeout(()=>{
                            console.clear();     
                            console.log(Menu);
                          },3000
                     );
            break;
    case "citas" :
        visualizarAgenda();
        setTimeout(()=>{
                       console.clear();
                       console.log(Menu);
                      },4000)
        break;

    default :
       console.log("Ingrese una opción válida para procesar(registrar-citas)");    
       break;
}
