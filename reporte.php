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
$usuario = $_REQUEST['usuario'];
$area=$_REQUEST['area']; 
$manejo=$_REQUEST['manejo'];
$fk_tipocafe = $_REQUEST['fk_tipocafe'];
$fk_agente = $_REQUEST['fk_agente'];
$notas = $_REQUEST['notas'];
$imagen= $_REQUEST['imagen']; 
$id=$_REQUEST['llave'];
	if(/*$usuario!="" && $area!=""  &&*/ $imagen!="")
	{ 
		/*ejecutar consulta*/
		$fecha='NOW()';
		$cambio="UPDATE REPORTE SET USUARIO='$usuario' , AREA='$area' ,MANEJO='$manejo' ,FK_TIPOCAFE='$fk_tipocafe', FK_AGENTES='$fk_agente' , NOTAS='$notas',  FECHA_HORA=NOW() WHERE ID='$id' ";
		echo "es " .$cambio;
		$consulta = $db->consulta($cambio);
		if($consulta){
				$paso=1;//bandera de que si tiene datos;			
				/**********************************/
				$respuesta["mensaje"] = $paso;	 //mensaje de exito  	
			 }	
	}else if($imagen=="")
	{
		$fecha='NOW()';
		$ins="INSERT INTO REPORTE VALUE('$id','$usuario','$area','$manejo','$fk_tipocafe','$fk_agente','$notas',NOW(),'','','','')";
		$consulta = $db->consulta($ins);
		if($consulta){
				$paso=1;//bandera de que si tiene datos;			
				/**********************************/
				$respuesta["mensaje"] = $paso;	 //mensaje de exito  	
			 }	
	}
/*envio de resultados*/
$resultadosJson = json_encode($respuesta);
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
/********************************************************/
?>
