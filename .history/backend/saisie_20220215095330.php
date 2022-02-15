<?php
require "configMsgs.php";
$_conx=mysqli_connect("localhost","root","","messagerie");
if(isset($_POST['destinataire']) && isset($_POST['contenu']) && isset($_POST['date'])){
$name=$_POST['destinataire'];
$conte=$_POST['contenu'];
$dat=$_POST['date'];
$sql="INSERT INTO message(destinataire,contenu,origine,date) VALUES ('$name','$conte',$idUser,'$dat');";
$_result=mysqli_query($_conx,$sql);
}
if(isset($_POST['id'])){
$ide=$_POST['id'];
$sql="DELETE FROM message WHERE id='$ide'";
$_result=mysqli_query($_conx,$sql);}
?>