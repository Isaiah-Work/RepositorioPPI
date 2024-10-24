var tabla = "<tr><th>Nombre</th><th>Email</th><th>¿Qué Prefiere?</th><th>Colores (N/A,V,A,R)</th><th>Color Favorito</th><th>Fecha de Nacimiento</th><th>Pila Social Actual</th></tr>";

function enviardatos() {
    if (document.getElementById("nombre").value == "") {
        alert("Nombre Vacio. Debes llenar todos los campos.");
    } 
    if (document.getElementById("email").value == "") {
        alert("Email Vacio. Debes llenar todos los campos.");
    } if (!document.querySelector('input[name="unaop"]:checked')) {
        alert("¿Qué Prefiere? Vacio. Debes llenar todos los campos.");
    } if (document.getElementById("fechanac").value == "") {
        alert("Fecha de Nacimiento Vacio. Debes llenar todos los campos.");
    } else {
        var dato;
        tabla += "<tr>";
        
        dato = document.getElementById("nombre").value;
        tabla += "<td>" + dato + "</td>";
        dato = document.getElementById("email").value;
        tabla += "<td>" + dato + "</td>";
        var preferencia = document.querySelector('input[name="unaop"]:checked').value;
        tabla += "<td>" + preferencia + "</td>";
        
        var colores = [];
        var seleccionados = document.querySelectorAll('input[name="color_gusto"]:checked');
        seleccionados.forEach(function(checkbox) {
            colores.push(checkbox.value);
        });
        tabla += "<td>" + (colores.length > 0 ? colores.join(", ") : "N/A") + "</td>";

        dato = document.getElementById("color").value;
        tabla += "<td>" + dato + "</td>";
        dato = document.getElementById("fechanac").value;
        tabla += "<td>" + dato + "</td>";
        dato = document.getElementById("pila").value;
        tabla += "<td>" + dato + "</td>";
        tabla += "</tr>";

        document.getElementById("tabla_res").innerHTML = tabla;
        document.getElementById("formulario").reset();
    }
}
