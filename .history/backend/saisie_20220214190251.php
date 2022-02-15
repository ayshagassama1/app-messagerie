<?php
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=$_POST['date'];
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO messagerie(destinataire,contenu,origine,date) VALUES ('$name','$conte',2,'$dat');";
$_result=mysqli_query($_conx,$sql);

?>