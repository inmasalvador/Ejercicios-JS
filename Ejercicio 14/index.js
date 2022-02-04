 // Número de enlaces de la pagina

 const enlaces = document.getElementsByTagName('a');
 enlaces.innerHTML = "Numero de enlaces = "+enlaces.length;
 
 // Dirección a la que enlaza el penúltimo enlace

 
 var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2];
 mensaje.innerHTML = mensaje.innerHTML + "<br/>" + mensaje;




 //Número de enlaces del tercer párrafo
    
 const parrafos = document.getElementsByTagName('p');
 enlaces = parrafos[2].getElementsByTagName('a');
 parrafos.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;