<?php
/*
Desarrolladores: Arelys Orozco
						 Arnoldo Quirós
						 Ariel Campos
						 Joseph Loaiza						 
Hackathon 2015 
Coffee Cloud
*/
include("conexion.php");//llamamos la clase de conexion
$db = new MySQL();//instanciar la clase
$i=0;//contador...
$respuesta = array();//array que enviara respuesta
$consulta = $db->consulta("SELECT ID,NOMBRE FROM REGION");
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
