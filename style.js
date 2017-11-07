//Funcion para contar los caracteres ingresados
function contar()
{ 
	var max = "140"; 
	var cadena = document.getElementById("comment").value; 
        var longitud = cadena.length; 
	//Cambia de color el contador de acuerdo a los caracteres ingresados
	if(longitud >=0 && longitud <=119)
	{
		contador.style.color = "#0808FA";
	}
	if(longitud >=120 && longitud <=129)
	{
		contador.style.color = "#00EAFF";
	}	
	if(longitud >=130 && longitud <=140)
	{
		contador.style.color = "#FF0000";
	}
	//Bloquea el boton si se ingresan mas de 140 caracteres y cambia color boton
	if(longitud >140)
	{
		document.getElementById('btn').disabled=true; //bloqueo el boton
		document.getElementById('btn').style.background='#F4EDED'; //cambio de color del boton
		document.getElementById("contador").value = (max - longitud); //contador negativo
	}
	else	
	{
		document.getElementById('btn').disabled=false; //desbloqueo el boton
		document.getElementById('btn').style.background='#20CDFF'; //cambio de color del boton 
	}
	if(longitud <= max)
	{ 
        	document.getElementById("contador").value = max-longitud;
             } 	else { 
                document.getElementById("textArea").value = cadena.substr(0, max);
             } 
}


//Funcion autoajustar TextArea
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
          
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


//Funcion agregar Tweet
function add(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;
	//var comments = document.getElementById('fecha').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';
	
	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');
	
	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null || comments == " ") 
	{
		alert('Debes ingresar un mensaje');
		return false;
	}	
	else
	{
		//obtenemos la hora
		var d = new Date();
		var fecha = d.toLocaleTimeString();
		
		//nodos de texto del textarea
		var textNewComment = document.createTextNode(comments);
		var linebreak = document.createElement('br');
		var textNewFecha = document.createTextNode(fecha);
		var contenedorElemento = document.createElement('cont');
		contenedorElemento.appendChild(textNewComment);
		contenedorElemento.appendChild(linebreak);
		contenedorElemento.appendChild(textNewFecha);
		newComments.appendChild(contenedorElemento);
		cont.appendChild(newComments);
	}
}

