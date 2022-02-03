 // Número de enlaces de la pagina

 const element = document.getElementsByTagName('a');
 
 // Dirección a la que enlaza el penúltimo enlace

 const mensaje = "El penultimo enlace apunta a:" +enlaces[enlaces.length-2].href;
 
 
 //Número de enlaces del tercer párrafo
    
 const parrafos = document.getElementsByTagName('p');
 enlaces = parrafos[2].getElementsByTagName('a');