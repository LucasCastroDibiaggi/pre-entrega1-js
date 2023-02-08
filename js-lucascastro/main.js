alert("Bienvenidos alumnos y alumnas!");


const usuarioAutorizado = "Profesor Lucas";
const contraseniaAutorizada = "1111";

let usuario = prompt("Ingrese nombre de usuario");
let contrasenia = prompt("Ingresar contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);
}else {
    alert("Los datos ingresados no son correctos ");
}

let alumnosPromedio =prompt("Ingrese la cantidad de alumnos a promediar");

for(let i = 0; i < alumnosPromedio; i++) {
    console.log(i)
    let nombreAlumno =prompt("Ingrese el nombre del alumno ");
    let nota1 = parseInt(prompt("Ingrese la primer nota"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota"));
    let promedio =calcularPromedio (nota1, nota2);
    alert("El promedio del alumno " + nombreAlumno + promedio); 
   

    let aprueba = apruebaAnio(promedio);


    if(aprueba) {
        alert("El alumno " + nombreAlumno + "aprobo la cursada ");
    }else {
        alert("El alumno " + nombreAlumno + "desaporobo la cursada ")
    }
    
}

function calcularPromedio(nota1,nota2){
    let promedio = (nota1 + nota2) / 2;
    return promedio;
}

function apruebaAnio(promedio) {

if(promedio >= 6) {
    return true;
} else {
    return false;
    }
}