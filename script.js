const campo_entrada=document.querySelector("#entrada_encriptada");
const campo_salida= document.querySelector("#salida-encriptada");
const btn_copiar=document.querySelector("#btnCopiar");
const encriptando=document.querySelector("#btnEncriptar");
let x=document.getElementById("oculta");

const matriz_code = [ 
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],];
    
    let resultado="";



    function btn_Encriptar() {  
	            
        let texto = verificar(campo_entrada.value);
        if(texto==="   ")
        
        {alert("No se permiten Mayúsculas, ni caracteres especiales");}
        else
        {let encriptado=encriptarTexto(texto);
         campo_salida.value=encriptado;} 
    }    


    function encriptarTexto(fraseEncriptada) {
        x.style.display="none";
        for(let i=0; i< matriz_code.length; i++){
                    if(fraseEncriptada.includes(matriz_code[i][0]))	{
                                    fraseEncriptada= fraseEncriptada.replaceAll(
                                    matriz_code[i][0],
                                    matriz_code[i][1]);
                    }
                        
        } 
        
         return fraseEncriptada;
    }

    function btnDesencriptar() {
        const texto2 = desencriptarTexto(campo_entrada.value);
        campo_salida.value=texto2;
        x.style.display="none";
    }
    
    
    function desencriptarTexto(fraseEncriptada2) {
        for(let i=0; i< matriz_code.length;i++){
                    if(fraseEncriptada2.includes(matriz_code[i][1]))	{
                                    fraseEncriptada2= fraseEncriptada2.replaceAll(
                                    matriz_code[i][1],
                                    matriz_code[i][0]);
                    }
                        
        }
        
        return fraseEncriptada2;
    }


    function copiarContenido() {
        const texto4 =campo_salida.value;
        navigator.clipboard.writeText(texto4)
        .then(() => {
          console.log('Contenido copiado al portapapeles');
        },() => {
          console.error('Error al copiar');
        });
        document.getElementById("btnDesencriptar").removeAttribute("disabled");
        limpiarCampo_entrada();
        paste();	  	  
    }


    function paste(seleccion){
        x.style.display="block";
        const destino = document.querySelector("#entrada-encriptada");
        destino.addEventListener("click", () => {
          navigator.clipboard.readText()
            .then(seleccion=>(campo_entrada.value=seleccion));
       });     
    }


    function verificar(mensaje){
		
				
		for(var i=0; i<=mensaje.length-1; i++) 
	{
				if((mensaje[i]==="a")||(mensaje[i]==="b")||(mensaje[i]==="c")||(mensaje[i]===" ")||(mensaje[i]==="d")||(mensaje[i]==="e")||(mensaje[i]==="f")||(mensaje[i]==="g")||(mensaje[i]==="h")||(mensaje[i]==="i")||(mensaje[i]==="j")||(mensaje[i]==="k")||(mensaje[i]==="l")||(mensaje[i]==="m")||(mensaje[i]==="n")||(mensaje[i]==="ñ")||(mensaje[i]==="o")||(mensaje[i]==="p")||(mensaje[i]==="q")||(mensaje[i]==="r")||(mensaje[i]==="s")||(mensaje[i]==="t")||(mensaje[i]==="u")||(mensaje[i]==="v")||(mensaje[i]==="w")||(mensaje[i]==="x")||(mensaje[i]==="y")||(mensaje[i]==="z"))
			
				{
				
				resultado=mensaje;
				 }
				else {
		
					resultado="   ";
					limpiarCampos();
					break;
				
			}

	} return resultado;
	  
	
}


	
function limpiarCampos() {
	x.style.display="block";
	document.getElementsByClassName("entrada")[0].value="";
	document.getElementsByClassName("salida")[0].value="";
	
}

function limpiarCampo_entrada() {
	document.getElementsByClassName("entrada")[0].value="";
}

function inicio(){
	limpiarCampos();
	Encriptar.addEventListener("click",() =>{x.style.display="none"});
		
	}


  inicio();
  /*x.style.display="none"; */






