<?php
require "configMsgs.php";

if(isset($_POST['destinataire']) && isset($_POST['contenu']) && isset($_POST['date'])){      
    $name=$_POST['destinataire'];
    $conte=$_POST['contenu'];
    $dat=$_POST['date'];
    $query = $bdd->prepare('INSERT INTO message(destinataire,contenu,origine,date) VALUES (?,?,?,?)');
    $query->execute(array($name,$conte,$idUser,$dat));
    $reponse = $query->fetch();
}
if(isset($_POST['id'])){
$ide=$_POST['id'];
$query = $bdd->prepare('DELETE FROM message WHERE id=?');
$query->execute(array($ide));
$reponse = $query->fetch();
}
?>