function mensaje(){
        var B = document.getElementById("demo").value;
        var Y = document.getElementById("numeros").value;
        var S = document.getElementById("telefono").value;
        var Z = document.getElementById("correo").value;
        var X = document.getElementById("mensaje").value;
    

  if(B.length && Y.length !=0 ){
    alert("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n" + " | " + B+ " | " + Y + " | " +  S + " | "+  Z + " | "+  X + " | ");
  }else{
    alert("Ingrese los valores");
  }
}
   
function fecha(){
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miercoles";
  weekday[4] = "Jueves";
  weekday[5] = "Viernes";
  weekday[6] = "Sábado";

  var n = weekday[d.getDay()];
  document.getElementById("Dat").style.background = "#005f5f";
  document.getElementById("Dat").style.padding = "0px 5px 0 5px";
  document.getElementById("Dat").innerHTML = n;
  
}