var dato;
var tabla = "";
var i = 0;
var arreglo = [];
var checked = [];

function agregar(){
    dato = document.getElementById("tarea").value;
    
    arreglo[i] = "<div class=\"inttarea\" id=\"inittarea_" + i + "\">" +
                    "<input type=\"checkbox\" name=\"listacheck\" id=\"checkbox_" + i + "\" value=\"checkbox_" + i + "\" onclick=\"tachar("+ i + ", '" + dato + "')\">" +
                    "<div class=\"tarea\" >" +dato + "</div>" +
                    "<div class=\"borrar\" onclick=\"eliminar(" + i + ")\">BORRAR</div>" +
                "</div>";
    console.log(arreglo[i]);

    actualizarTabla();

    i ++;   
}
function eliminar(index){
    console.log("Aquí en eliminar(), eliminando el índice: " + index)
    arreglo[index] = "";
    actualizarTabla();
        
}

function tachar(index, dato2){
    console.log(index);
    console.log(dato2);
    eliminar(index);
    arreglo[index] ="<div class=\"inttarea\" id=\"inittarea_" + index + "\">" +
                    "<input checked type=\"checkbox\" name=\"listacheck\" id=\"checkbox_" + index + "\" value=\"checkbox_" + index + "\" onclick=\"tachar("+index+")\">" +
                    "<div class=\"tarea\" > <del>" +dato2 + "</del></div>" +
                    "<div class=\"borrar\" onclick=\"eliminar(" + index + ")\">BORRAR</div>" +
                "</div>";
    actualizarTabla();
}

function actualizarTabla(){
    guardarEstadoCheckboxes();  

    tabla = "";

    

    for (var j = 0; j < arreglo.length; j++) {
        if (arreglo[j] !== "") {
            tabla += arreglo[j];
        }
    }

    document.getElementById("listatarea").innerHTML = tabla;

    reactivarEstadoCheckboxes();

}

function guardarEstadoCheckboxes(){
    checked = [];
    var seleccionados = document.querySelectorAll('input[name="listacheck"]:checked');
    seleccionados.forEach(function(checkbox){
        checked.push(checkbox.value);
        console.log(checked)
    });
}

function reactivarEstadoCheckboxes(){
    checked.forEach(function(valorCheckbox){
        var cajacheck = document.getElementById(valorCheckbox);
        if (cajacheck){
            cajacheck.checked = true;
        }   
    });
}

  




