
 var persona={
    nombre:"Elmer Javier Castañeda Garcia",
    profesion:"Administracion Militar",
    nuevoCargo : "DevOps"
}
 function presentacionPersona(){
    return `Hola, me llamo ${nombreApellidos} y me dedico a la ${profesion}
    Estoy cursando este Master porque me gustaria trabajar en ${nuevoCargo}`;
}
module.exports={
    presentacionPersona
    }
//module.exports={
//    'objeto':persona
//}
//var nombreApellidos = "Elmer Javier Castañeda Garcia";
//var profesion = "Administracion Militar";
//var nuevoCargo = "DevOps"
//var cadenaTemplateLiterals = `Hola, me llamo `+nombreApellidos+` y me dedico a la ${profesion}
//Estoy cursando este Master porque me gustaria trabajar en ${nuevoCargo}`;
//console.log(cadenaTemplateLiterals)

