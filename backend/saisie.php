<?php

require "configMsgs.php";

$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=$_POST['datec'];
$_conx=mysqli_connect("localhost","root","","messagerie");
$sql="INSERT INTO message(destinataire,contenu,date,origine) VALUES ('$name','$conte','$dat',$idUser);";
$_result=mysqli_query($_conx,$sql);
$sqlsup="DELETE FROM message WHERE id=$_GET['id']";
$_result=mysqli_query($_conx,$sqlsup);

?>