<?php

require "configMsgs.php";

header('Content-Type:application/json');

//tous les utilisateur sauf le groupe (c'est lui qui a l'i 1)
$query = $bdd->prepare('SELECT * FROM utilisateur WHERE id != 1 and id != ?');
$query->execute(array($idUser));
$utilisateur = array();
while($reponse = $query->fetch())
{
    $user = array(
        "id" => $reponse["id"],
        "nom" => $reponse["nom"],
        "prenom" => $reponse["prenom"],
        "email" => $reponse["email"]
    );
    array_push($utilisateur, json_encode($user));
}

echo(json_encode(array("utilisateurs"=>$utilisateur))); // print array



