<?php
if(isset($_POST['name'])){
$name=$_POST['name'];
$conte=$_POST['conte'];
$_conx=mysql_connect("localhost","root","","demo");
$sql="INSERT INTO 'message'('name','conte') VALUES ('$name','$conte');";
$_result=mysqli_query($_conx,$sql);
}
?>