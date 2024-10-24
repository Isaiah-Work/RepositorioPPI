x = document.getElementsByName("tranporte");
y = document.getElementById("resultado");
var cad = "";
var tranporte;
for(i=0; i < x.length; i++){
    if(x[i].checked){
        tranporte = x[i].value;
        console.log(transporte);
        cad = cad + transporte + "<br>";
    }
}