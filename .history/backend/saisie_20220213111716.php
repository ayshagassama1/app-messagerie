<?php
$name=$_POST['id'];
$conte=$_POST['floatingInput'];
$_conx=mysqli_connect("localhost","root","","message");
$sql="INSERT INTO message(id,contenu) VALUES ('$name','$conte');";
$_result=mysqli_query($_conx,$sql);

?>