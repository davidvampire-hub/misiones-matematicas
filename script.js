```javascript
let puntos = 0;
let progreso = 0;

function guardarNombre(){

    const nombre = document.getElementById("nombre").value;

    if(nombre === ""){
        alert("Escribe tu nombre");
        return;
    }

    localStorage.setItem("alumno", nombre);

    alert("Bienvenido " + nombre);
}

function actualizar(){

    document.getElementById("puntos").innerText = puntos;

    document.getElementById("progreso").style.width =
    progreso + "%";

    if(puntos >= 30){
        document.getElementById("nivel").innerText =
        "Maestro Matemático";
    }
    else if(puntos >= 20){
        document.getElementById("nivel").innerText =
        "Estratega";
    }
    else if(puntos >= 10){
        document.getElementById("nivel").innerText =
        "Explorador";
    }
    else{
        document.getElementById("nivel").innerText =
        "Aprendiz";
    }

}

function verificar1(){

    const respuesta =
    document.getElementById("respuesta1").value;

    if(respuesta == "3"){

        document.getElementById("mensaje1").innerHTML =
        "✅ Correcto +10 puntos";

        puntos += 10;
        progreso += 33;

    }
    else{

        document.getElementById("mensaje1").innerHTML =
        "❌ Intenta otra vez";

    }

    actualizar();
}

function verificar2(){

    const respuesta =
    document.getElementById("respuesta2").value;

    if(respuesta == "12"){

        document.getElementById("mensaje2").innerHTML =
        "✅ Correcto +10 puntos";

        puntos += 10;
        progreso += 33;

    }
    else{

        document.getElementById("mensaje2").innerHTML =
        "❌ Intenta otra vez";

    }

    actualizar();
}

function verificar3(){

    const respuesta =
    document.getElementById("respuesta3").value;

    if(
        respuesta == "3/4"
        ||
        respuesta == "0.75"
    ){

        document.getElementById("mensaje3").innerHTML =
        "✅ Correcto +10 puntos";

        puntos += 10;
        progreso += 34;

    }
    else{

        document.getElementById("mensaje3").innerHTML =
        "❌ Intenta otra vez";

    }

    actualizar();
}
```
