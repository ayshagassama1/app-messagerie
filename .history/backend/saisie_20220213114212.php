<?php
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO message(destinataire,contenu,date) VALUES ('$name','$conte');";
$_result=mysqli_query($_conx,$sql);

?>