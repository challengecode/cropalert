<?php
/*
Llena combobox de actividad
Desarrolladores: Arelys Orozco
						 Arnoldo Quirós
						 Ariel Campos
						 Joseph Loaiza						 
Hackathon 2015 
Coffe Cloud
*/
include("conexion.php");//llamamos la clase de conexion
$db = new MySQL();//instanciar la clase
$i=0;//contador...
$respuesta = array();//array que enviara respuesta
$provincia = $_REQUEST['provincia'];
$consulta = $db->consulta("SELECT DISTINCT ID,NOMBRE FROM ACTIVIDAD");
	if($db->num_rows($consulta)>0){
			$paso=1;//bandera de que si tiene datos;
			  while($resultados = $db->fetch_array($consulta)){ 
				   $name=$resultados['NOMBRE'];
					$id=$resultados['ID'];				
					$respuesta[$i]['nombre'] = $name;
					$respuesta[$i]['id'] = $id;
					$i++;
			 }
			 $dataset['resultado'] = $respuesta;
		}
		$resultadosJson = Json_encode($dataset);
		echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
?>
