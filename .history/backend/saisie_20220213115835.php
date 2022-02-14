<?php
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=strtr($_REQUEST['datec'],'/';'-');
$date=date('y-m-d',strtotime($dat));
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO message(destinataire,contenu,datec) VALUES ('$name','$conte','$dat');";
$_result=mysqli_query($_conx,$sql);

?>