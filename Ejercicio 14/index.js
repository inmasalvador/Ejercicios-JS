window.onload = function() {
     
    // Número de enlaces de la pagina

    var enlaces = document.getElementsByTagName('a');
    enlaces.innerHTML = "Numero de enlaces = "+enlaces.length;
    
    // Dirección a la que enlaza el penúltimo enlace

    
    var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
    mensaje.innerHTML = mensaje.innerHTML + "<br/>" + mensaje;




    //Número de enlaces del tercer párrafo
        
    var parrafos = document.getElementsByTagName('p');
    enlaces = parrafos[2].getElementsByTagName('a');
    parrafos.innerHTML = parrafos.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
}