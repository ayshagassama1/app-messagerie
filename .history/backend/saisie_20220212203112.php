<?php
$message=array();
$message['contenu']=$_POST['floatingInput'];
$js=file_get_contents('saisie.json');

$js=json_encode($js,true);
$js=$message;
$js=json_encode($js);
file_put_contents('saisie.json',$js)
?>