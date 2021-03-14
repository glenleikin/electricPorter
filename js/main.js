function poner(num){
    const resultado = document.getElementById("piso").innerHTML + num
    if(resultado.length <= 2){
        if(parseFloat(resultado) <= 48){
            document.getElementById("piso").innerHTML = resultado;
        }else{        
            document.getElementById("panelDeTexto").innerHTML = "el piso " + resultado + " no existe";
        }
    }else{
         if(num <= 6){
            document.getElementById("dpto").innerHTML = num; 
         }else{
            document.getElementById("panelDeTexto").innerHTML = "el depto " + num + " no existe";
         }       
    }
}

function llamar(){

    piso = document.getElementById("piso").innerHTML;
    depto = document.getElementById("dpto").innerHTML;
    if ( parseFloat(piso) === 0 || parseFloat(depto) === 0) {
        document.getElementById("panelDeTexto").innerHTML = "Por favor, marque correctamente";
        borrar();
    }else if ( parseFloat(piso) <= 48 && parseFloat(piso) >= 1 && parseFloat(depto) <= 6 && parseFloat(depto) >= 1 ){
        document.getElementById("panelDeTexto").innerHTML = "Llamando al piso "+ piso + " del departamento " + depto;
    }else{
        document.getElementById("panelDeTexto").innerHTML = "Por favor, marque correctamente";
        borrar();
    }
    
}

function borrar(){
    document.getElementById("piso").innerHTML = ""
    document.getElementById("dpto").innerHTML = ""
    // document.getElementById("panelDeTexto").innerHTML = ""
    

}


