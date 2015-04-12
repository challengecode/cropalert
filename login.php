<?php
/*
Desarrolladores: Arelys Orozco
						 Arnoldo Quirós
						 Ariel Campos
						 Joseph Loaiza						 
Hackathon 2015 
Coffe Cloud
*/

include("conexion.php");//llamamos la clase de conexion

$db = new MySQL();//instanciar la clase
$respuesta = array();//array que enviara respuesta
/*recibir parametros del App movil*/
$correo=$_REQUEST['correo']; 
$pass=$_REQUEST['pass'];
if($correo!="" && $pass!="")
{ 
	/*ejecutar consulta*/
	$consulta = $db->consulta("SELECT NOMBRE,ID FROM USUARIO WHERE CORREO='$correo' AND PASS='$pass' ");
	if($db->num_rows($consulta)>0){
		$paso=1;//bandera de que si tiene datos;
		  while($resultados = $db->fetch_array($consulta)){ 
			   $name=$resultados['NOMBRE'];
				$id=$resultados['ID'];
				$respuesta["mensaje"] = $paso. ',' .$name.','.$id;	 //mensaje de exito  
		 }
	}
}else
{
		$respuesta["mensaje"] = '2,no';	 //mensaje de exito  
}
/*envio de resultados*/
$resultadosJson = json_encode($respuesta);
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
/********************************************************/
?>
