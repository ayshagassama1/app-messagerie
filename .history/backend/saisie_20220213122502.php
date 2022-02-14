<?php
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=C;
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO message(destinataire,contenu,datec) VALUES ('$name','$conte','$dat');";
$_result=mysqli_query($_conx,$sql);

?>