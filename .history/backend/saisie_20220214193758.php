<?php

$_conx=mysqli_connect("localhost","root","","messagerie");
/*$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=$_POST['date'];
$sql="INSERT INTO message(destinataire,contenu,origine,date) VALUES ('$name','$conte',2,'$dat');";
$_result=mysqli_query($_conx,$sql);*/
$ide=$_POST['id'];
$sql="DELETE FROM message WHERE id='$ide'";
$_result=mysqli_query($_conx,$sql);
?>