const fs = require('fs')
const archivo = "citas.json";
const { resolve } = require('path');


const inicializarAgenda = () => {
      fs.writeFileSync('citas.json', '[]');
      console.clear();
      console.log("Inicializando archivo Citas");
}

const registrarAgenda = (param) =>{
    let[nombre, edad, tipo, color, sintomas]=param;
    let agregarCita =  {nombre, 
                        edad, 
                        tipo, 
                        color, 
                        sintomas
                       };
try {
    console.clear();
    fs.access(archivo,fs.constants.W_OK,(existe)=>{
        if (existe){
         fs.writeFileSync(archivo, `[${JSON.stringify(agregarCita)}]`);
         console.log("Cita Veterinaria Agregada Correctamente");
       }else{
          let rutaJson = fs.readFileSync(archivo,"utf-8");
          let archivoJson = JSON.parse(rutaJson);
          archivoJson.push(agregarCita);
          rutaJson =JSON.stringify(archivoJson);
          fs.writeFileSync(archivo,rutaJson);
          console.log("Cita Veterinaria Agregada Correctamente");
       }
     });   
} catch (error) {
    console.log(error);
}
 
}

const visualizarAgenda = () =>{
      const titulo = `      ***** Citas Agenda Veterinaria *****`
      console.clear();
      console.log(titulo) ;  
      try {
        let contenido = fs.readFileSync(archivo, 'utf-8');
        let archivoJson =   (JSON.parse(contenido));
        
        if (!archivoJson || !archivoJson.length){
            console.log(`\nNO HAY CITAS CONFIRMADAS`)
        }else{
            let cita = `" "-- "Nombre" -- "Edad" -- "Tipo" -- "Color" -- "Sintomas"`;
            console.log(cita);
            archivoJson.forEach((item,index) => {
                let cita = `${index+1} ) -- ${item.nombre} -- ${item.edad} -- ${item.tipo} -- ${item.color} -- ${item.sintomas}`;
                 console.log(cita);
                });
        }
      } catch (error) {
        
      } 


}


module.exports = {registrarAgenda,visualizarAgenda,inicializarAgenda};