var fichero;
function alertDismissed() {
}
function ObtenerFoto1()
{
  navigator.camera.getPicture(correcto, fail, {quality: 100, allowEdit: false});
}
function makeid()
 {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ )
   text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
 }
 function lla()
 {
	 var llave = makeid();
	 $("#llave").val(llave);
 }
 function validarEmail(email) {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
        return (true)
    } else {
        return (false);
    }
}
    function showAlert() {
        navigator.notification.alert(
            'Realizado con exito!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
     function showAlerts() {
        navigator.notification.alert(
            'Bienvenido Usuario!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
    function showAlert1() {
        navigator.notification.alert(
            'Error durante la operacion!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
 function showAlertE() {
        navigator.notification.alert(
            'El usuario ya existe!',  // message
            alertDismissed,         // callback
            ' ',            // title
            'Aceptar'                  // buttonName
        );
    }
     function showAlert2() {
        navigator.notification.alert(
            'El correo no posee el formato correcto!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
 function showAlert3() {
        navigator.notification.alert(
            'Debe de llenar todos los campos!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
     function showAlertIn() {
        navigator.notification.alert(
            'No se pudo realizar el login a la aplicacion. Revise su conexion a internet!',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }
        function showAlertDatos() {
        navigator.notification.alert(
            'No existe informacion con el # de placa, favor ingresar los datos',  // message
            alertDismissed,         // callback
            'Coffee Cloud',            // title
            'Aceptar'                  // buttonName
        );
    }

function limpiar_registro()
{
	$('#nombre').val('');
	$('#pass').val('');
	$('#correo').val('');
	$('#actividad').val('');
	$('#telefono').val('');
	$('#canton').val('');
	$('#region').val('');
	$("#provincia").val('');
}

function registrar(){
	// toman los datos del html
	var nombrer = $('#nombre').val();
	var passr = $('#pass').val();
	var correor = $('#correo').val();
	var actividadr= $('#actividad').val();
	var telefonor= $('#telefono').val();
	var cantonr= $('#canton').val();
	var regionr= $('#region').val();
	var provinciar = $("#provincia").val();
	//validacion de datos vacios
	if(nombrer != "" && passr != "" && correor != "" && actividadr != "" && telefonor != "" && cantonr != "" && regionr != "" && provinciar != ""){	
		// valida si el correo es real. 
		 if(validarEmail(correor) ){
				// mensaje de carga
				//$.mobile.showPageLoadingMsg("a", "Realizando registro");
				//conecta a un archivo de registro
				archivoValidacion = "http://coffeecloud.arkux.com/php/registrer.php?jsoncallback=?";
				// se obtienen los datos
				$.getJSON( archivoValidacion, {nombre:nombrer, pass:passr, correo:correor, actividad:actividadr, telefono:telefonor, provincia: provinciar, canton:cantonr, region:regionr })
				//valida si retorna un valor correcto :D
						.done(function(respuestaServer) {	
						var datos=respuestaServer.mensaje;	
												
						  if(respuestaServer.mensaje == "1"){	
					//		$.mobile.loading( "hide" );
							//alert("1");
						//	showAlert();
							$.mobile.changePage( "#principal", { reverse: true } );
							limpiar_registro();
						  }
						  else if(respuestaServer.mensaje == "2"){
							//$.mobile.loading( "hide" );
							//showAlert1();	 
						  }	
						  else
						  {
						  	//$.mobile.loading("hide");
						  	//showAlertE();
						  }	  

						 })
				}else{
		//			$.mobile.loading( "hide" );
		//			showAlert2();
				} 
	}else{
		//$.mobile.loading( "hide" );
		//showAlert3();
	}
}


function login()
{
	// obtiene los datos de validacion para ingresar
	var correo_l = $("#correo_l").val();
	var pass_l = $("#pass_l").val();
	
	if(correo_l != "" && pass_l != ""){
		// valida si el correo es real. 
		 
		 if(validarEmail(correo_l) ){
		 
				// mensaje de carga
				//$.mobile.showPageLoadingMsg("a", "Conectando, espere porfavor!");
				//conecta a un archivo de registro
				archivoValidacion = "http://coffeecloud.arkux.com/php/login.php?jsoncallback=?";
				// se obtienen los datos
				$.getJSON( archivoValidacion, {correo: correo_l, pass: pass_l})
				//valida si retorna un valor correcto :D
						.done(function(respuestaServer) {	
						var datos=respuestaServer.mensaje;
							datos = datos.split(',');
						var nombre_h = datos[1];
						var id_h = datos[2];
						
						  if(datos[0] == "1"){	
							   $('#nombre_hidden').val(nombre_h);
							   $('#id_hidden').val(id_h);
							//$.mobile.loading( "hide" );
							//showAlert();
							// redireccionar a pronostico
							$.mobile.changePage( "#pronostico", { reverse: true } );
						  }
						  else if(datos[0] == "2"){
							//$.mobile.loading( "hide" );
							//showAlert1();	 
						  }	
						  else
						  {
						 	//$.mobile.loading("hide");
						  	//showAlertE();
						  }	  

						 })
				}else{
					//$.mobile.loading( "hide" );
					//showAlert2();
				} 
	}else{
		//$.mobile.loading( "hide" );
		//showAlert3();
	}
}

function recuperar()
{
	var correo_re = $("#correo_r").val();
	 
	if(correo_re){
		// valida si el correo es real. 
		 if(validarEmail(correo_re) ){
		  
				// mensaje de carga
				//$.mobile.showPageLoadingMsg("a", "Enviando, correo de recuperacion!");
				//conecta a un archivo de registro
				archivoValidacion = "http://coffeecloud.arkux.com/php/recuperacion.php?jsoncallback=?";
				// se obtienen los datos
				$.getJSON( archivoValidacion, {correo: correo_re})
				//valida si retorna un valor correcto :D
						.done(function(respuestaServer) {	
						var datos=respuestaServer.mensaje;						
						  if(respuestaServer.mensaje == "1"){	
							//$.mobile.loading( "hide" );
						//	showAlert();
							 
							// redireccionar a pronostico
							$.mobile.changePage( "#principal", { reverse: true } );
						  }
						  else if(respuestaServer.mensaje == "2"){
							//$.mobile.loading( "hide" );
							//showAlert1();	 
						  }	
						  else
						  {
						  	//$.mobile.loading("hide");
						  	//showAlertE();
						  }	  

						 })
				}else{
					//$.mobile.loading( "hide" );
					//showAlert2();
				} 
	}else{
		//$.mobile.loading( "hide" );
		//showAlert3();
	}
	
}

function actualizar_cuenta()
{
	// recupera los datos.
	var id_ac = $("#id_hidden").val();
	var correo_ac = $("#correo_ac").val();
	var nombre_ac = $("#nombre_ac").val();
	var pass_ac = $("#pass_ac").val();
	var actividad_ac = $("#actividad_ac").val();
	var telefono_ac= $("#telefono_ac").val();
	var provincia_ac = $('#provincia_ac').val();
	var canton_ac = $("#canton").val();
	var region_ac = $("#region").val();
	//  se valida que los campos no esten vacios
	
	if(correo_ac != "" && nombre_ac != "" && pass_ac != "" && actividad_ac != "" && telefono_ac != "" && canton_ac != "" && region_ac !="" && id_ac !="" && provincia_ac != ""){
		// valida si el correo es real. 
		 if(validarEmail(correo_re) ){
				// mensaje de carga
				//$.mobile.showPageLoadingMsg("a", "Actualizando datos, espere!");
				//conecta a un archivo de registro
				archivoValidacion = "http://coffeecloud.arkux.com/php/actu_info.php?jsoncallback=?";
				// se obtienen los datos
				$.getJSON( archivoValidacion, {id:id_ac , correo:correo_ac, nombre:nombre_ac, pass: pass_ac,  fk_actividad: actividad_ac, telefono: telefono_ac, fk_canton: canton_ac, fk_region:region_ac})
				//valida si retorna un valor correcto :D
						.done(function(respuestaServer) {	
						var datos=respuestaServer.mensaje;						
						  if(respuestaServer.mensaje == "1"){	
							//$.mobile.loading( "hide" );
							//showAlert();
							// redireccionar a pronostico
							$.mobile.changePage( "#principal", { reverse: true } );
						  }
						  else if(respuestaServer.mensaje == "2"){
							//$.mobile.loading( "hide" );
							//showAlert1();	 
						  }	
						  else
						  {
						  	//$.mobile.loading("hide");
						  	//showAlertE();
						  }	  

						 })
				}else{
					$.mobile.loading( "hide" );
//showAlert2();
				} 
	}else{
		$.mobile.loading( "hide" );
		//showAlert3();
	}
}

function cargar_provincia()
{
	archivoValidacion = "http://coffeecloud.arkux.com/php/provincia.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {entro: "1"})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#provincia").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}

function cargar_canton(value)
{
	var parametro = value.options[value.selectedIndex].value;
	archivoValidacion = "http://coffeecloud.arkux.com/php/canton.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {provincia: parametro})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#canton").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}

function cargar_region()
{
	archivoValidacion = "http://coffeecloud.arkux.com/php/region.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {solicitud: "1"})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#region").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}

function cargar_actividad()
{
	archivoValidacion = "http://coffeecloud.arkux.com/php/actividad.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {solicitud: "1"})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#actividad").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}
function cargar_agente()
{
	archivoValidacion = "http://coffeecloud.arkux.com/php/agente.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {solicitud: "1"})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#agente_r").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}
function cargar_cafe()
{
	archivoValidacion = "http://coffeecloud.arkux.com/php/cafe.php?jsoncallback=?";
	$.getJSON( archivoValidacion, {solicitud: "1"})
		.done(function(respuestaServer) {	
		var data=respuestaServer.resultado;
		$.each(data, function(i,item){
		//introducimos los option del Json obtenido
		$("#cafe_r").append('<option value="'+item.id+'">'+item.nombre+'</option>');
		});
	})
}

function correcto(rutaImagen)
{	
	$("#imgCamara_da").show();
	//$.mobile.showPageLoadingMsg("a", "Subiendo fotografias");
	document.getElementById("imgCamara_da").src=rutaImagen;
	alert(rutaImagen);
	fichero = rutaImagen;
	var options = new FileUploadOptions();
	options.fileKey = "file";
	options.fileName= fichero.substr(fichero.lastIndexOf('/')+1);
	options.mimeType="image/jpeg";
	options.chunkedMode= true;
	var te=document.getElementById("llave").value;
	var params = new Object();
	params.descripcion = document.getElementById("descripcion1").value;
	params.llave  = document.getElementById("llave").value;
	
	options.params= params;
	var ft = new FileTransfer();
	var percentageUpload = 0;
	ft.upload(fichero, "http://coffeecloud.arkux.com/php/imagen.php", win,fail, options);
	rutaImagen = "";
	//$.mobile.loading( "hide" );
	//showAlert();
}
function win(r)
{
	alert("yes");
	//showAlert();
}
function fail(error)
{
	alert("upload error source" + error.source);
	alert("upload error target" + error.target);
	alert("An error has ocurred: Code=" + error.code);
}
function reporte()
{
var llave_r= $("#llave").val();
var usuario_r = $("#id_hidden").val();
var anonimo_r = $("#anonimo_r").val();
var area_r = $("#area_r").val();
var manejosol_r = $("#manejosol").val();
var manejosombra_r = $("#manejosombra").val();
var fk_tipocafe_r = $("#cafe_r").val();
var fk_agente_r =$("#agente_r").val();
var notas_r = $("#notas_r").val();
var imagen_r = "asdas";
var manejo;
if(anonimo_r == 2)
{
	usuario_r = 0;
}
if(manejosol_r != "" && manejosombra_r == "")
{
	var manejo = manejosol_r;
}
else if(manejosol_r == "" && manejosombra_r != "")
{
	var manejo = manejosombra_r;
}
else if(manejosol_r != "" && manejosombra_r != "")
{
 var manejo = "ambos";
}

	archivoValidacion = "http://coffeecloud.arkux.com/php/reporte.php?jsoncallback=?";
				// se obtienen los datos
				$.getJSON( archivoValidacion, {usuario:usuario_r, area:area_r, manejo:manejo, fk_tipocafe:fk_tipocafe_r, fk_agente:fk_agente_r, notas: notas_r,llave:llave_r, imagen: imagen_r })
				//valida si retorna un valor correcto :D
						.done(function(respuestaServer) {	
						var datos=respuestaServer.mensaje;	
												
						  if(respuestaServer.mensaje == "1"){	
						  //alert("in");
							$.mobile.loading( "hide" );
							//alert("1");
							showAlert();
							$.mobile.changePage( "#principal", { reverse: true } );
							limpiar_registro();
						  }
						  else if(respuestaServer.mensaje == "2"){
							$.mobile.loading( "hide" );
							//showAlert1();	 
						  }	
});

}
