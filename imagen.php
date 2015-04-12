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
$permitidos = array("image/jpg", "image/jpeg", "image/gif", "image/png");
$limite_kb = 16384;
/*recibir parametros del App movil*/
/*meter lo de las imagenes*/
if (!isset($_FILES["file"]) || $_FILES["file"]["error"] > 0)
{
    echo "Ha ocurrido un error.";
}
else
{
    	$llave = $_REQUEST['llave'];
		$descripcion=$_REQUEST['descripcion'];
    	$permitidos = array("image/jpg", "image/jpeg", "image/gif", "image/png");
    	$limite_kb = 16384;
    if (in_array($_FILES['file']['type'], $permitidos) && $_FILES['file']['size'] <= $limite_kb * 1024)
    {
        $imagen_temporal = $_FILES['file']['tmp_name'];
        $tipo = $_FILES['file']['type'];
        $fp = fopen($imagen_temporal, 'r+b');
        $data = fread($fp, filesize($imagen_temporal));
        fclose($fp);
        $data = mysql_escape_string($data);
        mysql_query("SET NAMES utf8");

		$tama=$_FILES['file']['size'];
        $resultado = @mysql_query(" INSERT INTO REPORTE (ID, FOTO_PLAGA,NOMBRE_FOTO,TAMANIO_FOTO,EXTENSION_FOTO) VALUES
		('$llave','$data','$descripcion','$tama', '$tipo');") or die (mysql_error());
        if ($resultado)
        {
            echo "El archivo ha sido copiado exitosamente.";
        }
        else
        {
            echo "Ocurrió algun error al copiar el archivo.";
        }
    }
    else
    {
        echo "Formato de archivo no permitido o excede el tamaño límite de $limite_kb Kbytes.";
    }
		$descripcion='';
		$tipo='';
		$data='';
		$llave='';  
}
/********************************************************/
?>
