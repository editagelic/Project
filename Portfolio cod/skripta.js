
function datum(){
 /*NULE KOD JEDNOZNAMENKASTIH VRIJEDNOSTI*/
var d = new Date();
var sekunda = d.getSeconds();
    sekunda = (sekunda<10)? "0"+sekunda : sekunda;
var minuta = d.getMinutes();
    minuta = (minuta<10)? "0"+minuta : minuta;
var sat = d.getHours();
    sat = (sat<10)? "0"+sat : sat;
    


document.getElementById("vrijeme").innerHTML = sat + ":" + minuta + ":" + sekunda;
}
setInterval(datum, 50);
