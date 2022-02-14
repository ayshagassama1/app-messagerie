<?php
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=strtr($_REQUEST['date'],'/';'-');
$date=date('y-m-d',strtotime($dat));
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO message(destinataire,contenu,'date') VALUES ('$name','$conte','$date');";
$_result=mysqli_query($_conx,$sql);

?>